"use client";
import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa6';
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { FocusCards } from "./ui/focus-cards";

const SocialMedia = () => {
  const cards = [
    {
      title: "University GitHub",
      description: "Visit abin733 GitHub",
      href: "https://github.com/abin733",
      src: "/assets/githubabin733.webp", // Path to local image for university GitHub
      className: "bg-blue-500 text-white",
    },
    {
      title: "Personal GitHub",
      description: "Visit SwollEngineAF GitHub",
      href: "https://github.com/SwollEngineAF",
      src: "/assets/githubswollengineaf.webp", // Path to local image for personal GitHub
      className: "bg-amber-500 text-white",
    },
  ];

  return (
    <section className="bg-transparent rounded-lg p-6 md:p-8 shadow-lg">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* GitHub with modal */}
          <Modal>
            <ModalTrigger className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm cursor-pointer">
              <FaGithub className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              <span className="text-gray-800 dark:text-gray-200">GitHub</span>
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  Select a GitHub Profile
                </h4>
                {/* GitHub profiles using FocusCards */}
                <FocusCards cards={cards} />
              </ModalContent>
            </ModalBody>
          </Modal>
        <a 
          href="https://www.linkedin.com/in/syahiidrasidi/" 
          className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          <span className="text-gray-800 dark:text-gray-200">LinkedIn</span>
        </a>

        <a 
          href="https://www.facebook.com/hiidrasidi/" 
          className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaFacebook className="h-6 w-6 text-gray-800 dark:text-gray-200" />
          <span className="text-gray-800 dark:text-gray-200">Facebook</span>
        </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;