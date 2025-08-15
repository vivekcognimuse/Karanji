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
    <main className="">
      <WebinarHeader
        data={webinarData.header}
        bgImage={"/hero/webinarBg.webp"}
      />
      <div className="w-full max-w-[1580px] mx-auto px-4 lg:px-10 space-y-16 lg:space-y-32">
        <MeetSpeakers speakers={webinarData.speakers} />
        <WebinarAgenda agenda={webinarData.agenda} /> {/* ✅ Inserted here */}
        <SuccessStories stories={webinarData.successStories} />
        <RegisterForWebinar data={webinarData.registration} />
      </div>
    </main>
  );
}
