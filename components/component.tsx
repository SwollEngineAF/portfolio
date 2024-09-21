/**
 * v0 by Vercel.
 * @see https://v0.dev/t/B283iLCOAGs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState, useEffect, JSX, SVGProps} from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { Toggle } from "@/components/ui/toggle"
import HeroSection from "./herosection"
import Image from 'next/image'


export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [typewriterText, setTypewriterText] = useState("SCADA Engineer")
  useEffect(() => {
    const typewriterTexts = ["SCADA Engineer", "UI Developer", "IT/OT Hybrid Engineer", "Cybersecurity N00b"]
    let currentIndex = 0
    const interval = setInterval(() => {
      setTypewriterText(typewriterTexts[currentIndex])
      currentIndex = (currentIndex + 1) % typewriterTexts.length
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState)
  }
  return (
    <div
      className={`flex flex-col min-h-[100dvh] ${
        isDarkMode ? "bg-background-dark text-foreground-dark" : "bg-background text-foreground"
      }`}
    >
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col gap-12 md:gap-16">
      <HeroSection />
        <section className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
          <div className="grid md:grid-cols-[1fr_400px] gap-8 md:gap-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">John Doe</h1>
              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-semibold">I am a</span>
                <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current text-primary">
                  <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M50,90c-22.1,0-40-17.9-40-40S27.9,10,50,10s40,17.9,40,40S72.1,90,50,90z M50,20c-16.6,0-30,13.4-30,30s13.4,30,30,30s30-13.4,30-30S66.6,20,50,20z M50,70c-11,0-20-9-20-20s9-20,20-20s20,9,20,20S61,70,50,70z" />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl md:text-3xl font-semibold"
                  >
                    {typewriterText}
                  </text>
                </svg>
              </div>
              <p className="text-muted-foreground max-w-[600px]">
                I am a passionate frontend developer with a strong focus on building high-quality, user-friendly web
                applications. I specialize in modern JavaScript frameworks and libraries, and I am always eager to learn
                new technologies and techniques.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="John Doe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="prose max-w-[800px]">
              <p>
                I am a frontend developer with over 5 years of experience building web applications. I have a strong
                background in HTML, CSS, and JavaScript, and I am proficient in using popular frameworks and libraries
                such as React, Vue.js, and Angular.
              </p>
              <p>
                I am passionate about creating user-friendly and visually appealing interfaces that provide a seamless
                experience for users. I am always eager to learn new technologies and techniques, and I am constantly
                striving to improve my skills and stay up-to-date with the latest industry trends.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-semibold">I am a</span>
                <svg viewBox="0 0 100 100" className="w-12 h-12 fill-current text-primary">
                  <path d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z M50,90c-22.1,0-40-17.9-40-40S27.9,10,50,10s40,17.9,40,40S72.1,90,50,90z M50,20c-16.6,0-30,13.4-30,30s13.4,30,30,30s30-13.4,30-30S66.6,20,50,20z M50,70c-11,0-20-9-20-20s9-20,20-20s20,9,20,20S61,70,50,70z" />
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl md:text-3xl font-semibold"
                  >
                    {typewriterText}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold">Frontend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>Angular</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold">Backend</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Ruby on Rails</li>
                </ul>
              </div>
              <div className="bg-background rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold">Tools</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Recent Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Website</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developed a fully-featured e-commerce website using React, Redux, and Stripe for payment processing.
                    Implemented features such as shopping cart, checkout, and order management.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Social Media App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Developed a social media application using React, Firebase, and Material-UI. Implemented features
                    such as user authentication, post creation, and real-time updates.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted rounded-lg p-6 md:p-8 shadow-lg">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Social Media</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <a
                href="#"
                className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                <InstagramIcon className="h-6 w-6" />
                <span>Instagram</span>
              </a>
              <a
                href="#"
                className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                <TwitterIcon className="h-6 w-6" />
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                <FacebookIcon className="h-6 w-6" />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="bg-background rounded-lg p-4 flex items-center justify-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
              >
                <PinIcon className="h-6 w-6" />
                <span>Pinterest</span>
              </a>
            </div>
          </div>
        </section>
        <div className="sticky bottom-0 left-0 w-full bg-muted rounded-lg p-4 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-2">
            <MailIcon className="h-6 w-6" />
            <span>johndoe@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-6 w-6" />
            <span>+1 (555) 555-5555</span>
          </div>
          <Toggle variant={isDarkMode ? "solid" : "outline"} onClick={toggleDarkMode} aria-label="Toggle dark mode">
            <SunMoonIcon className="h-6 w-6" />
          </Toggle>
        </div>
      </main>
    </div>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PhoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function PinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  )
}


function SunMoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.3 17.7-1.4 1.4" />
      <path d="m19.1 4.9-1.4 1.4" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}