"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Qualifications</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              // contentStyle={{
              //   background: "#f3f4f6",
              //   boxShadow: "none",
              //   border: "1px solid rgba(0, 0, 0, 0.05)",
              //   textAlign: "left",
              //   padding: "1.3rem 2rem",
              // }}
              // contentArrowStyle={{
              //   borderRight: "0.4rem solid #9ca3af",
              // }}
              // date={item.date}
              // icon={item.icon}
              // iconStyle={{
              //   background: "white",
              //   fontSize: "1.5rem",
              // }}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

// ---------------------------
// an alternate method  just for trial
// ------------------------------

// "use client";
// import { experiencesData } from "@/lib/data";
// import React from "react";
// import Image from "next/image";
// // import { LuGraduationCap } from "react-icons/lu";
// // import { CgWorkAlt } from "react-icons/cg";
// import { useSectionInView } from "@/lib/hooks";
// import SectionHeading from "./section-heading";
// import schoolIcon from "@/public/school.svg";
// import workIcon from "@/public/work.svg";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   return (
//     <section
//       id="experience"
//       ref={ref}
//       className="scroll-mt-28 mb-28 sm:mb-40  text-base pb-8 sm:text-lg"
//     >
//       <SectionHeading>My Qualifications</SectionHeading>
//       {/* from here starts the time line code */}
//       <div className="text-black">
//         {experiencesData.map((element) => {
//           const colors = [
//             "bg-red-500",
//             "bg-blue-500",
//             "bg-yellow-500",
//             "bg-purple-500",
//             "bg-orange-500",
//           ];
//           // const color = `bg-${element.color}-500`;
//           const color = "bg-gray-300";
//           return (
//             <div key={element.id} className="flex m-4 relative">
//               <div
//                 className={`${color} w-0.5 h-6 translate-x-20 translate-y-56 opacity-60 sm:hidden`}
//               ></div>
//               <div
//                 className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
//               ></div>
//               <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
//                 <div className="w-4/5 text-gray-500">{element.date}</div>
//                 <div
//                   className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
//                 ></div>
//                 <Image
//                   src={element.icon === "school" ? schoolIcon : workIcon}
//                   // src="/school.svg"
//                   alt="icon"
//                   className={`${color} w-10 p-1 rounded-lg z-20`}
//                 />
//                 <div
//                   className={`${color} h-px w-8 translate-y-5 opacity-30`}
//                 ></div>
//               </div>
//               <div className="border border-gray-300 rounded-lg px-8 py-4 bg-gray-200 w-full text-center z-10 sm:w-96">
//                 <div className="text-xl font-medium">{element.title}</div>
//                 <div className="text-black mb-6 sm:mb-8 sm:text-xs">
//                   {element.location}
//                   <span className="sm:hidden">| {element.date}</span>
//                 </div>
//                 <div className="mb-4 text-left">{element.description}</div>
//                 <div className="flex flex-wrap mb-6 justify-center">
//                   {element.tech.map((tech, index) => {
//                     return (
//                       <span
//                         key={index}
//                         className="bg-gray-400 rounded-xl px-2 py-1 text-sm m-1"
//                       >
//                         {tech}
//                       </span>
//                     );
//                   })}
//                 </div>
//                 <Image
//                   src={element.icon === "school" ? schoolIcon : workIcon}
//                   alt="icon"
//                   className={`${color} w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
//                 />
//                 {/* <a
//                   className={`${color} text-gray-950 font-medium px-4 py-1 rounded-md mx-auto cursor-pointer hover:text-neutral-700`}
//                 >
//                   {element.buttonText}
//                 </a> */}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {/* here it ends  */}
//     </section>
//   );
// }
