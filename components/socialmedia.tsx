import { InstagramIcon, TwitterIcon, FacebookIcon, LinkedinIcon, PinIcon } from './icons';


const SocialMedia = () => {
  return (
    <section className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Social Media</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <a href="#" className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm">
            <InstagramIcon className="h-6 w-6" />
            <span>Instagram</span>
          </a>
          <a href="#" className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm">
            <TwitterIcon className="h-6 w-6" />
            <span>Twitter</span>
          </a>
          <a href="#" className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm">
            <FacebookIcon className="h-6 w-6" />
            <span>Facebook</span>
          </a>
          <a href="#" className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm">
            <LinkedinIcon className="h-6 w-6" />
            <span>LinkedIn</span>
          </a>
          <a href="#" className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm">
            <PinIcon className="h-6 w-6" />
            <span>Pinterest</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;