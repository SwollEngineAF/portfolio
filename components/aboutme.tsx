"use client";

import { useState } from "react";
import Typewriter from "./typewriter";
import Image from "next/image";

const AboutMe = () => {
  const texts = [
    "Syahiid Rasidi",
    "a Certified Technologist",
    "a SCADA Engineer",
    "an IT Engineer",
  ];

  const images = ["/assets/Portrait.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const handleLoopChange = (loopNum: number) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentImageIndex(loopNum % images.length);
      setFadeIn(true);
    }, 500);
  };

  return (
    <section id="about-me" className="scroll-mt-24">
      <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
        <div className="w-full md:w-1/2">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
            About
          </p>
          <h2
            className="font-display text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl"
            style={{
              minHeight: "2.6em",
              lineHeight: "1.3em",
            }}
          >
            I am{" "}
            <Typewriter
              texts={texts}
              period={2000}
              setLoopNum={handleLoopChange}
              className="text-ochre"
            />
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              With a strong background in engineering and technology, I am
              passionate about solving real-world challenges through innovative
              solutions. My expertise spans industrial automation and SCADA
              systems to thoughtful product and frontend work.
            </p>
            <p>
              I believe in lifelong learning, continuous improvement, and
              staying ahead of the technological curve.
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-1/2">
          <div
            className={`relative aspect-[4/5] w-full overflow-hidden transition-opacity duration-500 ${
              fadeIn ? "opacity-100" : "opacity-40"
            }`}
          >
            <Image
              src={images[currentImageIndex]}
              alt={texts[currentImageIndex] ?? "Portrait"}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
