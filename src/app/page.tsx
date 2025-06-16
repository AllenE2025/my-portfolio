import Image from "next/image";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center border-b border-gray-200">
        <h1 className="text-4xl sm:text-5xl text-green-700 font-extrabold tracking-tight">
          My Portfolio
        </h1>
        <Image
          src="/pfp.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border-4 border-green-600 shadow-lg"
        />
      </header>

      <nav className="sticky top-0 bg-white shadow-md z-10 py-4">
        <div className="container mx-auto px-4 flex justify-center space-x-6 sm:space-x-10">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#socials">Socials</NavLink>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* About Section */}
        <section id="about" className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            A Computer Engineering graduate of STI College Global City, I am
            passionate about becoming a professional software developer. I&apos;m
            proficient in Java, Python, and JavaScript, and I continuously explore
            emerging tech trends. I&apos;m dedicated to expanding my skills in
            frontend, backend, and full-stack development, evident through my
            practical experience with various coding projects.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-10 text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <ProjectCard
              title="AjmalSA Waste Management"
              imageSrc="/app-icon.png"
              imageAlt="AjmalSA Waste Management App Icon"
            />
            <ProjectCard
              title="Obeid Specialized Hospital"
              imageSrc="/obeid-home.png"
              imageAlt="Obeid Specialized Hospital Homepage"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-md mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-8 text-center">
            Get in Touch
          </h2>
          <form className="flex flex-col gap-5 bg-white p-8 rounded-lg shadow-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
              rows={5}
            />
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition duration-300 ease-in-out shadow-lg"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Socials Section */}
        <section id="socials" className="text-center pb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-8">
            Connect with Me
          </h2>
          <div className="flex justify-center space-x-8">
            <SocialIcon
              Icon={TiSocialFacebook}
              href="https://www.facebook.com/yourprofile"
              label="Facebook"
            />
            <SocialIcon
              Icon={TiSocialLinkedin}
              href="https://www.linkedin.com/in/yourprofile"
              label="LinkedIn"
            />
            <SocialIcon
              Icon={FaGithub}
              href="https://github.com/yourprofile"
              label="GitHub"
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Reusable NavLink Component
import { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    className="font-semibold text-lg text-gray-700 hover:text-green-600 px-4 py-2 rounded-md transition duration-200 ease-in-out hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500"
  >
    {children}
  </a>
);

// Reusable ProjectCard Component
type ProjectCardProps = {
  title: string;
  imageSrc: string;
  imageAlt: string;
};

const ProjectCard = ({ title, imageSrc, imageAlt }: ProjectCardProps) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
    <Image
      className="w-full h-48 object-cover object-center bg-green-50 p-4"
      src={imageSrc}
      alt={imageAlt}
      width={400}
      height={300}
    />
    <div className="p-6 text-center">
      <p className="text-xl font-semibold text-gray-800 mt-2">{title}</p>
    </div>
  </div>
);

// Reusable SocialIcon Component
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
    className="text-green-700 hover:text-green-500 transform hover:scale-110 transition duration-200 ease-in-out"
    aria-label={label}
  >
    <Icon className="size-12" />
  </a>
);