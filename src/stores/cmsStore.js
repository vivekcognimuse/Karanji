// stores/cmsStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCMSStore = create(
  persist(
    (set, get) => ({
      // Hero Section Data
      heroData: {
        title:
          "Transform Your Business with Future-Ready Technology in the World of AI",
        description:
          "Empower your business with intelligent, immersive solutions tailored for today's dynamic digital landscape. Stay ahead in the world of AI with technologies that drive meaningful, measurable change.",
        ctaText: "Explore Our Technology Services",
        ctaLink: "#solutions",
        backgroundImage: "/solutions/hero.png",
      },

      // Services Data
      services: [
        {
          id: 1,
          title: "AI Advisory & Implementation",
          number: "01",
          image: "/solutions/ai-advisory.webp",
        },
        {
          id: 2,
          title: "XR & Gaming Solutions",
          number: "02",
          image: "/solutions/gaming-solutions.webp",
        },
        {
          id: 3,
          title: "Digital twins & Simulations",
          number: "03",
          image: "/solutions/digital-twins.webp",
        },
      ],

      // Resources Data
      resources: [
        {
          id: 1,
          type: "Casestudy",
          title: "Enhancing Product Exploration with VR Factory Walkthrough",
          action: "View CaseStudy",
          image: "/solutions/casestudy.webp",
        },
        {
          id: 2,
          type: "Webinar",
          title: "Future of Automotive Engineering Training",
          action: "Register for Webinar",
          image: "/solutions/webinar.webp",
        },
        {
          id: 3,
          type: "Blog",
          title:
            "Immersive Healthcare Education: Bridging the Skill Gap through VR",
          action: "Read Blog",
          image: "/solutions/blog.webp",
        },
      ],

      // Technology Advantage Data
      technologyAdvantage: {
        title: "The Karanji Technology Advantage",
        description:
          "Our approach combines strategic insight with hands-on implementation. We specialize in integrating artificial intelligence consulting, XR/VR/AR experiences, and digital twin technologies to help you optimize operations, improve efficiencies, accelerate digital transformation. Rooted in the evolution of AI and shaped by today's realities-from AI policy to limited memory AI-we bring future-ready solutions that align with your long-term vision.",
        features: [
          {
            id: 1,
            title: "Outcome-Driven Methodology",
            description: "Focused on delivering clear, measurable results.",
            img: "/solutions/icons/outcome-driven.svg",
          },
          {
            id: 2,
            title: "Integrated Capabilities",
            description: "Seamless synergy across AI, XR, and digital twins.",
            img: "/solutions/icons/integrated-capabilities.svg",
          },
          {
            id: 3,
            title: "Expert Leadership",
            description:
              "Hands-on advisory and implementation from industry veterans",
            img: "/solutions/icons/expert-leadership.svg",
          },
          {
            id: 4,
            title: "Scalable Solutions",
            description: "Tailored approaches that grow with your business.",
            img: "/solutions/icons/scalable-solutions.svg",
          },
        ],
      },

      // Success Stories Data
      successStories: {
        title: "Technology Implementation Success Stories",
        description:
          "Real-world examples demonstrate the tangible benefits of our technology solutions. Explore case studies showcasing measurable improvements across industries.",
      },

      // CMS Actions
      updateHeroData: (data) =>
        set((state) => ({
          heroData: { ...state.heroData, ...data },
        })),

      updateService: (id, data) =>
        set((state) => ({
          services: state.services.map((service) =>
            service.id === id ? { ...service, ...data } : service
          ),
        })),

      addService: (service) =>
        set((state) => ({
          services: [...state.services, { ...service, id: Date.now() }],
        })),

      deleteService: (id) =>
        set((state) => ({
          services: state.services.filter((service) => service.id !== id),
        })),

      updateResource: (id, data) =>
        set((state) => ({
          resources: state.resources.map((resource) =>
            resource.id === id ? { ...resource, ...data } : resource
          ),
        })),

      addResource: (resource) =>
        set((state) => ({
          resources: [...state.resources, { ...resource, id: Date.now() }],
        })),

      deleteResource: (id) =>
        set((state) => ({
          resources: state.resources.filter((resource) => resource.id !== id),
        })),

      updateTechnologyAdvantage: (data) =>
        set((state) => ({
          technologyAdvantage: { ...state.technologyAdvantage, ...data },
        })),

      updateFeature: (id, data) =>
        set((state) => ({
          technologyAdvantage: {
            ...state.technologyAdvantage,
            features: state.technologyAdvantage.features.map((feature) =>
              feature.id === id ? { ...feature, ...data } : feature
            ),
          },
        })),

      updateSuccessStories: (data) =>
        set((state) => ({
          successStories: { ...state.successStories, ...data },
        })),

      // Reset to defaults
      resetToDefaults: () =>
        set(() => ({
          heroData: {
            title:
              "Transform Your Business with Future-Ready Technology in the World of AI",
            description:
              "Empower your business with intelligent, immersive solutions tailored for today's dynamic digital landscape. Stay ahead in the world of AI with technologies that drive meaningful, measurable change.",
            ctaText: "Explore Our Technology Solutions",
            ctaLink: "#solutions",
            backgroundImage: "/solutions/hero.png",
          },
          // ... other default values
        })),
    }),
    {
      name: "karanji-cms-store",
      version: 1,
    }
  )
);

export default useCMSStore;
