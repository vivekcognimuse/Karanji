import CTA from "@/sections/digital-learning/CTA";
import WhyWorkWithUsSection from '@/sections/Company/WhyWorkWithUsSection';
const teamData = {
  title: "Your Next Chapter Starts Here",
  description:
    "Build your career with us & help shape the future of [Industry/Field]. We value innovation, diversity, & collaborative growth.",
  SecondaryButtonText: "View Open Roles",
  SecondaryButtonLink: "/roles",
};
const sectionData = {
    title: "Why Work With Us?",
    description: "Join a company where creativity meets cutting-edge technology. At Karanji, we blend innovation, collaboration, & personal growth to shape the future of learning, entertainment, & AI-driven solutions. We're not just building products – we're building meaningful experiences, & it all starts with our people."
  };

   const cardsData = [
    {
      icon: "Company/culture.svg",
      title: "Culture",
      description: "We foster a collaborative environment built on trust & innovation.",
      image: "/company/cultureimg.png"
    },
    {
      icon: "Company/learning.svg", 
      title: "Learning",
      description: "Continuous development opportunities to foster personal growth.",
      image: "/company/learningimg.png"
    },
    {
      icon: "Company/growth.svg",
      title: "Growth", 
      description: "Opportunities for advancement & career paths based on performance.",
      image: "/company/growthimg.png"
    }
  ];

export default async function companyLanding() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 lg:p-10 space-y-16 lg:space-y-32">
      <CTA
        data={teamData}
        className="
          !text-left

          /* Make the CTA's <h3> look like global h2 */
          [&>h3]:!text-4xl sm:[&>h3]:!text-5xl lg:[&>h3]:!text-[4rem] [&>h3]:!font-normal

          /* Make P2 behave like global p1 */
          [&>.p2]:!text-[1.375rem] sm:[&>.p2]:!text-2xl

          /* Left-align the button row */
          [&_.flex-center]:justify-start [&_.flex-center]:items-start

          /* Make buttons visually size='lg' (works for both <button> and <a>) */
          [&_.flex-center>button]:!px-6 [&_.flex-center>button]:!py-4 [&_.flex-center>button]:!text-lg
          lg:[&_.flex-center>button]:!px-7 lg:[&_.flex-center>button]:!py-[1.125rem] lg:[&_.flex-center>button]:!text-xl

          [&_.flex-center>a]:!px-6 [&_.flex-center>a]:!py-4 [&_.flex-center>a]:!text-lg
          lg:[&_.flex-center>a]:!px-7 lg:[&_.flex-center>a]:!py-[1.125rem] lg:[&_.flex-center>a]:!text-xl
        "
      />
        <WhyWorkWithUsSection
        title={sectionData.title}
        description={sectionData.description}
        cards={cardsData}
      
      />
    </div>
  );
}
