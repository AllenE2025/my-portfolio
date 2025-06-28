"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;

    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/evangelista.davidallen2003@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (response.ok) {
        setIsOpen(true); // Show the thank-you modal
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please check your internet connection.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white scroll-smooth">
      <header className="w-full px-4 py-8 flex justify-between items-center border-b border-gray-600">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
            My Portfolio
          </h1>
          <Image
            src="/pfp.png"
            alt="Profile"
            width={120}
            height={120}
            unoptimized
            className="rounded-full shadow-lg"
          />
          <div className="flex flex-col justify-center items-end text-sm text-gray-300">
            <p>David Allen Evangelista</p>
            <p>+63 917 341 8437</p>
            <p>Philippines, Metro Manila Pasig City</p>
            <p>evangelista.davidallen2003@gmail.com</p>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 bg-black shadow-md z-10 py-4 border-b border-gray-600">
        <div className="container mx-auto px-4 flex justify-center space-x-6 sm:space-x-10">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#socials">Socials</NavLink>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* About Section */}
        <section
          id="about"
          className="scroll-mt-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I&apos;m a Computer Engineering graduate from STI College Global City. I
            can build websites using HTML, CSS, and JavaScript, and write
            backend code with Java, Python, and PHP. I use tools like VS Code,
            Figma, Postman, MySQL, and GitHub. I practice by working on projects
            to improve my coding skills in both frontend and backend
            development.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <ProjectButton
              title="AjmalSA Waste Management"
              imageSrc="/app-icon.png"
              imageAlt="AjmalSA Waste Management App Icon"
              url="https://github.com/AllenE2025/ajmalsa-waste-and-damage-solutions"
            />
            <ProjectButton
              title="Obeid Specialized Hospital"
              imageSrc="/obeid-home.png"
              imageAlt="Obeid Specialized Hospital Homepage"
              url="https://example.com/obeid"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            Get in Touch
          </h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 bg-gray-900 p-8 rounded-lg shadow-xl"
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-black border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-black border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="bg-black border border-gray-600 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-md hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out shadow-lg"
            >
              Send Message
            </button>
          </form>

          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
          >
            <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel className="bg-white text-black max-w-sm w-full p-6 rounded-xl shadow-xl text-center">
                <Dialog.Title className="text-xl font-bold">
                  Thank You
                </Dialog.Title>
                <p className="mt-2">Your message has been sent.</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Close
                </button>
              </Dialog.Panel>
            </div>
          </Dialog>
        </section>

        {/* Socials Section */}
        <section id="socials" className="scroll-mt-24 text-center pb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Connect with Me
          </h2>
          <div className="flex justify-center space-x-8">
            <SocialIcon
              Icon={TiSocialFacebook}
              href="https://www.facebook.com/david.evangelista.18"
              label="Facebook"
            />
            <SocialIcon
              Icon={FaGithub}
              href="https://github.com/AllenE2025"
              label="GitHub"
            />
            <SocialIcon
              Icon={TiSocialLinkedin}
              href="https://www.linkedin.com/in/david-allen-evangelista-767878349/"
              label="LinkedIn"
            />
          </div>
        </section>
      </main>

      <footer className="text-white text-center py-6 mt-12 border-t border-gray-600">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    className="font-semibold text-lg text-white hover:text-gray-300 px-4 py-2 rounded-md transition duration-200 ease-in-out hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
  >
    {children}
  </a>
);

type ProjectButtonProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
};

const ProjectButton = ({
  title,
  imageSrc,
  imageAlt,
  url,
}: ProjectButtonProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-gray-900 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out hover:ring-2 hover:ring-indigo-500"
  >
    <Image
      className="w-full h-48 object-cover object-center bg-black p-4"
      src={imageSrc}
      alt={imageAlt}
      width={400}
      height={300}
      unoptimized
    />
    <div className="p-6 text-center">
      <p className="text-xl font-semibold text-white mt-2">{title}</p>
    </div>
  </a>
);

type SocialIconProps = {
  Icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
};

const SocialIcon = ({ Icon, href, label }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-400 transform hover:scale-110 transition duration-200 ease-in-out"
    aria-label={label}
  >
    <Icon className="size-12" />
  </a>
);
