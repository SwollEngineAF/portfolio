import { MailIcon, PhoneIcon, SunMoonIcon } from "./icons";
import { FC } from "react";

// Define the type for the props
interface FooterBarProps {
  toggleDarkMode: () => void;
}

const FooterBar: FC<FooterBarProps> = ({ toggleDarkMode }) => {
  return (
    <div className="sticky bottom-0 left-0 w-full bg-muted rounded-lg p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center gap-2">
        <MailIcon className="h-6 w-6" />
        <span>johndoe@example.com</span>
      </div>
      <div className="flex items-center gap-2">
        <PhoneIcon className="h-6 w-6" />
        <span>+1 (555) 555-5555</span>
      </div>
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        className="p-2 rounded-md focus:outline-none"
      >
        <SunMoonIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default FooterBar;