import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import Image from "next/image";
import headshotImg from "@/public/me_cropped.jpeg";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between my-12 md:my-24 px-4 sm:px-6 md:px-8 lg:px-24 gap-8 md:gap-12">
      {/* Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-5xl font-bold font-serif text-center lg:text-left">
          Hi, I&apos;m <span className="italic">Skylar</span>!
        </h1>
        <p className="mt-4 text-xl text-center lg:text-left">
          I&apos;m a full-stack developer seeking roles in the Greater Seattle
          area, specializing in building high-quality web applications.
        </p>

        {/* Buttons and Icons */}
        <div className="mt-6 flex flex-col lg:flex-row flex-wrap items-center gap-4">
          {/* Buttons */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/ResumeFall2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white border-2 border-gray-700 text-gray-700 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-300 text-center"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-[#C8CFFD] border-2 border-gray-700 text-gray-700 rounded-full text-lg font-medium hover:bg-[#B2BCFC] transition-colors duration-300 text-center"
            >
              Get in Touch
            </a>
          </div>

          {/* Icons */}
          <div className="flex gap-4 items-center">
            <a
              href="https://linkedin.com/in/skylarrearick"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800"
              aria-label="LinkedIn"
            >
              <RxLinkedinLogo size={32} />
            </a>
            <a
              href="https://github.com/sky1113"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-800"
              aria-label="GitHub"
            >
              <RxGithubLogo size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center lg:justify-end">
        <div className="w-60 md:w-80 lg:w-[28rem] max-w-full rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
          <Image
            src={headshotImg}
            alt="Headshot of Skylar Rearick"
            width={552}
            height={552}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
