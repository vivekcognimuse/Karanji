// app/company/careers/page.jsx
import CTA from "@/sections/digital-learning/CTA";
import WhyWorkWithUsSection from "@/sections/Company/careers/WhyWorkWithUsSection";
import CareersTable from "@/sections/Company/careers/CareersTable";
import { fetchFromStrapi } from "@/lib/strapi";
import { getMediaUrl } from "@/utils/ish";

function normalizeLanding(data) {
  // Strapi single type usually returns: { id, attributes: {...} }
  const attrs = data?.attributes ?? data ?? {};

  // Keep names identical to your components' expected props
  const teamData = attrs.teamData ?? {};
  const sectionData = attrs.whySectionData ?? {};
  const cards = Array.isArray(attrs.cardsData)
    ? attrs.cardsData.map((c, i) => {
        const item = c?.attributes ?? c ?? {};
        const rawIcon =
          typeof item.icon === "string"
            ? item.icon
            : typeof item.Icon === "string"
            ? item.Icon
            : "";

        return {
          id: item.id ?? i,
          title: item.title ?? item.Title ?? "",
          description: item.description ?? item.Description ?? "",
          // icon is a plain text path like "/Company/Team/icons/culture.svg"
          icon: rawIcon
            ? (rawIcon.startsWith("/") ? rawIcon : `/${rawIcon}`).trim()
            : "",
          // image can be Strapi media or a string path
          image: getMediaUrl(item.image),
        };
      })
    : [];

  const ctaData = attrs.ctaData ?? {};

  // Default careers rows (table on landing)
  // Expecting items like: { title, type, duration?, location, experience, category }
  const defaultCareersRaw = Array.isArray(attrs.defaultCareers)
    ? attrs.defaultCareers
    : [];

  // If these come as component objects, pass through as-is; otherwise map to safe shape
  const defaultCareers = defaultCareersRaw.map((item, i) => {
    // component entries may be plain objects already
    const row = item?.attributes ?? item ?? {};
    return {
      id: row.id ?? i,
      title: row.title ?? row.Title ?? "",
      type: row.type ?? "",
      duration: row.duration ?? "",
      location: row.location ?? row.Location ?? "",
      experience: row.experience ?? row.Experience ?? "",
      category: row.category ?? row.Category ?? "",
    };
  });

  return { teamData, sectionData, cards, ctaData, defaultCareers };
}
export const metadata = {
  title:
    "Careers at Karanji: Join Our AI, VR and Digital Learning Innovation Team",
  description:
    "Build your career with Karanji's innovative team. Explore opportunities in AI development, VR programming, instructional design, and shape the future of technology and learning.",
};
export default async function CareersPage() {
  // 1) Pull the single type (cards need image populate)
  // If your wrapper is picky, you can also just do "careerpage?populate=*"
  const pageData = await fetchFromStrapi("careerpage");
  // 2) Pull careers (source of truth for Slug)
  const careers = await fetchFromStrapi(
    "careers?fields[0]=Title&fields[1]=Slug&fields[2]=category&fields[3]=Location&fields[4]=Experience&fields[5]=EmploymentType&sort=PostedAt:desc&pagination[pageSize]=200"
  );
  if (!pageData) return null;

  const { teamData, sectionData, cards, cta, defaultCareers } =
    normalizeLanding(pageData);
  console.log("cta in careers", pageData, cta);
  // Build a fast lookup of careers by normalized Title
  const normalize = (s) => (s || "").trim().toLowerCase();
  const careersByTitle = new Map(
    (Array.isArray(careers) ? careers : []).map((e) => {
      const a = e?.attributes ?? e ?? {};
      return [normalize(a.Title), a];
    })
  );

  const mergedCareers = (defaultCareers || []).map((row, i) => {
    const match = careersByTitle.get(normalize(row.title));
    return {
      id: row.id ?? i,
      title: row.title,
      // prefer curated values for table display; fall back to collection values
      type: row.type ?? match?.EmploymentType ?? "",
      duration: row.duration ?? "",
      location: row.location ?? match?.Location ?? "",
      experience: row.experience ?? match?.Experience ?? "",
      category: row.category ?? match?.category ?? "",
      // key part: real slug from collection (fallback to empty)
      slug: match?.Slug ?? "",
    };
  });

  return (
    <main className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16 lg:space-y-32">
      {/* Wrapper for all components except the last CTA */}
      <div
        className="px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12 mb-30 my-auto rounded-[32px]"
        style={{
          background:
            "linear-gradient(93.27deg, rgba(158, 135, 255, 0.1) 8.1%, rgba(109, 191, 254, 0.1) 41.6%, rgba(255, 143, 143, 0.1) 95.33%, rgba(255, 255, 255, 0.1) 127.34%)",
          backdropFilter: "blur(28.100000381469727px)",
          boxShadow: "0px 4px 4px 0px rgba(204, 204, 204, 0.25)",
        }}>
        <div className="space-y-16 lg:space-y-32">
          {/* Hero */}
          <CTA
            data={teamData}
            className="
              !text-left
              [&>h3]:!text-4xl sm:[&>h3]:!text-5xl lg:[&>h3]:!text-[4rem] [&>h3]:!font-normal
              [&>.p2]:!text-[1.375rem] sm:[&>.p2]:!text-2xl
              [&_.flex-center]:justify-start [&_.flex-center]:items-start
              [&_.flex-center>button]:!px-6 [&_.flex-center>button]:!py-4 [&_.flex-center>button]:!text-lg
              lg:[&_.flex-center>button]:!px-7 lg:[&_.flex-center>button]:!py-[1.125rem] lg:[&_.flex-center>button]:!text-xl
              [&_.flex-center>a]:!px-6 [&_.flex-center>a]:!py-4 [&_.flex-center>a]:!text-lg
              lg:[&_.flex-center>a]:!px-7 lg:[&_.flex-center>a]:!py-[1.125rem] lg:[&_.flex-center>a]:!text-xl
            "
          />

          {/* Why Work With Us */}
          <WhyWorkWithUsSection
            title={sectionData?.title}
            description={sectionData?.description}
            cards={cards}
          />

          {/* Open Roles */}
          <section id="open-roles">
            <CareersTable
              jobs={mergedCareers}
              detailBasePath="/company/careers"
            />
          </section>
        </div>
      </div>

      {/* Final CTA - Outside the wrapper */}
      <CTA data={pageData.cta} />
    </main>
  );
}
