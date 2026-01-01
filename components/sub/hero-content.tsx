"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible" 
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">

  {/* Role Boxes - Row */}
  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">

    <motion.div
      variants={slideInFromTop}
      className="flex items-center gap-2 py-[6px] px-[8px] border border-[#7042f88b] opacity-[0.9] rounded-lg"
    >
      <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
      <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold ">
        Full Stack Developer
      </h1>
    </motion.div>

    <motion.div
      variants={slideInFromTop}
      className="flex items-center gap-2 py-[6px] px-[8px] border border-[#7042f88b] opacity-[0.9] rounded-lg"
    >
      <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
      <h1 className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
        Network Security
      </h1>
    </motion.div>

  </div>
          
      

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Dence Baylor
          </span>{" "}
           expertise in {" "}
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            web development
            </span>{" "}
            and{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
           network security.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Developer with strong knowledge in Network Security, building secure and scalable web applications.
        </motion.p>

        {/* Call-to-Action Button */}
     <motion.div
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start"
>
  <motion.a
    variants={slideInFromLeft(1)}
    href="#projects"
    className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[250px] flex items-center justify-center"
  >
    My Projects
  </motion.a>

  <motion.a
    variants={slideInFromLeft(1)}
    href="/cv/Curriculum Vitae (Dence).pdf"
    download="Curriculum Vitae.pdf"
    className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base font-medium rounded-full shadow-lg transition-transform hover:scale-105 max-w-[250px] flex items-center justify-center"
  >
    Download CV
  </motion.a>
</motion.div>


      </div>

      {/* Right Side Image */}
        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="relative flex justify-center">
  <div className="absolute w-[320px] h-[500px] 
  bg-gradient-to-r from-purple-500 to-cyan-400 
  rounded-full blur-3xl opacity-40" />

          <Image
            src="/hero-bg.png"
            alt="work icons"
            height={500}
            width={500}
            draggable={false}
            className="select-none drop-shadow-lg sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px]"
          />

          </div>
        </motion.div>
    </motion.div>
  );
};
