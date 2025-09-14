import { getMetadata } from "@/lib/metadata";
import { fetchFromStrapi } from "@/lib/strapi";
import HeroSection from "@/sections/Advisory/Hero";
import Methodology from "@/sections/Advisory/Methodology";
import ServiceOfferings from "@/sections/Advisory/ServiceOfferings";
import SuccessStories from "@/sections/Advisory/SuccessStories";

export async function generateMetadata() {
  return await getMetadata("xr-gaming");
}

const XRGaming = async () => {
  const data = await fetchFromStrapi("xr-gaming");
  if (!data) {
    console.error("No data object provided for HeroSection.");
    return null; // Or return a fallback UI component
  }

  const { hero, methodology, successStories, serviceOffering } = data || {};

  return (
    <main className="w-full max-w-[1580px] mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32 ">
      {" "}
      <HeroSection bgImage="/hero/XR-Gaming.webp" data={hero} />
      <div className="space-y-16 lg:space-y-32">
        <div id="xr-service-offerings">
          <ServiceOfferings
            bgImage="/service-offering/ai-advisory/default.svg"
            data={serviceOffering}
            icon={`/technologySolutions/xr-offering`}
          />
        </div>
        <Methodology data={methodology} />
        <SuccessStories data={successStories} />
      </div>
    </main>
  );
};

export default XRGaming;
