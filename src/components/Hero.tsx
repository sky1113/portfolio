import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import Image from "next/image";
import headshotImg from "@/public/me_cropped.jpeg";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between mt-24 px-4 sm:px-6 md:px-8 lg:px-24">
      {/* Text Content */}
      <div className="mt-8 md:mt-0 md:w-1/2">
        <h1 className="text-4xl sm:text-5xl font-bold font-serif">
          Hi, I&apos;m <span className="italic">Skylar Rearick</span>!
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-sans text-gray-700">
          I&apos;m a full-stack developer seeking roles in the Greater Seattle
          area, specializing in building high-quality web applications.
        </p>
        <div className="flex items-center mt-6 space-x-4">
          <a
            href="https://linkedin.com/in/skylarrearick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <RxLinkedinLogo size={24} />
          </a>
          <a
            href="https://github.com/sky1113"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black"
            aria-label="GitHub"
          >
            <RxGithubLogo size={24} />
          </a>
        </div>
        <a
          href="#contact"
          className="inline-block mt-6 px-6 py-3 bg-gray-600 text-white rounded-md text-lg font-medium hover:bg-gray-700 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </div>

      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gray-600 shadow-lg transition-transform duration-300 hover:scale-105">
          <Image src={headshotImg} fill alt="Headshot of Skylar Rearick" />
        </div>
      </div>
    </section>
  );
}
