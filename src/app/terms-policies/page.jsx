"use client";
import { P3 } from "@/components/CustomTags";
import Button from "@/components/ui/Button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// ============= CONTENT DATA =============
const policyContent = {
  overview: {
    title: "Overview",
    sections: [
      {
        icon: "/terms/privacy.svg",
        title: "Privacy Policy",
        description:
          "Explains what personal data we collect, why we collect it, and how we store, use, and manage your information securely.",
        linkText: "Read Our Privacy Policy",
        linkId: "privacy",
      },
      {
        icon: "/terms/terms.svg",
        title: "Terms of Service",
        description:
          "Outlines the conditions you agree to when using our website or services, including user responsibilities and limitations.",
        linkText: "Read Our Terms of Services",
        linkId: "terms",
      },
      {
        icon: "/terms/cookie.svg",
        title: "Cookie Compliance",
        description:
          "Describes how we use cookies and similar technologies to enhance your experience and how you can manage your preferences.",
        linkText: "Read Our Cookie Compliance",
        linkId: "cookie",
      },
      {
        icon: "/terms/accessibility.svg",
        title: "Accessibility Compliance",
        description:
          "Details our commitment to ensuring our website is accessible to users of all abilities and compliant with global standards.",
        linkText: "Read Our Accessibility Compliance",
        linkId: "accessibility",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "14 Aug 2025",
    sections: [
      {
        id: "privacy-overview",
        title: "Overview",
        content:
          "At Karanji, we respect your privacy and are committed to protecting your personal information. This policy explains what we collect, how we use it, and your rights.",
      },
      {
        id: "what-we-collect",
        title: "What we collect",
        content: null,
        items: [
          {
            title: "Enquiry form details",
            description:
              "If you submit a service enquiry, we collect the email address you provide so we can respond to your request.",
          },
          {
            title: "Website usage data",
            description:
              "We use Google Analytics to understand how visitors use our site (e.g., pages viewed, time spent). Google may collect additional data in accordance with their own privacy policy.",
          },
          {
            title: "Email delivery data",
            description:
              "We use Resend to send certain emails (e.g., responses to enquiries). This means your email address will be processed by Resend to deliver messages.",
          },
        ],
      },
      {
        id: "how-we-use",
        title: "How we use your information",
        content: null,
        list: [
          "To respond to your enquiries and provide requested information.",
          "To monitor and improve our website's performance and user experience.",
          "To ensure reliable delivery of our email communications.",
        ],
      },
      {
        id: "how-we-share",
        title: "How we share information",
        content: "We share your data only with:",
        list: [
          "Service providers - Google Analytics (analytics), Resend (email delivery)",
          "Legal authorities - if required by law",
        ],
        footer: "We do not sell your personal information.",
      },
      {
        id: "cookies-tracking",
        title: "Cookies & tracking",
        content:
          "Google Analytics uses cookies to collect usage information. You can control cookies via your browser settings.",
      },
      {
        id: "your-rights",
        title: "Your rights",
        content:
          "You may request access to or deletion of your personal information by contacting us at privacy@karanji.com.",
      },
      {
        id: "security",
        title: "Security",
        content:
          "We take reasonable measures to protect your information, but no system is 100% secure.",
      },
      {
        id: "changes",
        title: "Changes",
        content:
          "We may update this policy from time to time and will post the latest version here.",
      },
      {
        id: "contact",
        title: "Contact",
        content: "info@karanji.com",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "14 Aug 2025",
    sections: [
      {
        id: "terms-overview",
        title: "Overview",
        content:
          "Welcome to Karanji. By using our website and services, you agree to these Terms of Use. Please read them carefully.",
        metadata: [
          "Effective Date: 14 Aug 2025",
          "Website: www.karanji.com",
          // "Company Name: Karanji",
        ],
      },
      {
        id: "use-of-website",
        title: "1. Use of our services",
        content:
          "You may use Karanji only for lawful purposes and in accordance with these terms. You are responsible for any content you submit and for keeping your account details secure.",
      },
      {
        id: "accounts",
        title: "2. Accounts",
        content:
          "To access certain features, you may need to create an account. You must provide accurate information and keep it updated. You are responsible for any activity under your account.",
      },
      {
        id: "content-ownership",
        title: "3. Content",
        items: [
          {
            title: "Your content",
            description:
              "You retain ownership of any content you submit, but grant us a non-exclusive license to use it for operating and improving our services.",
          },
          {
            title: "Our content",
            description:
              "All site content (text, images, logos, code) is owned by Karanji or its licensors and is protected by law. You may not copy, distribute, or modify it without permission.",
          },
        ],
      },
      {
        id: "prohibited",
        title: "4. Prohibited activities",
        content:
          "Do not misuse our services, including but not limited to: hacking, spamming, infringing intellectual property, or uploading harmful content.",
      },
      {
        id: "payments",
        title: "5. Payments (if applicable)",
        content:
          "If you make purchases through Karanji, you agree to provide accurate billing information and comply with our payment terms.",
      },
      {
        id: "disclaimer",
        title: "6. Disclaimer & limitation of liability",
        content:
          'Our services are provided "as is" without warranties. To the fullest extent allowed by law, Karanji is not liable for any damages arising from use or inability to use our services.',
      },
      {
        id: "changes-to-terms",
        title: "7. Changes to these terms",
        content:
          "We may update these terms occasionally. The updated version will be posted here with the new date. Continued use of our services means you accept the changes.",
      },
      {
        id: "governing-law",
        title: "8. Governing law",
        content:
          "These terms are governed by the laws of Karnataka, India, and disputes will be resolved in the courts of Mangalore, Karnataka, India.",
      },
      {
        id: "contact-us",
        title: "Contact us",
        content: "info@karanji.com",
      },
    ],
  },
  cookie: {
    title: "Cookie Policy & Consent",
    lastUpdated: "14 Aug 2025",
    sections: [
      {
        id: "cookie-overview",
        title: "Overview",
        content:
          "At Karanji, we use cookies and similar technologies to make our website work efficiently, improve your browsing experience, and better understand how our visitors use our services.",
      },
      {
        id: "what-are-cookies",
        title: "What are cookies?",
        content:
          "Cookies are small text files that a website places on your device (computer, tablet, smartphone) when you visit. They help the site remember your preferences, enable certain features, and collect information to enhance functionality and performance. Some cookies are set by us (first-party cookies), and some may be set by third parties (such as analytics or advertising providers).",
      },
      {
        id: "how-we-use-cookies",
        title: "How we use cookies",
        items: [
          {
            title: "Essential cookies",
            description:
              "Required for core site functionality such as logging in, keeping your session secure, and enabling shopping cart features. These cannot be disabled without affecting the site's operation.",
          },
          {
            title: "Analytics cookies",
            description:
              "Help us understand how people use our site, such as which pages are visited most often, so we can improve performance and content.",
          },
          {
            title: "Preference cookies",
            description:
              "Remember your settings and choices, such as language selection or saved preferences, to provide a more personalized experience.",
          },
          {
            title: "Advertising cookies (if used)",
            description:
              "Allow us or our partners to show you relevant ads and measure their effectiveness.",
          },
        ],
      },
      {
        id: "your-choices",
        title: "Your choices",
        content:
          "You can control or delete cookies through your browser settings at any time. Some browsers also allow you to block specific types of cookies or receive a warning before a cookie is stored. You may also adjust your settings using our on-site cookie banner or preferences panel where available. Please note that disabling certain cookies may reduce functionality or affect your experience on our site.",
      },
      {
        id: "consent",
        title: "Consent",
        content:
          "By continuing to use Karanji without changing your settings, you consent to our use of cookies as described in this policy. Where required by law, we will display a cookie consent banner before placing any non-essential cookies on your device.",
      },
      {
        id: "more-info",
        title: "More info",
        content:
          "For details about how we handle personal data, please see our Privacy Policy.",
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    lastUpdated: "14 Aug 2025",
    sections: [
      {
        id: "accessibility-overview",
        title: "Overview",
        content:
          "At Karanji, we believe everyone should have equal access to our website and services, regardless of ability or technology. We are committed to providing an inclusive digital experience for all our users, including people with disabilities.",
      },
      {
        id: "our-commitment",
        title: "Our accessibility commitment",
        content:
          "We strive to follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which outline best practices for making content more accessible. This includes:",
        list: [
          "Providing text alternatives for images and non-text elements.",
          "Ensuring sufficient color contrast for readability.",
          "Making all interactive elements keyboard-accessible.",
          "Using clear, descriptive headings and labels.",
          "Designing layouts that adapt to different devices and screen sizes.",
        ],
      },
      {
        id: "ongoing-efforts",
        title: "Our ongoing efforts",
        content:
          "Accessibility is an ongoing process. We regularly review our website using automated tools and manual testing to identify and fix barriers. We also stay informed about new guidelines and technology to continuously improve.",
      },
      {
        id: "third-party-content",
        title: "Third-party content",
        content:
          "While we strive to make all content accessible, some third-party integrations or embedded features may not fully meet our standards. We encourage providers to offer accessible options.",
      },
      {
        id: "feedback-assistance",
        title: "Feedback & assistance",
        content:
          "We welcome feedback on the accessibility of Karanji. If you encounter difficulties or have suggestions for improvement, please contact us:",
        footer:
          "accessibility@karanji.com\n\nWe aim to respond to accessibility-related inquiries within [X business days] and will do our best to address any issues promptly.",
      },
    ],
  },
};

// ============= REUSABLE COMPONENTS =============

// ScrollSpySidebar Component
const ScrollSpySidebar = ({ headings }) => {
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const blogContent = document.getElementById("content");
    if (!blogContent) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { root: null, threshold: 0.1 }
    );

    observer.observe(blogContent);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observers = [];
    let visibleHeadings = [];

    const callback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          visibleHeadings.push(id);
        } else {
          visibleHeadings = visibleHeadings.filter((v) => v !== id);
        }
      });

      const latest = visibleHeadings[visibleHeadings.length - 1];
      if (latest) {
        const idx = headings.findIndex((h) => h.id === latest);
        setActiveId(latest);
        setProgress(idx);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0.1,
    });

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
    };
  }, [headings]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      className={`transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
      <div className="relative h-full min-h-[250px] ml-2">
        <div
          className="absolute left-0 w-1 bg-gray-900 rounded-full transition-all duration-300"
          style={{ height: `${((progress + 1) / headings.length) * 90}%` }}
        />
        <div className="flex flex-col gap-4 pl-4 mt-1">
          {headings.map((h) => (
            <button
              key={h.id}
              onClick={() => scrollTo(h.id)}
              className={`text-left   text-sm transition-colors leading-6 break-words ${
                h.id === activeId
                  ? "text-gray-900 bg-gradient from-[#D3C9FF] via-[#DCF0FF] to-[#FFCFCF] font-medium"
                  : "text-gray-500 hover:text-gray-700 cursor-pointer"
              }`}>
              {h.title}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

// Tab Navigation Component
const TabNavigation = ({ tabs, activeTab, onTabChange }) => (
  <div className="mb-8">
    <div className="  rounded-full w-full mx-auto justify-center gap-x-8 p-1 inline-flex gap-1 ">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-6 py-2 rounded-full border-gray-200 border cursor-pointer text-lg transition-all duration-200 
    ${
      activeTab === tab.id
        ? "bg-gradient-to-r from-[#D3C9FF] via-[#DCF0FF] to-[#FFCFCF] text-black"
        : "text-black-600  hover:text-black hover:bg-gradient-to-r hover:from-[#D3C9FF] hover:via-[#DCF0FF] hover:to-[#FFCFCF]"
    }
    shadow-lg`}>
          {tab.label}
        </button>
      ))}
    </div>
  </div>
);

