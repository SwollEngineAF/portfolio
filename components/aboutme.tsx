import Typewriter from "./typewriter";

const AboutMe = () => {
  const texts = [
    "Certified Technologist",
    "SCADA Engineer",
    "IT Solutions Contractor",
    "Frontend Developer",
  ];

  return (
    <section id="about-me" className="bg-transparent rounded-lg p-6 md:p-8 shadow-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">About Me</h2>
      <div className="prose max-w-[800px]">
        <p className=" text-gray-900 dark:text-gray-100">
          I am a <Typewriter texts={texts} period={2000} /> with over 10 years of experience in SCADA engineering and IT solutions. 
          </p>
          <p className="text-gray-900 dark:text-gray-100">
          Currently, I am pursuing a Master of Information Technology at the University of Auckland to enhance my skills further. 
          I have worked on international projects in China, Australia, Sri Lanka, Egypt, the Pacific Islands, and Japan.
        </p>
        <div className="flex items-center gap-4">

        </div>
      </div>
    </section>
  );
};

export default AboutMe;