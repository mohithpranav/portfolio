// //

// // --------------------------------------------------------------------------------------

// "use client";
// import { Profilepic } from "@/assets/images/Profilepic";
// import { Navbox } from "@/components/Navbox";
// import { ProfileCard } from "@/components/ProfileCard";
// import { SkillBox } from "@/components/SkillBox";
// import { NavIcons } from "@/assets/icons/nav-icons/NavIcons";
// import { SocialIcons } from "@/assets/icons/social-icons/SocialIcons";
// import { ProjectsCard } from "@/components/ProjectsCard";
// import Projectpic from "@/assets/images/Projectpic";
// import { ArrowIcons } from "@/assets/icons/social-icons/ArrowIcons";
// import { SkillIcons } from "@/assets/icons/skill-icons/SkillIcons";
// import { TextBox } from "@/components/TextBox";
// import handleClick from "./handleClick";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Home() {
//   const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

//   return (
//     <div className="px-4 sm:px-8">
//       {/* Navbar */}
//       <div className="flex justify-center mb-8 mt-5 ">
//         <Navbox variant="navbox">
//           <div className="flex justify-between w-full flex-wrap sm:flex-nowrap">
//             {NavIcons.map((icon) => (
//               <div
//                 key={icon.id}
//                 className="p-1 flex flex-col items-center justify-center relative group"
//                 onMouseEnter={() => setHoveredIcon(icon.id)}
//                 onMouseLeave={() => setHoveredIcon(null)}
//               >
//                 {/* Icon */}
//                 <icon.iconSVG />

//                 {/* Animated Tooltip */}
//                 <AnimatePresence>
//                   {hoveredIcon === icon.id && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -5 }}
//                       transition={{ duration: 0.3 }}
//                       className=" font-framer absolute top-full mt-3 text-center px-2 py-1 bg-gray-100 text-gray-700 dark:bg-[#2d2b2a] dark:text-white rounded-md shadow-md text-xs"
//                     >
//                       {icon.name}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </div>
//         </Navbox>
//       </div>

//       {/* Profile and Intro Section */}
//       <div className="flex flex-col items-center sm:flex-row justify-center sm:items-start">
//         <div className="top-20 z-10 max-h-fit sm:w-auto w-80 sm:sticky sm:top-20">
//           <ProfileCard
//             imgURL={<Profilepic />}
//             name="MOHITH PRANAV"
//             description={
//               <>
//                 A Tech Enthusiast
//                 <br className="leading-tight" />
//                 building Innovative & Scalable
//                 <br className="leading-tight" />
//                 Web Applications.
//               </>
//             }
//             navboxContent={
//               <Navbox variant="profilebox">
//                 <div className="flex justify-between w-full">
//                   {SocialIcons.map((icon) => (
//                     <div
//                       key={icon.id}
//                       className="p-2 cursor-pointer"
//                       onClick={() => handleClick(icon.link)}
//                     >
//                       <icon.iconSVG />
//                     </div>
//                   ))}
//                 </div>
//               </Navbox>
//             }
//           />
//         </div>

//         <div className="ml-0 sm:ml-28 w-full sm:w-2/4 text-center sm:text-left mt-10 sm:mt-4 ">
//           {/* Intro Section */}
//           <div>
//             <div className="text-5xl sm:text-8xl font-extrabold">
//               FULL STACK <br /> <div className="text-gray-500">DEVELOPER</div>
//             </div>
//             <div className="max-w-[40rem] mt-4 text-lg font-normal text-gray-250">
//               I’m a 3rd-year BTech student at SRM University, passionate about
//               solving complex problems and building scalable, efficient web
//               applications. Always eager to learn and grow, I embrace modern
//               technologies and continuously explore new tools to create
//               innovative, impactful solutions.
//             </div>
//             <div className="flex flex-row  mt-10  sm:justify-start justify-evenly ">
//               <div className="mr-0 sm:mr-12 text-center sm:text-left mb-4 sm:mb-0">
//                 <div className="font-semibold text-3xl sm:text-7xl mb-2">
//                   +7
//                 </div>
//                 <div className="text-sm sm:text-lg m-2 font-framer">
//                   PROJECTS <br /> BUILD
//                 </div>
//               </div>
//               <div className="mr-0 sm:mr-12 text-center sm:text-left mb-4 sm:mb-0">
//                 <div className="font-semibold text-3xl sm:text-7xl mb-2">
//                   +100
//                 </div>
//                 <div className="text-sm sm:text-lg  m-2">
//                   DSA PROBLEMS <br /> SOLVED
//                 </div>
//               </div>
//               <div className="text-center sm:text-left">
//                 <div className="font-semibold text-3xl sm:text-7xl mb-2">
//                   +12
//                 </div>
//                 <div className="text-sm sm:text-lg  m-2">
//                   TOOLS & <br /> TECHNOLOGIES
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Technical Skills Section */}
//           <div className="mt-20">
//             <div className="text-5xl sm:text-8xl font-extrabold">
//               TECHNICAL <br /> <div className="text-gray-500">SKILLS</div>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//               {SkillIcons.map((icon) => (
//                 <div className="" key={icon.id}>
//                   <SkillBox
//                     imgURL={<icon.iconSVG />}
//                     name={icon.name}
//                     description={icon.description}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Projects Section */}
//           <div className="mt-20">
//             <div className="text-5xl sm:text-8xl font-extrabold mt-1">
//               PROJECTS <br /> <div className="text-gray-500">BUILT</div>
//               <div className="mt-2">
//                 <ProjectsCard
//                   imgURL={Projectpic()}
//                   title="Second Brain"
//                   description="Keep your brain happy"
//                   icon={<ArrowIcons />}
//                 />
//                 <ProjectsCard
//                   imgURL={Projectpic()}
//                   title="Second Brain"
//                   description="Keep your brain happy"
//                   icon={<ArrowIcons />}
//                 />
//                 <ProjectsCard
//                   imgURL={Projectpic()}
//                   title="Second Brain"
//                   description="Keep your brain happy"
//                   icon={<ArrowIcons />}
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"></div>
//           </div>

