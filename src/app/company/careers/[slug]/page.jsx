// app/company/careers/[slug]/page.jsx
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import CareerDetails from "@/sections/Company/careers/CareerDetails";
import { fetchFromStrapi } from "@/lib/strapi";
import { toPlainText, arrayifyList } from "@/utils/ish";

function timeAgoFrom(dateInput) {
  if (!dateInput) return "";
  const now = new Date();
  const dt = new Date(dateInput);
  const diffMs = now - dt;
  if (diffMs < 0) return "Just now";
  const sec = Math.floor(diffMs / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);
  const day = Math.floor(hr / 24);
  const mo = Math.floor(day / 30);
  const yr = Math.floor(day / 365);
  if (yr > 0) return yr === 1 ? "1 year ago" : `${yr} years ago`;
  if (mo > 0) return mo === 1 ? "1 month ago" : `${mo} months ago`;
  if (day > 0) return day === 1 ? "1 day ago" : `${day} days ago`;
  if (hr > 0) return hr === 1 ? "1 hour ago" : `${hr} hours ago`;
  if (min > 0) return min === 1 ? "1 minute ago" : `${min} minutes ago`;
  return "Just now";
}

function normalizeCareer(entry) {
  const attrs = entry?.attributes ?? entry ?? {};

  // Handle possible Title/Slug casing from schema
  const Title = attrs.Title ?? attrs.title ?? "";
  const Slug = attrs.Slug ?? attrs.slug ?? "";

  const category = attrs.category ?? attrs.Category ?? "";
  const Location = attrs.Location ?? attrs.location ?? "";
  const WorkModel = attrs.WorkModel ?? attrs.workModel ?? "";
  const EmploymentType = attrs.EmploymentType ?? attrs.employmentType ?? "";
  const Experience = attrs.Experience ?? attrs.experience ?? "";
  const PostedAt = attrs.PostedAt ?? attrs.postedAt ?? "";

  const Summary = toPlainText(attrs.Summary ?? attrs.summary ?? "");

  // Convert repeatable component lists -> string[]
  const Responsibilities = arrayifyList(attrs.Responsibilities ?? []);
  const Requirements = arrayifyList(attrs.Requirements ?? []);
  const TrainingProvided = arrayifyList(attrs.trainingProvided ?? []);
  const Preferred = arrayifyList(attrs.preferred ?? []);
  const TechStack = arrayifyList(attrs.techStack ?? []);

  return {
    title: Title,
    slug: Slug,
    category,
    location: Location,
    workModel: WorkModel,
    employmentType: EmploymentType,
    experience: Experience,
    postedAt: PostedAt,
    postedAgo: timeAgoFrom(PostedAt),
    summary: Summary,
    responsibilities: Responsibilities,
    requirements: Requirements,
    trainingProvided: TrainingProvided,
    preferred: Preferred,
    techStack: TechStack,
  };
}

export default async function CareerDetailsPage({ params }) {
  const { isEnabled: isPreview } = await draftMode();

  const { slug } = await params;

  // Filter by UID field "Slug" (as per your schema)
  // This builds: /api/careers?filters[Slug][$eq]=<slug>&populate=<...>
  const rows = await fetchFromStrapi(
    `careers?filters[Slug][$eq]=${encodeURIComponent(slug)}`,
    { preview: isPreview }
  );

  const entry = Array.isArray(rows) ? rows[0] : rows;
  if (!entry) return notFound();

  const job = normalizeCareer(entry);

  // If the slug didn't match anything valid after normalization
  if (!job?.title) return notFound();

  return (
    <CareerDetails
      title={job.title}
      category={job.category}
      location={job.location}
      workModel={job.workModel}
      employmentType={job.employmentType}
      postedAgo={job.postedAgo}
      summary={job.summary}
      responsibilities={job.responsibilities}
      requirements={job.requirements}
      trainingProvided={job.trainingProvided}
      preferred={job.preferred}
      techStack={job.techStack}
      applyEmail="recruitment@karanji.com"
      backHref="/company/careers"
    />
  );
}

// Pre-generate static paths for SSG/ISR (optional)
export async function generateStaticParams() {
  // Query only the Slug field to keep payload light
  const rows = await fetchFromStrapi(
    "careers?fields[0]=Slug&pagination[pageSize]=100"
  );
  if (!Array.isArray(rows)) return [];
  return rows
    .map((r) => r?.attributes?.Slug ?? r?.Slug)
    .filter(Boolean)
    .map((slug) => ({ slug }));
}
