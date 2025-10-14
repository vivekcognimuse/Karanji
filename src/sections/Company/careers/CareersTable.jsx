"use client";
import { useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { P3, P4 } from "@/components/CustomTags";
import { RevealWrapper } from "@/components/animations/RevealWrapper";

/** -------------------- Default Data (from the JD PDF) -------------------- */

/** -------------------- Helpers -------------------- */
function slugify(s) {
  return encodeURIComponent(
    s
      .toLowerCase()
      .trim()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  );
}

function computeCategories(data) {
  const counts = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});
  const cats = Object.keys(counts).map((name) => ({
    id: name.toLowerCase(),
    name,
    count: counts[name],
  }));
  cats.unshift({ id: "all", name: "All", count: data.length });
  return cats;
}

/** -------------------- Component -------------------- */
export default function CareersTable({
  jobs = defaultCareers,
  onViewRole,
  detailBasePath = "/company/careers",
}) {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = useMemo(() => computeCategories(jobs), [jobs]);

  const filteredJobs = useMemo(() => {
    if (selectedCategory === "all") return jobs;
    const target = selectedCategory.toLowerCase();
    return jobs.filter((j) => j.category.toLowerCase() === target);
  }, [jobs, selectedCategory]);

  const openCount = filteredJobs.length;

  const handleView = useCallback(
    (job) => {
      if (onViewRole) return onViewRole(job);
      router.push(`${detailBasePath}/${job.slug || ""}`);
    },
    [detailBasePath, onViewRole, router]
  );

  return (
    <div className="flex flex-col">
      <RevealWrapper
        direction="up"
        duration={0.7}
        delay={0.2}
        distance={40}
        threshold={0.15}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 gradient backdrop-blur-[30px] shadow-elevated rounded-3xl">
          {/* Desktop Tabs */}
          <div className="hidden lg:flex justify-between items-center gap-8 mb-8">
            <div className="flex gap-4 flex-wrap">
              {categories.map((c) => (
                <Button
                  variant="secondary"
                  size="sm"
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-6 py-2 gap-10 rounded-full shadow-elevated shadow-lg text-base sm:text-lg font-light transition-all duration-200 cursor-pointer ${
                    selectedCategory === c.id
                      ? "text-black" // Remove bg-black
                      : "bg-white hover:bg-black/30 text-black"
                  }`}
                  style={
                    selectedCategory === c.id
                      ? {
                          background:
                            "linear-gradient(83.18deg, #D3C9FF 0.51%, #DCF0FF 48.72%, #FFCFCF 96.92%)",
                        }
                      : undefined
                  }
                >
                  {c.name}
                </Button>
              ))}
            </div>
            <span className="text-gray-700 font-light text-xl">
              {openCount} Open Positions
            </span>
          </div>

          {/* Mobile/Tablet Filter Trigger */}
          <div className="flex justify-between items-center mb-6 lg:hidden">
            <button
              onClick={() => setFilterOpen(true)}
              className="flex items-center justify-between px-6 py-2 rounded-full text-black text-lg w-full cursor-pointer bg-white/70"
              aria-haspopup="dialog"
              aria-expanded={filterOpen}
            >
              <span className="font-light text-xl py-1 px-1">
                {
                  (
                    categories.find((c) => c.id === selectedCategory) ??
                    categories[0]
                  ).name
                }
              </span>
              <span className="text-sm text-black/60">{openCount} open</span>
            </button>
          </div>

          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-6 px-0 pb-3 text-sm tracking-wide text-black/70 border-b border-black-900">
            <P3 className="col-span-2">ROLE</P3>
            <P3>TYPE</P3>
            <P3>LOCATION</P3>
            <P3>EXPERIENCE</P3>
            <P3 className="text-right">DESCRIPTION</P3>
          </div>

          {/* Rows */}
          <div className="min-h-[200px]">
            {filteredJobs.length === 0 ? (
              <div className="py-10 text-center text-gray-500">
                No open positions found in this category.
              </div>
            ) : (
              <div className="space-y-px">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="border-b border-black-200 cursor-pointer group"
                    onClick={() => handleView(job)}
                  >
                    <div className="text-black/80 group-hover:text-white text-base lg:text-xl font-normal py-6 lg:py-8 px-4 group-hover:bg-black transition-colors duration-150">
                      {/* Desktop */}
                      <div className="hidden lg:grid grid-cols-6 items-center">
                        <P4 className="col-span-2">{job.title}</P4>
                        <P4>
                          {job.type}
                          {job.duration ? (
                            <>
                              <br />
                              <span className="text-black/60">
                                {job.duration}
                              </span>
                            </>
                          ) : null}
                        </P4>
                        <P4>{job.location}</P4>
                        <P4>{job.experience}</P4>
                        <div className="flex justify-end">
                          <Button
                            variant="secondary"
                            size="sm"
                            className="group-hover:text-white group-hover:border-white hover:text-black"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleView(job);
                            }}
                            aria-label={`View role: ${job.title}`}
                          >
                            View Role
                          </Button>
                        </div>
                      </div>

                      {/* Mobile row */}
                      <div className="lg:hidden px-4">
                        <div className="font-medium">{job.title}</div>
                        <div className="mt-1 text-sm text-black/60">
                          {job.type} • {job.location} • {job.experience}
                        </div>
                        <div className="mt-3">
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleView(job);
                            }}
                          >
                            View Role
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </RevealWrapper>

      {/* Mobile Filter Modal */}
      {filterOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/30 backdrop-blur-[32px] p-4 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Select category filter"
          onClick={() => setFilterOpen(false)}
        >
          <div
            className="rounded-2xl bg-white w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4">
              <h3 className="text-lg font-medium">Select Category</h3>
              <button
                className="px-3 py-1 rounded-lg bg-black text-white"
                onClick={() => setFilterOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="p-4 pt-0 space-y-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCategory(c.id);
                    setFilterOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-lg text-left text-lg ${
                    selectedCategory === c.id
                      ? "bg-black text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  {c.name}{" "}
                  <span className="text-black/50">
                    ({c.id === "all" ? jobs.length : c.count})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
