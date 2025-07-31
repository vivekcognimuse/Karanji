import React from "react";
import Button from "@/components/ui/Button";
const DownloadSection = () => {
  return (
    <section className="bg-white rounded-md shadow-sm p-6 space-y-6 border mt-24">
      <h3 className="text-2xl font-semibold">
        Why download the VR Healthcare Case Study?
      </h3>
      <p className="text-gray-600 text-sm">
        This isn’t just a story – it’s a proven blueprint for impact.
      </p>
      <p className="text-gray-600 text-sm">
        It’s a real-world example of how a global organization used immersive VR
        to upskill healthcare workers – faster, safer, and more effectively.
        From strategy to execution, see how skill gaps were closed and patient
        care improved.
      </p>

      <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-md border border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="text-sm text-gray-700 leading-relaxed">
          <p>
            If you're a CSR lead, hospital trainer, or L&D manager driving
            healthcare transformation — it’s built for you.
          </p>
          <p className="mt-1">
            Use it, learn from it, and start your own impact story
          </p>
        </div>

        <Button className="group bg-black lg:py-1 rounded-full overflow-hidden hover:scale-105 transition-transform">
          Download Full Case Study
        </Button>
      </div>
    </section>
  );
};

export default DownloadSection;
