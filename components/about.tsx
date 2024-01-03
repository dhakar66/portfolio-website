"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hey there!! Thanks for visiting my portfolio, let me start by telling a
        bit about me. My name is Tenzin Dhakar and I am a final year student
        (8th semester) at Jabalpur Engineering College doing B.Tech in Computer
        Science.{" "}
        {/* <span className="font-medium">full-stack web development</span>.{" "} */}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
        {/* My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span> */}
        {/* . I am also familiar with TypeScript and Prisma. */}I am always
        looking to learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">internship position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading
        books, watching movies, and listening to songs. I also do bodybuilding.{" "}
        <span className="font-medium">I love learning new things.</span>
        {/* . I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar. */}
      </p>
    </motion.section>
  );
}
