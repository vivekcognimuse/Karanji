"use client";
import React, { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { P2 } from "../CustomTags";
import { fetchFromStrapi } from "@/lib/strapi"; // Reuse your existing fetch function

const Upcoming = () => {
  const [upcomingItems, setUpcomingItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all case studies when the component mounts
  useEffect(() => {
    const getUpcomingItems = async () => {
      try {
        // Fetch all case studies, sorted by createdAt
        const caseStudies = await fetchFromStrapi(
          "case-studies?sort=createdAt:asc", // Fetch all case studies sorted by createdAt
          { populate: "*" },
          "http://localhost:1337/api"
        );

        // Extract data from case studies and format it for display
        const items = caseStudies.data.map((item) => ({
          title: item.attributes?.title,
          date: item.attributes?.publishedAt, // Use publishedAt field for date
          type: "Case Study", // Static type for case studies
          link: `/case-studies/${item.attributes?.slug}`, // Link to individual case study
        }));

        setUpcomingItems(items); // Set the fetched data into state
      } catch (err) {
        console.error("Error fetching upcoming items:", err);
        setError("Failed to load upcoming items.");
      } finally {
        setLoading(false);
      }
    };

    getUpcomingItems(); // Fetch items on component mount
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 p-8 rounded-2xl border border-purple-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl text-black-950">Upcoming</h4>
        <SlidersHorizontal
          size={18}
          className="text-gray-500 hover:text-black-950 cursor-pointer transition-colors"
        />
      </div>

      <div className="space-y-0">
        {upcomingItems.map((item, idx) => (
          <div key={idx}>
            <Link
              href={item.link}
              className="group block py-4 px-2 rounded-lg hover:bg-white/60 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <P2 className="text-black-800 group-hover:text-black-950 transition-colors line-clamp-2 flex-1">
                  {item.title}
                </P2>
                <div className="flex items-center gap-4 md:gap-6 shrink-0">
                  <span className="font-medium text-black-800 text-sm md:w-20">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-black-800 rounded-full text-xs font-medium md:w-24 md:text-center">
                    {item.type}
                  </span>
                </div>
              </div>
            </Link>
            {idx < upcomingItems.length - 1 && (
              <div className="border-b border-black-800 mx-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
