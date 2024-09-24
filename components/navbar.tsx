import { MdAlternateEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa"; // Import a user icon or any icon of your choice

type NavBarProps = {
  toggleDarkMode: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ toggleDarkMode }) => {
  return (
    <div className="sticky top-0 z-50 w-full dark:bg-white p-4 flex justify-between items-center bg-white rounded-lg md:p-8 shadow-lg">
      {/* Name with Icon */}
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-black">
          Syahiid Rasidi
        </span>
      </div>

      {/* Email link */}
      <div className="flex items-center gap-2">
        <a 
          href="mailto:syahiid.rasidi@gmail.com" 
          className="text-blue-500 hover:underline flex items-center gap-2"
        >
          <MdAlternateEmail className="h-6 w-6 text-black" /> {/* Icon always visible */}
          <span className="hidden sm:inline">syahiid.rasidi@gmail.com</span>
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
          <span className="hidden sm:inline">+60-17-6130-396</span>
        </a>
      </div>

      {/* Dark mode toggle button */}
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

export default NavBar;