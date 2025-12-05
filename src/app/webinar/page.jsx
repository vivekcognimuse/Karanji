// app/events-webinars/page.jsx
import WebinarHeader from "@/components/webinar/WebinarHeader";
import MeetSpeakers from "@/components/webinar/MeetSpeakers";
import WebinarAgenda from "@/components/webinar/WebinarAgenda";
import SuccessStories from "@/components/webinar/SuccessStories";
import RegisterForWebinar from "@/components/webinar/RegisterForWebinar";
import { draftMode } from "next/headers";

import { fetchFromStrapi } from "@/lib/strapi";
import { getMediaUrl } from "@/utils/ish"; // make sure this returns a full URL for Strapi media

export const revalidate = 3600; // ISR

// tiny helper for Strapi "blocks" -> plain text
function blocksToText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  // Strapi blocks is usually an array of nodes with "children"
  try {
    return (Array.isArray(value) ? value : [value])
      .map((node) => {
        const children = node?.children || node?.paragraphs || [];
        if (Array.isArray(children)) {
          return children.map((c) => c?.text || "").join("");
        }
        return node?.text || "";
      })
      .filter(Boolean)
      .join("\n\n")
      .trim();
  } catch {
    return "";
  }
}

// normalize to your old JSON shape
function normalizeWebinar(strapiData) {
  const a = strapiData?.attributes ?? strapiData ?? {};

  /* -------------------- Header -------------------- */
  const headerRaw = a.header ?? {};
  const buttonsList = headerRaw.buttons ?? []; // repeatable
  const firstButtons = Array.isArray(buttonsList)
    ? buttonsList[0] ?? {}
    : buttonsList || {};
  const header = {
    title: headerRaw.title ?? "",
    description: blocksToText(headerRaw.description) ?? "",
    date: headerRaw.date ?? "",
    time: headerRaw.time ?? "",
    location: headerRaw.location ?? "",
    buttons: {
      register: firstButtons.register ?? "",
      registerLink: firstButtons.registerLink ?? "",
      preview: firstButtons.preview ?? "",
      previewLink: firstButtons.previewLink ?? "",
    },
  };

  /* -------------------- Speakers -------------------- */
  // In your single type, "speakers" is repeatable; each item has { title, description(blocks), list[] }
  const speakersSections = Array.isArray(a.speakers)
    ? a.speakers
    : a.speakers
    ? [a.speakers]
    : [];
  const mergedSpeakerLists = speakersSections.flatMap((sec) =>
    Array.isArray(sec?.list) ? sec.list : []
  );
  const speakers = {
    title: speakersSections[0]?.title ?? "",
    description: blocksToText(speakersSections[0]?.description) ?? "",
    list: mergedSpeakerLists.map((item) => {
      const it = item?.attributes ?? item ?? {};
      const img = it.image?.data ?? it.image;
      const imgUrl =
        getMediaUrl(it.image) ||
        (typeof it.image === "string" ? it.image : "") ||
        "/images/placeholder-avatar.png";
      return {
        name: it.name ?? "",
        title: it.title ?? "",
        image: imgUrl ?? "",
        linkedin: it.linkedin ?? "",
      };
    }),
  };

  /* -------------------- Success Stories -------------------- */
  // Attribute is named "successStory" (repeatable)
  const successRaw = Array.isArray(a.successStory) ? a.successStory : [];
  const successStories = successRaw.map((s) => {
    const it = s?.attributes ?? s ?? {};
    const img = it.image?.data ?? it.image;
    const imgUrl =
      getMediaUrl(it.image) ||
      (typeof it.image === "string" ? it.image : "") ||
      "/images/placeholder-testimonial.png"; // make sure this file exists

    return {
      company: it.company ?? "",
      testimonial: it.testimonial ?? "",
      author: it.author ?? "",
      companyFull: it.companyFull ?? "",
      image: imgUrl ?? "",
    };
  });

  /* -------------------- Registration -------------------- */
  // You didn’t paste the registration component schema, but mapping to your JSON:
  const reg = a.registration ?? {};
  const featuresList = Array.isArray(reg.feature)
    ? reg.feature
    : Array.isArray(reg.features)
    ? reg.features
    : [];
  const registerBox = reg.registerBox ?? {};
  const registration = {
    title: reg.title ?? "",
    description: reg.description ?? "",
    features: featuresList.map((f) => {
      const it = f?.attributes ?? f ?? {};
      return { title: it.title ?? "", description: it.description ?? "" };
    }),
    registerBox: {
      subTitle: registerBox.subTitle ?? registerBox[" subTitle"] ?? "",
    },
  };

  /* -------------------- Agenda -------------------- */
  const agendaBlocks = Array.isArray(a.agenda)
    ? a.agenda
    : a.agenda
    ? [a.agenda]
    : [];

  const firstAgenda = agendaBlocks[0] ?? {};

  const allSessions = agendaBlocks.flatMap((ag) =>
    Array.isArray(ag.sessions) ? ag.sessions : []
  );

  // TAKEAWAYS: repeatable { title, description }
  const mergedTakeaways = agendaBlocks
    .flatMap((ag) => (Array.isArray(ag.takeaways) ? ag.takeaways : []))
    .map((item) => ({
      title: (item.title ?? "").trim(),
      description: (item.description ?? "").trim(),
    }))
    .filter((t) => t.title);

  // CERTIFICATE: single component { title, description }
  const certRaw = firstAgenda.Certificate ?? {};

  const agenda = {
    title: firstAgenda.title ?? "",
    subTitle: firstAgenda.subtitle ?? firstAgenda.subTitle ?? "",
    sessions: allSessions.map((s) => {
      const it = s?.attributes ?? s ?? {}; // sessions might still be relations
      return {
        time: it.time ?? "",
        tag: it.tag ?? "",
        title: it.title ?? "",
        description: it.description ?? "",
        speaker: it.speaker ?? "",
      };
    }),
    takeaways: mergedTakeaways,
    certificate: {
      title: (certRaw.title ?? "").trim(),
      description: (certRaw.description ?? "").trim(),
    },
  };

  return { header, speakers, successStories, registration, agenda };
}

export default async function WebinarPage() {
  const { isEnabled: isPreview } = await draftMode();
  // Single type name is "webinar". Use populate=* to get media inside components.
  const data = await fetchFromStrapi("webinar", { preview: isPreview });
  if (!data) return null;

  const webinar = normalizeWebinar(data);

  return (
    <main>
      <WebinarHeader data={webinar.header} bgImage={"/hero/webinarBg.webp"} />
      <div className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
        <MeetSpeakers speakers={webinar.speakers} />
        <WebinarAgenda agenda={webinar.agenda} />
        <SuccessStories stories={webinar.successStories} />
        <RegisterForWebinar data={webinar.registration} />
      </div>
    </main>
  );
}