//           {/* Contact Section */}
//           <div className="mt-20">
//             <div className=" text-5xl sm:text-8xl font-extrabold">
//               LETS WORK <br /> <div className="text-gray-500">TOGETHER</div>
//             </div>
//             <div className="mt-20 ">
//               <div className="flex gap-2 justify-center sm:justify-normal ">
//                 <TextBox boxName="Name" text="Your Name" variant="primary" />
//                 <TextBox
//                   boxName="Email"
//                   text="Your@gmail.com"
//                   variant="primary"
//                 />
//               </div>

//               <div className="mt-3">
//                 <TextBox boxName="Budget" text="...." variant="secondary" />
//               </div>

//               <div className="mt-3">
//                 <TextBox boxName="Message" text="Message" variant="tertiary" />
//               </div>

//               <button className="h-10 w-[370px] sm:w-[650px] text-white bg-[#F46C38] rounded-lg mt-4 mb-10px">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="h-20 mt-32 justify-center items-center flex font-medium font-framer">
//         Made by <p className="text-[#F46C38] ml-1">Mohith Pranav</p>
//       </div>
//     </div>
//   );
// }

//

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Profilepic } from "@/assets/images/Profilepic";
import { Navbox } from "@/components/Navbox";
import { ProfileCard } from "@/components/ProfileCard";
import { SkillBox } from "@/components/SkillBox";
import { NavIcons } from "@/assets/icons/nav-icons/NavIcons";
import { SocialIcons } from "@/assets/icons/social-icons/SocialIcons";
import { ProjectsCard } from "@/components/ProjectsCard";
import Projectpic from "@/assets/images/Projectpic";
import { ArrowIcons } from "@/assets/icons/social-icons/ArrowIcons";
import { SkillIcons } from "@/assets/icons/skill-icons/SkillIcons";
import { TextBox } from "@/components/TextBox";
import handleClick from "./handleClick";

