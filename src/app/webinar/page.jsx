//app/events-webinars/page.jsx
"use client";
import WebinarHeader from "@/components/webinar/WebinarHeader";
import MeetSpeakers from "@/components/webinar/MeetSpeakers";
import WebinarAgenda from "@/components/webinar/WebinarAgenda"; // ✅ New
import SuccessStories from "@/components/webinar/SuccessStories";
import RegisterForWebinar from "@/components/webinar/RegisterForWebinar";

import webinarData from "@/data/webinarData.json";

export default function WebinarPage() {
  return (
    <main className=" text-black w-full  mx-auto p-4  lg:p-10  ">
      <WebinarHeader
        data={webinarData.header}
        bgImage={"/hero/webinarBg.webp"}
      />
      <MeetSpeakers speakers={webinarData.speakers} />
      <WebinarAgenda agenda={webinarData.agenda} /> {/* ✅ Inserted here */}
      <SuccessStories stories={webinarData.successStories} />
      <RegisterForWebinar data={webinarData.registration} />
    </main>
  );
}
