// data/careerDetailsData.js
export function slugify(s) {
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

export const careersDetails = [
  // 1) Content Reviewer
  {
    title: "Content Reviewer",
    category: "Learning & Content Development",
    location: "MG Road, Mangalore",
    workModel: "Work From Office",
    employmentType: "Full-time",
    experience: "3–4 years",
    postedAgo: null,
    summary:
      "Evaluate, proofread, and ensure quality, accuracy, and appropriateness of content across platforms; uphold editorial standards and alignment with brand voice, especially for AI-powered business solutions and AI consulting content.",
    responsibilities: [
      "Review and proofread content for accuracy, grammar, syntax, spelling, and punctuation.",
      "Ensure consistency with style guides, tone, and formatting standards.",
      "Conduct quality audits of translated/localized content.",
      "Identify and resolve language or cultural issues.",
      "Collaborate with creators, editors, translators, and localization teams.",
      "Provide constructive feedback and support team quality goals.",
      "Partner with cross-functional teams to suggest language-related enhancements.",
      "Conduct periodic assessments of language quality processes and workflows.",
      "Stay current with language trends, best practices, and QA tools.",
      "Review AI-related articles/assets for clarity, accuracy, and guideline alignment."
    ],
    requirements: [
      "Master’s degree in English or related field.",
      "2+ years in content reviewing, editing, or copywriting.",
      "Excellent command of grammar, spelling, and punctuation.",
      "Strong attention to detail and critical thinking.",
      "Comfort working with fast-paced deadlines and high content volumes.",
      "Familiarity with editorial standards for technology/AI content."
    ]
  },

  // 2) GenAI Developer – Interns
  {
    title: "GenAI Developer – Interns",
    category: "AI & Technology",
    location: "MG Road, Mangalore",
    workModel: "Work From Office",
    employmentType: "Full-time (Internship, 6 months)",
    experience: "Freshers",
    postedAgo: null,
    note: "May be converted to full-time based on performance and business needs.",
    summary:
      "Join the GenAI team to support cutting-edge AI projects, creating samples, assets, and research that power AI solutions across industries.",
    responsibilities: [
      "Create AI samples using various AI tools.",
      "Develop content for AI courses, videos, ads, creatives, comics.",
      "Research AI tools for productivity enhancement.",
      "Create AI avatars and experiment with AI-generated media.",
      "Research annotation services.",
      "Contribute to creative writing and visualization tasks.",
      "Explore/document chatbot use cases and conversational workflows.",
      "Assist seniors with ideation, execution, and reviews."
    ],
    requirements: [
      "Creativity and flair for innovative ideas.",
      "Fundamental knowledge of AI/ML concepts.",
      "Proficiency in creative writing using LLMs (e.g., ChatGPT, Claude).",
      "Strong visualization abilities.",
      "Basic understanding of AI tools (ChatGPT, Claude) and design tools (Canva, PowerPoint).",
      "Curiosity about the GenAI ecosystem and best practices."
    ],
    trainingProvided: ["Tool-specific training (e.g., HeyGen) will be provided."]
  },

  // 3) Instructional Designer – Interns
  {
    title: "Instructional Designer – Interns",
    category: "Learning & Content Development",
    location: "MG Road, Mangalore",
    workModel: "Onsite",
    employmentType: "Full-time",
    experience: "Fresher",
    postedAgo: null,
    summary:
      "Assist in designing and developing instructional materials for eLearning and LMS delivery, supporting content creation, editing, and course ops.",
    responsibilities: [
      "Assist in designing/developing eLearning modules, videos, simulations (LMS-packaged).",
      "Create engaging learning content aligned to objectives.",
      "Conduct basic needs assessments.",
      "Proofread/edit for accuracy, clarity, consistency; correct grammar and punctuation.",
      "Organize/maintain course assets in an LCMS.",
      "Support course setup, tracking, and reporting in the training management system."
    ],
    requirements: [
      "Bachelor’s or Master’s in CS/related; or Master’s in Finance/related.",
      "Freshers or candidates with content writing experience can apply.",
      "Strong communication skills.",
      "Good MS Office knowledge.",
      "Experience with writing/AI tools (e.g., Grammarly, ChatGPT).",
      "Interest in eLearning and digital learning technologies."
    ]
  },

  // 4) Instructional Designer
  {
    title: "Instructional Designer",
    category: "Learning & Content Development",
    location: "Bangalore",
    workModel: "Remote",
    employmentType: "Full-time",
    experience: "5–8 years",
    postedAgo: null,
    summary:
      "Design engaging, effective learning experiences across ILT/VILT/eLearning (L1–L4), integrating with LMS; lead storyboards, guides, and assessments.",
    responsibilities: [
      "Collaborate with clients/stakeholders to define training requirements and objectives.",
      "Design/develop storyboards, facilitator/learner guides, and assessments.",
      "Apply adult learning theories and models (e.g., ADDIE, Bloom’s).",
      "Work with SMEs to extract/organize content; train/mentor junior team members.",
      "Review/revise content to align with goals and brand.",
      "Coordinate A/V scripting and collaborate across teams.",
      "Package, publish, and track courses in LCMS; ensure version control/reusability."
    ],
    requirements: [
      "Bachelor’s or Master’s in Education (English-Literature, IT, Business Management).",
      "5–8 years in instructional design.",
      "Strong grasp of instructional methodologies and learning theories.",
      "Excellent writing, editing, and communication.",
      "Experience across formats (eLearning, ILT, VILT, blended).",
      "Proficiency with tools like Articulate Storyline, Adobe Captivate, etc.",
      "Ability to manage multiple projects and deadlines.",
      "Domain breadth (IT, Manufacturing, Healthcare, Automobile, Finance).",
      "Familiarity with scheduling/logistics/compliance in training management systems."
    ]
  },

  // 5) Sales Expert
  {
    title: "Sales Expert",
    category: "Business & Sales",
    location: "Delhi",
    workModel: "Remote",
    employmentType: "Full-time",
    experience: "4+ years (preferred in B2B Corporate Digital Learning)",
    postedAgo: null,
    summary:
      "Own revenue and drive growth via solution-oriented B2B sales for digital learning and enterprise LMS/LCMS/TMS offerings.",
    responsibilities: [
      "Own end-to-end sales cycles; achieve/exceed quarterly and annual targets.",
      "Identify, pursue, and close new domestic/international B2B opportunities.",
      "Grow strategic accounts via consultative and cross-selling approaches.",
      "Build relationships with CXOs and key decision makers.",
      "Execute GTM strategies for Multimedia/Digital Learning/AR/VR/GenAI solutions.",
      "Collaborate with delivery/pre-sales/marketing on proposals and pitches.",
      "Maintain accurate pipeline/forecasts; report regularly.",
      "Track market trends, competitors, and client feedback to refine strategy."
    ],
    requirements: [
      "Bachelor’s or Master’s degree.",
      "4+ years B2B sales (Digital Learning preferred).",
      "Proven record meeting/exceeding revenue targets.",
      "Strong MNC network; excellent communication/negotiation/presentation.",
      "Business/financial acumen; willingness to travel.",
      "Exposure to platform-led learning (LMS/LCMS/TMS) and packaged eLearning."
    ],
    preferred: [
      "Experience selling across varied industry sectors.",
      "Understanding of Multimedia, Digital Learning, AR/VR, AI/ML.",
      "Knowledge of AI is an advantage."
    ]
  },

  // 6) Senior Generative AI Developer
  {
    title: "Senior Generative AI Developer",
    category: "AI & Technology",
    location: "MG Road, Mangalore",
    workModel: "Remote",
    employmentType: "Full-time",
    experience: "2+ years",
    postedAgo: null,
    summary:
      "Design, build, and optimize generative AI applications (bots, agents, automations) and guide the team delivering AI-powered business solutions.",
    responsibilities: [
      "Design/develop/optimize generative AI applications to client specs.",
      "Translate needs into detailed chatbot use cases and production workflows.",
      "Mentor team members; conduct reviews; write clean, maintainable code.",
      "Lead data collection/prep/optimization for AI app performance.",
      "Track latest AI/ML research and assess applicability."
    ],
    requirements: [
      "2+ years in AI/ML with focus on generative models and delivery.",
      "Strong Python; experience with ML/NLP frameworks (LangChain, spaCy, NLTK, Hugging Face, etc.).",
      "Hands-on with NLP/bot frameworks (Dialogflow, Voiceflow, RASA, Microsoft Bot Framework, MCP).",
      "Familiarity with MLOps and cloud (AWS/GCP/Azure).",
      "Exposure to agent/bot platforms (Make, POE, RetellAI).",
      "Solid CS fundamentals; strong analytical/problem-solving skills."
    ],
    techStackMentioned: ["NLP", "AWS", "Python", "Flutter"]
  },

  // 7) Subject Matter Expert – IT Domain
  {
    title: "Subject Matter Expert – IT Domain",
    category: "Domain Experts",
    location: "MG Road, Mangalore",
    workModel: "Work From Office",
    employmentType: "Full-time",
    experience: "5–10 years",
    postedAgo: null,
    summary:
      "Provide technical leadership and hands-on development expertise; design and optimize enterprise software aligned to consulting and AI solution needs.",
    responsibilities: [
      "Serve as go-to expert on development processes, tools, and frameworks.",
      "Lead design and development of complex applications/systems.",
      "Produce IT-domain technical content (e.g., solution briefs) for consulting initiatives.",
      "Support and guide Instructional Design teams as SME.",
      "Gather requirements and translate to technical solutions.",
      "Evaluate storyboards and final deliverables for architecture/data/ML alignment."
    ],
    requirements: [
      "5+ years in software development with deep expertise (e.g., Java, .NET, Python).",
      "Bachelor’s/Master’s in CS, IT, or related.",
      "Proven experience as technical lead/SME; client-facing consulting exposure is a plus.",
      "Excellent problem-solving, communication, and interpersonal skills.",
      "Effectiveness in fast-paced, collaborative environments."
    ]
  },

  // 8) Subject Matter Expert – Manufacturing
  {
    title: "Subject Matter Expert – Manufacturing",
    category: "Domain Experts",
    location: "MG Road, Mangalore",
    workModel: "Work From Office",
    employmentType: "Full-time",
    experience: "5–10 years",
    postedAgo: null,
    summary:
      "Manufacturing/automotive SME to interface with clients, support teams, and develop accurate, high-quality training and eLearning for plant/field staff.",
    responsibilities: [
      "Lead client meetings to understand manufacturing requirements.",
      "Provide domain expertise to ID and content teams.",
      "Develop raw content and learning materials for manufacturing domain.",
      "Review storyboards and outputs for technical accuracy.",
      "Collaborate cross-functionally to meet client and instructional standards.",
      "Package/publish/track courses in LMS; maintain LCMS version control."
    ],
    requirements: [
      "Strong understanding of manufacturing/automotive industry.",
      "Hands-on shop floor management experience across departmental aspects.",
      "Excellent verbal and written communication.",
      "Ability to create training materials and simplify technical content."
    ],
    preferred: [
      "5–10 years in shop floor/production management roles.",
      "Strong client-facing skills; ability to simplify complex processes.",
      "Background as Shop Floor Manager with strong communication is a great fit.",
      "Familiarity with scheduling/compliance/reporting in TMS is a plus."
    ]
  },

  // 9) Unity Programmer (AR/VR)
  {
    title: "Unity Programmer (AR/VR)",
    category: "AI & Technology",
    location: "MG Road, Mangalore",
    workModel: "Onsite",
    employmentType: "Full-time",
    experience: "4+ years",
    postedAgo: null,
    summary:
      "Develop high-quality AR/VR applications and immersive experiences; collaborate across teams; prototype, optimize, and document.",
    responsibilities: [
      "Design/implement AR/VR apps for Oculus, Vive, HoloLens, ARKit, ARCore, Vuforia.",
      "Collaborate with designers, artists, and engineers for seamless integration.",
      "Prototype/experiment with new AR/VR concepts and technologies.",
      "Optimize performance and scalability across devices/platforms.",
      "Debug/test to ensure smooth UX; maintain comprehensive documentation.",
      "Stay updated with AR/VR (including AI-powered VR) and adopt relevant innovations."
    ],
    requirements: [
      "Bachelor’s in CS/Software Engineering or equivalent experience.",
      "Proven AR/VR development experience with portfolio (VR and business solutions).",
      "Proficiency in C#, C++.",
      "Experience with Unity/Unreal and device SDKs (Oculus, Vive, ARKit, ARCore).",
      "Strong problem-solving, communication, teamwork, creativity, and passion."
    ],
    preferred: [
      "Networking and multiplayer AR/VR experience.",
      "Understanding of AR/VR UI/UX principles."
    ]
  }
];

// Helpers
export function getCareerDetailsBySlug(slug) {
  return careersDetails.find((j) => slugify(j.title) === slug);
}

export function getAllCareerSlugs() {
  return careersDetails.map((j) => ({ slug: slugify(j.title) }));
}