// ✨ Define animation variants
const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="px-4 sm:px-8">
      {/* Navbar with transition */}
      <motion.div
        className="flex justify-center mb-8 mt-5"
        variants={fadeInFromTop}
        initial="hidden"
        animate="visible"
      >
        <Navbox variant="navbox">
          <div className="flex justify-between w-full flex-wrap sm:flex-nowrap">
            {NavIcons.map((icon) => (
              <div
                key={icon.id}
                className="p-1 flex flex-col items-center justify-center relative group"
                onClick={() => handleScroll(icon.sectionId)}
                onMouseEnter={() => setHoveredIcon(icon.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <icon.iconSVG />
                <AnimatePresence>
                  {hoveredIcon === icon.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full mt-3 text-center px-2 py-1 bg-gray-100 text-gray-700 dark:bg-[#2d2b2a] dark:text-white rounded-md shadow-md text-xs hidden sm:block"
                    >
                      {icon.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Navbox>
      </motion.div>

      <div className="flex flex-col items-center sm:flex-row justify-center sm:items-start">
        {/* Profile Section */}
        <motion.div
          className="top-20 z-10 max-h-fit sm:w-auto w-80 sm:sticky sm:top-20"
          variants={fadeInFromTop}
          initial="hidden"
          animate="visible"
        >
          <ProfileCard
            imgURL={<Profilepic />}
            name="MOHITH PRANAV"
            description={
              <>
                A Tech Enthusiast
                <br className="leading-tight" />
                building Innovative & Scalable
                <br className="leading-tight" />
                Web Applications.
              </>
            }
            navboxContent={
              <Navbox variant="profilebox">
                <div className="flex justify-between w-full">
                  {SocialIcons.map((icon) => (
                    <div
                      key={icon.id}
                      className="p-2 cursor-pointer"
                      onClick={() => handleClick(icon.link)}
                    >
                      <icon.iconSVG />
                    </div>
                  ))}
                </div>
              </Navbox>
            }
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="ml-0 sm:ml-28 w-full sm:w-2/4 text-center sm:text-left mt-10 sm:mt-4"
          variants={fadeInFromTop}
          initial="hidden"
          animate="visible"
        >
          {/* Intro Section */}
          <motion.div id="fullstack">
            <motion.div className="text-5xl sm:text-8xl font-extrabold">
              FULL STACK <br /> <span className="text-gray-500">DEVELOPER</span>
            </motion.div>
            <motion.div className="max-w-[40rem] mt-4 text-lg text-gray-250">
              I’m a third-year BTech student at SRM University, passionate about
              solving complex problems and building scalable, efficient web
              applications. Always eager to learn and grow, I embrace modern
              technologies and continuously explore new tools to create
              innovative and impactful solutions.
            </motion.div>

            {/* Stats Section */}
            <div className="flex flex-row mt-10 sm:justify-start justify-evenly">
              <div className="mr-0 sm:mr-12 text-center sm:text-left mb-4 sm:mb-0">
                <div className="font-semibold text-3xl sm:text-7xl mb-2">
                  +7
                </div>
                <div className="text-sm sm:text-lg m-2 font-framer">
                  PROJECTS <br /> BUILD
                </div>
              </div>
              <div className="mr-0 sm:mr-12 text-center sm:text-left mb-4 sm:mb-0">
                <div className="font-semibold text-3xl sm:text-7xl mb-2">
                  +100
                </div>
                <div className="text-sm sm:text-lg m-2">
                  DSA PROBLEMS <br /> SOLVED
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-3xl sm:text-7xl mb-2">
                  +12
                </div>
                <div className="text-sm sm:text-lg m-2">
                  TOOLS & <br /> TECHNOLOGIES
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills Section */}
          <motion.div
            id="technical"
            className="mt-20"
            variants={fadeInFromTop}
            initial="hidden"
            animate="visible"
          >
            <div className="text-5xl sm:text-8xl font-extrabold">
              TECHNICAL <br /> <span className="text-gray-500">SKILLS</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {SkillIcons.map((icon) => (
                <SkillBox
                  key={icon.id}
                  imgURL={<icon.iconSVG />}
                  name={icon.name}
                  description={icon.description}
                />
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            id="projects"
            className="mt-20"
            variants={fadeInFromTop}
            initial="hidden"
            animate="visible"
          >
            <div className="text-5xl sm:text-8xl font-extrabold">
              PROJECTS <br /> <span className="text-gray-500">BUILT</span>
            </div>
            <div className="mt-2">
              <ProjectsCard
                imgURL={Projectpic()}
                title="Second Brain"
                description="Keep your brain happy"
                icon={<ArrowIcons />}
              />
              <ProjectsCard
                imgURL={Projectpic()}
                title="Second Brain"
                description="Keep your brain happy"
                icon={<ArrowIcons />}
              />
              <ProjectsCard
                imgURL={Projectpic()}
                title="Second Brain"
                description="Keep your brain happy"
                icon={<ArrowIcons />}
              />
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            id="contact"
            className="mt-20"
            variants={fadeInFromTop}
            initial="hidden"
            animate="visible"
          >
            <div className="text-5xl sm:text-8xl font-extrabold">
              LETS WORK <br /> <span className="text-gray-500">TOGETHER</span>
            </div>
            <div className="mt-20">
              <div className="flex gap-2 justify-center sm:justify-normal mb-2">
                <TextBox boxName="Name" text="Your Name" variant="primary" />
                <TextBox
                  boxName="Email"
                  text="Your@gmail.com"
                  variant="primary"
                />
              </div>

              <div className="mb-2">
                <TextBox boxName="Budget" text="...." variant="secondary" />
              </div>

              <TextBox boxName="Message" text="Message" variant="tertiary" />
              <button className="h-10 w-[370px] sm:w-[650px] text-white bg-[#F46C38] rounded-lg mt-4">
                Submit
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Section */}
      <div className="h-20 mt-32 justify-center items-center flex font-medium font-framer ">
        Made by <p className="text-[#F46C38] ml-1">Mohith Pranav</p>
      </div>
    </motion.div>
  );
}
