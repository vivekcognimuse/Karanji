// components/blog/Upcoming.jsx
import React from "react";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { P2 } from "../CustomTags";

const upcomingItems = [
  {
    title: "3D AI Advertisement",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/1",
    domain: "Technology Solutions",
  },
  {
    title: "K Buddy AI Learning Companion",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/3",
    domain: "Technology Solutions",
  },
  {
    title: "Outbound Calling Agent",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/4",
    domain: "Technology Solutions",
  },
  {
    title: "Sign Language Bot (SignBot)",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/5",
    domain: "Technology Solutions",
  },
  {
    title: "Teacher Empowerment System (TES)",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/6",
    domain: "Technology Solutions",
  },
  {
    title: "Quality Month: Video Animation",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/7",
    domain: "Entertainment Services",
  },
  {
    title: "Futuristic Digital Payments Training Module",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/8",
    domain: "Digital Learning",
  },
  {
    title: "Driving School & Training Module",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/9",
    domain: "Digital Learning ",
  },
  {
    title: "Ujjivan - Banking Sector, Corporate Learning & Development Teams",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/10",
    domain: "Digital Learning ",
  },
  {
    title: "Foundation of artificial Intelligence",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/11",
    domain: "Digital Learning ",
  },
  {
    title: "Automobile-EV Training Module",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/12",
    domain: "Digital Learning ",
  },
  {
    title: "Elevating a One-Hour Podcast into a Visually Engaging Experience",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/13",
    domain: "Entertainment Services ",
  },
  {
    title:
      "From Real Footage to On-Screen Evidence: Bringing a Murder Mystery Scene to Life",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/14",
    domain: "Entertainment Services",
  },
  {
    title: "Convocation Day School Real Video Project",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/15",
    domain: "Entertainment Services ",
  },
  {
    title: "Cybersecurity Awareness Game",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/16",
    domain: "Technology Solutions",
  },
  {
    title: "VR Training for Electric Vehicle (EV)",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/17",
    domain: "Technology Solutions",
  },
  {
    title: "Digital Twins",
    date: "06/08/2025", // Default date as no date was provided in the case study
    type: "Case Study",
    link: "/case-studies/18",
    domain: "Technology Solutions",
  },
];

const Upcoming = () => {
  return (
    <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 px-4 py-6 sm:p-6 md:p-8 rounded-2xl border border-purple-100 shadow-sm">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h4 className="text-2xl text-black-950">Upcoming</h4>
        {/* optional filters icon */}
      </div>

      <div className="space-y-0">
        {upcomingItems.map((item, idx) => (
          <div key={idx}>
            <Link
              href={item.link}
              aria-label={`Open ${item.title} (${item.type})`}
              className="group block py-3 sm:py-4 px-0 sm:px-2 rounded-lg hover:bg-white/60 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                <P2 className="text-black-800 group-hover:text-black-950 transition-colors line-clamp-2 flex-1">
                  {item.title}
                </P2>

                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0 flex-wrap sm:flex-nowrap">
                  <span className="text-gray-500 text-sm sm:text-base truncate max-w-[220px] sm:max-w-none">
                    {item.domain}
                  </span>
                  <span className="font-medium text-black-800 text-sm md:w-20">
                    {item.date}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-black-800 rounded-full text-xs font-medium md:w-24 md:text-center">
                    {item.type}
                  </span>
                </div>
              </div>
            </Link>

            {idx < upcomingItems.length - 1 && (
              <div className="border-b border-black-800 mx-0 sm:mx-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
