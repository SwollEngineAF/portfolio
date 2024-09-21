import { MailIcon, PhoneIcon, SunMoonIcon } from './icons';

type FooterBarProps = {
  toggleDarkMode: () => void;
};

const FooterBar: React.FC<FooterBarProps> = ({ toggleDarkMode }) => {
  return (
    <div className="sticky bottom-0 left-0 w-full bg-muted rounded-lg p-4 flex justify-between items-center shadow-lg">
      {/* Email link */}
      <div className="flex items-center gap-2">
        <MailIcon className="h-6 w-6" />
        <a 
          href="mailto:syahiid.rasidi@gmail.com" 
          className="text-blue-500 hover:underline hidden sm:inline"
        >
          syahiid.rasidi@gmail.com
        </a>
      </div>

      {/* WhatsApp link */}
      <div className="flex items-center gap-2">
        <PhoneIcon className="h-6 w-6" />
        <a 
          href="https://wa.me/60176130396" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline hidden sm:inline"
        >
          +60-17-6130-396
        </a>
      </div>



      {/* Dark mode toggle button */}
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