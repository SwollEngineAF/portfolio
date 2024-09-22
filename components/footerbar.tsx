import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";

type FooterBarProps = {
  toggleDarkMode: () => void;
};

const FooterBar: React.FC<FooterBarProps> = ({ toggleDarkMode }) => {
  return (
    <div className="sticky bottom-0 left-0 w-full bg-muted dark:bg-white rounded-lg p-4 flex justify-between items-center shadow-lg z-50">
      {/* Email link */}
      <div className="flex items-center gap-2">
        <a 
          href="mailto:syahiid.rasidi@gmail.com" 
          className="text-blue-500 hover:underline flex items-center gap-2"
        >
          <MdAlternateEmail className="h-6 w-6 text-black" /> {/* Icon always visible */}
          <span className="hidden sm:inline">syahiid.rasidi@gmail.com</span> {/* Text only on large screens */}
        </a>
      </div>

      {/* WhatsApp link */}
      <div className="flex items-center gap-2">
        <a 
          href="https://wa.me/60176130396?text=Hello%2C%20Syahiid%21" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline flex items-center gap-2"
        >
          <FaWhatsapp className="h-6 w-6 text-black" /> {/* Icon always visible */}
          <span className="hidden sm:inline">+60-17-6130-396</span> {/* Text only on large screens */}
        </a>
      </div>

      {/* Dark mode toggle button with "Dark Mode" text */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="p-2 rounded-md focus:outline-none flex items-center gap-2"
      >
        <CgDarkMode className="h-6 w-6" />
        <span className="hidden sm:inline">Dark Mode</span>
      </button>
    </div>
  );
};

export default FooterBar;