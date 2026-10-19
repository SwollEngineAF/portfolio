"use client";

import { FaMedium, FaLinkedin, FaGithub } from "react-icons/fa6";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import { FocusCards } from "./ui/focus-cards";

const SocialMedia = () => {
  const cards = [
    {
      title: "University GitHub",
      description: "Visit abin733 GitHub",
      href: "https://github.com/abin733",
      src: "/assets/githubabin733.webp",
      className: "bg-foreground text-background",
    },
    {
      title: "Personal GitHub",
      description: "Visit SwollEngineAF GitHub",
      href: "https://github.com/SwollEngineAF",
      src: "/assets/githubswollengineaf.webp",
      className: "bg-ochre text-background",
    },
  ];

  const linkClass =
    "inline-flex items-center gap-2 border-b border-transparent pb-0.5 text-sm text-muted-foreground transition-colors hover:border-ochre hover:text-ochre";

  return (
    <section id="links" className="scroll-mt-24">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ochre">
        Elsewhere
      </p>
      <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
        Links
      </h2>
      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-8">
        <Modal>
          <ModalTrigger className={`${linkClass} cursor-pointer bg-transparent p-0`}>
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <h4 className="mb-8 text-center font-display text-lg font-medium text-foreground md:text-2xl">
                Select a GitHub profile
              </h4>
              <FocusCards cards={cards} />
            </ModalContent>
          </ModalBody>
        </Modal>

        <a
          href="https://www.linkedin.com/in/syahiidrasidi/"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-4 w-4" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://medium.com/@syahiid.rasidi"
          className={linkClass}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium className="h-4 w-4" />
          <span>Medium</span>
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
