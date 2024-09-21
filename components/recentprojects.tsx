import { HoverEffect } from "./ui/card-hover-effect";
const RecentProjects = () => {
  const projects = [
    {
      title: "Prism ImaGen",
      description:
        "All-in-one marketing solutions for FRW Healthcare using the MEAN Stack.",
      link: "https://prism-imagen.example.com",
    },
    {
      title: "HelpBuddy",
      description:
        "Simplifying complaint processes using AI for vulnerable populations in New Zealand. Built with OpenAI API and MERN Stack.",
      link: "https://helpbuddy.example.com",
    },
    {
      title: "Waves",
      description:
        "A social media platform advocating environmental awareness. Developed with MERN Stack.",
      link: "https://waves.example.com",
    },
    {
      title: "Vietnam Airports SBDs",
      description:
        "Self-service Baggage Drop PC build and FAT for Daifuku Oceania.",
      link: "https://vietnam-airports-sbds.example.com",
    },
  ];

  return (
    <section className="bg-transparent rounded-lg p-6 md:p-8 shadow-lg">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Recent Projects
        </h2>
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;