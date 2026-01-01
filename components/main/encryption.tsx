"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

import { useEffect, useState } from "react";


export const Encryption = () => {
  const securityItems = [
    "Authentication & Authorization", 
    "Secure API Design",
    "ACL Configuration (Cisco Routers)",
    "VLAN Segmentation & Network Isolation",
    "Firewall & DMZ Security Concepts",
    "Secure Management Access (SSH, SNMPv3)",
    "NAT / PAT Security Policies",
    "802.1X & RADIUS Authentication",
  ];
 
{/* ===== Desktop VIEW ===== */}
const positions = [
  { top: "28%", left: "25%" },    
  { top: "28%", right: "30%" },  
  { top: "48%", left: "18%" },    
  { top: "48%", right: "20%" },  
  { bottom: "30%", left: "30%" },
  { bottom: "30%", right: "30%" },
  { top: "22%", left: "42%" },    
  { bottom: "20%", left: "42%" }, 
];
{/* ===== MOBILE VIEW ===== */}
const mobilePositions = [
  { top: "-15%", left: "1%" },    
  { top: "-15%", right: "5%" },   
  { top: "18%", left: "5%" },     
  { top: "50%", right: "3%" },    
  { bottom: "32%", left: "2%" }, 
  { bottom: "12%", right: "32%" },
  { top: "15%", left: "64%" },   
  { bottom: "115%", left: "35%" }, 
];





  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[38px] font-medium text-center text-gray-200"
        >
          Network &{" "}

          Infrastructure {" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Security
          </span>{" "}
          Expertise.
        </motion.div>
      </div>

      

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042F88B] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>

      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>

     <div className="w-full flex items-start justify-center absolute relative">
  <video
    loop
    muted
    autoPlay
    playsInline
    preload="false"
    className="w-full h-auto"
  >
    <source src="/videos/encryption-bg.webm" type="video/webm" />
  </video>

{/* ===== MOBILE VIEW ===== */}
<div className="absolute inset-0 z-[30] pointer-events-none sm:hidden">
  {securityItems.map((item, index) => (
    <motion.div
      key={item}
      animate={{ y: [-3, 3, -3] }}
      transition={{
        duration: 4 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        ...mobilePositions[index],
        ...(index === 6 || index === 7 ? { transform: "translateX(-50%)" } : {}),
      }}
      className="
        absolute
        text-[8px]
        text-gray-300
        bg-black/40 backdrop-blur-md
        px-3 py-2
        rounded-lg
        border border-[#7042F88B]
        text-center
        max-w-[120px]
        leading-snug
        whitespace-normal break-words
      "
    >
      {item}
    </motion.div>
  ))}
</div>


{/* ===== DESKTOP VIEW ===== */}
<div className="absolute inset-0 z-[30] pointer-events-none hidden sm:block">
  {securityItems.map((item, index) => (
    <motion.div
      key={item}
      animate={{ y: [-6, 6, -6] }}
      transition={{
        duration: 5 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        ...positions[index],
        ...(index === 6 || index === 7 ? { transform: "translateX(-50%)" } : {}),
      }}
      className="
        absolute
        text-[14px]
        text-gray-300
        bg-black/40 backdrop-blur-md
        px-3 py-1
        rounded-full
        border border-[#7042F88B]
        text-center
        max-w-[220px]
        whitespace-normal break-words
      "
    >
      {item}
    </motion.div>
  ))}
</div>


</div>
  </div>

  );
};
