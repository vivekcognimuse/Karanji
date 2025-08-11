// Central place to keep temporary image paths.
// Keys should be stable: prefer slugs; fallback to slugified names.

export const SPEAKER_IMAGES = {
  "alex-thompson": "/speakers/alex.png",
  "rajesh-krishnan": "/speakers/rajesh.png",
  "ananya-gupta": "/speakers/ananya.png",
  _default: "/speakers/default.png",
};

export const STORY_IMAGES = {
  // choose a stable key (company slug or author name)
  "abc": "/testimonials/alex.png",
  "xyz": "/testimonials/john.png",
  "abc2": "/testimonials/shreya.png",
  _default: "/testimonials/default.png",
};
