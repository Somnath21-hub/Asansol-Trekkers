import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import ashit from "../assets/team/AshitBanerjee.jpg";
import pinaki from "../assets/team/pinaki.jpg";
import debasish from "../assets/team/DebasishMaji.jpg";
import goutam from "../assets/team/GoutamGhosh.jpg";
import kalpataru from "../assets/team/KalpataruMukherjee.jpg";
import kapardi from "../assets/team/KapardiMukherjee.jpg";
import subhas from "../assets/team/SubhasChandraPaul.jpg";
import ShantanuBhowmik from "../assets/team/ShantanuBhowmik.jpeg";
import MithunTalukdar from "../assets/team/MithunTalukdar.png";
import AmitMukherjee from "../assets/team/AmitMukherjee.jpeg";
import DhananjaySarkar from "../assets/team/DhananjaySarkar.jpeg";
import DipankarMutsuddi from "../assets/team/DipankarMutsuddi.jpeg";
import ArupChakraborty from "../assets/team/ArupChakraborty.jpeg";
import AnindyaMukherjee from "../assets/team/AnindyaMukherjee.jpeg";
import SouravDhibar from "../assets/team/SouravDhibar.jpeg";
import SubarnaRoy from "../assets/team/SubarnaRoy.jpeg";
import AmalRay from "../assets/team/AmalRay.png";

const Team = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const teamMembers = [
    {
      image: pinaki,
      title: "Pinaki Ranjan Bannerjee",
      label: "Secretary",
    },
    {
      image: ashit,
      title: "Ashit Banerjee",
      label: "Founder Member",
    },
    {
      image: debasish,
      title: "Debasish Maji",
      label: "Founder Member",
    },
    {
      image: goutam,
      title: "Goutam Ghosh",
      label: "Cashier",
    },
    {
      image: kalpataru,
      title: "Kalpataru Mukherjee",
      label: "Convenor",
    },
    {
      image: ShantanuBhowmik,
      title: "Shantanu Bhowmik",
      label: "Guest Instructor",
    },
    {
      image: SouravDhibar,
      title: "Sourav Dhibar",
      label: "Instructor",
    },
    {
      image: MithunTalukdar,
      title: "Mithun Talukdar",
      label: "Instructor",
    },
    {
      image: kapardi,
      title: "Kapardi Mukherjee",
      label: "Member",
    },
    {
      image: subhas,
      title: "Subhas Chandra Paul",
      label: "Member",
    },

    {
      image: AmitMukherjee,
      title: "Amit Mukherjee",
      label: "Member",
    },
    {
      image: DhananjaySarkar,
      title: "Dhananjay Sarkar",
      label: "Member",
    },
    {
      image: DipankarMutsuddi,
      title: "Dipankar Mutsuddi",
      label: "Member",
    },
    {
      image: ArupChakraborty,
      title: "Arup Chakraborty",
      label: "Member",
    },
    {
      image: AnindyaMukherjee,
      title: "Anindya Mukerjee",
      label: "Member",
    },
    {
      image: SubarnaRoy,
      title: "Subarana Roy",
      label: "Member",
    },
    {
      image: AmalRay,
      title: "Amal Ray",
      label: "Member",
    },
  ];

  useEffect(() => {
    const track = trackRef.current;

    const clones = track.innerHTML;
    track.innerHTML += clones;

    const totalWidth = track.scrollWidth / 2;

    const animation = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 50,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    animationRef.current = animation;

    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.resume();

    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
      animation.kill();
    };
  }, []);

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#f9f7f4] to-[#f3efe9] overflow-hidden"
      id="Team"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
          <span className="text-gray-800">Meet Our </span>
          <span className="text-[#A2844E]">Team</span>
        </h2>

        <p className="text-gray-600 mb-12 text-base sm:text-lg max-w-2xl mx-auto">
          Passionate travel experts dedicated to making your adventures
          unforgettable.
        </p>

        <div className="relative w-[90%] sm:w-[85%] mx-auto">
          <div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-10 w-max"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[320px] text-center"
              >
                <div className="bg-white shadow-md rounded-2xl overflow-hidden border-4 border-[#A2844E]/60 hover:scale-105 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.title}
                    className="w-full h-[360px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {member.title}
                    </h3>
                    <p className="text-[#A2844E] mt-1 font-medium">
                      {member.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* background blur circles */}
      <div className="absolute top-0 left-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[14rem] sm:w-[18rem] md:w-[22rem] h-[14rem] sm:h-[18rem] md:h-[22rem] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />
    </section>
  );
};

export default Team;