// Overview Card Component
const OverviewCard = ({ icon, title, description, linkText, onClick }) => (
  <div className="bg-white rounded-lg p-6 border border-gray-100 hover:border-gray-200 transition-colors">
    <Image src={icon} alt={title} width={32} height={32} className="size-10" />
    <h4 className=" mb-4">{title}</h4>
    <P3 className="text-black-500">{description}</P3>
    <Button onClick={onClick} variant="text" className="">
      {linkText}
    </Button>
  </div>
);

// Overview Section Component
const OverviewSection = ({ sections, onSectionClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {sections.map((section, index) => (
      <OverviewCard
        key={index}
        {...section}
        onClick={() => onSectionClick(section.linkId)}
      />
    ))}
  </div>
);

// Policy Section Component
const PolicySection = ({ section }) => {
  const { id, title, content, items, list, metadata, footer } = section;

  return (
    <div id={id} className="mb-8">
      <h4 className=" mb-4">{title}</h4>

      {metadata && (
        <div className="mb-4">
          {metadata.map((item, idx) => (
            <P3 key={idx} className="text-black-500">
              {item}
            </P3>
          ))}
        </div>
      )}

      {content && (
        <P3 className="mb-4 text-black-500 leading-relaxed">{content}</P3>
      )}

      {items && (
        <div className="space-y-4 mb-4">
          {items.map((item, idx) => (
            <div key={idx}>
              <P3 className="font-medium  text-black mb-1">{item.title}:</P3>
              <P3 className="text-black-500 ">{item.description}</P3>
            </div>
          ))}
        </div>
      )}

      {list && (
        <ul className="list-disc pl-6 mb-4 space-y-2">
          {list.map((item, idx) => (
            <li key={idx} className="text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )}

      {footer && (
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {footer}
        </p>
      )}
    </div>
  );
};

// Policy Content Component
const PolicyContent = ({ sections, headings }) => (
  <div className="flex gap-12">
    <div className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-52">
        <ScrollSpySidebar headings={headings} />
      </div>
    </div>
    <div id="content" className="flex-1 max-w-4xl">
      {sections.map((section) => (
        <PolicySection key={section.id} section={section} />
      ))}
    </div>
  </div>
);

// Page Header Component
const PageHeader = ({ title }) => (
  <>
    <h2 className="mb-2 ">{title}</h2>

    <div className="border-t border-black-200 mb-8"></div>
  </>
);

// ============= MAIN COMPONENT =============
export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "terms", label: "Terms of Service" },
    { id: "cookie", label: "Cookie compliance" },
    { id: "accessibility", label: "Accessibility compliance" },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    const content = policyContent[activeTab];

    if (activeTab === "overview") {
      return (
        <>
          <PageHeader title={content.title} />
          <OverviewSection
            sections={content.sections}
            onSectionClick={handleTabChange}
          />
        </>
      );
    }

    const headings = content.sections.map((section) => ({
      id: section.id,
      title: section.title,
    }));

    return (
      <>
        <PageHeader title={content.title} lastUpdated={content.lastUpdated} />
        <PolicyContent sections={content.sections} headings={headings} />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        {renderContent()}
      </div>
    </div>
  );
}
