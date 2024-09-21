import { useState, useEffect } from "react";
import Typewriter from "./typewriter";
import Image from "next/image";

const AboutMe = () => {
  const texts = [
    "Syahiid Rasidi",
    "a Certified Technologist",
    "a SCADA Engineer",
    "an IT Engineer",
    "a Frontend Developer",
  ];

  const images = ["/assets/Portrait.png"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const handleLoopChange = (loopNum: number) => {
    setFadeIn(false); // Start fade out
    setTimeout(() => {
      setCurrentImageIndex(loopNum % images.length); // Update image
      setFadeIn(true); // Start fade in
    }, 500); // Image change delay to allow fade out
  };

  return (
    <section id="about-me" className="bg-transparent rounded-lg p-6 md:p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-4 md:space-y-0">
        {/* Text section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl text-gray-900 dark:text-gray-100 font-bold">
            I am {" "}
            <Typewriter
              texts={texts}
              period={2000}
              setLoopNum={handleLoopChange}
              className="text-3xl md:text-4xl"
            />
          </h1>
            {/* Copywriting section */}
            <div className="mt-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg md:text-xl leading-relaxed">
                With a strong background in engineering and technology, I am passionate about solving real-world challenges through innovative solutions. My expertise spans multiple domains, from industrial automation and SCADA systems to cutting-edge frontend development.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-4">
                I believe in lifelong learning, continuous improvement, and staying ahead of the technological curve.
              </p>
            </div>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="relative w-80 h-80"> {/* Adjust height for responsiveness */}
            <Image
              src={images[currentImageIndex]} // Display the current image
              alt={texts[currentImageIndex]}
              layout="fill" // Ensures the image fills the container
              objectFit="contain" // Ensures the image is not cropped
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutMe;