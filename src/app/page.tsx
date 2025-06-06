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
import { Toaster, toast } from "react-hot-toast";
// ✨ Define animation variants
const fadeInFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          duration: 3000,
          position: "top-center",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (_error) {
      console.error(_error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="px-4 sm:px-8">
      <Toaster />
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
            <motion.div className="max-w-[40rem] mt-4 text-lg text-gray-250 ">
              I’m a final-year BTech student at SRM University, passionate about
              solving complex problems and building scalable web applications.
              Eager to learn and innovate, I’m currently exploring AI and
              working on a RAG-based application to build smarter, context-aware
              solutions.
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
              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                onClick={() => handleClick("https://addiscombepizza.co.uk/")}
              >
                <ProjectsCard
                  imgURL={Projectpic()}
                  title="Pizza Booking Web App"
                  description="Online platform for ordering pizzas and managing shop orders."
                  icon={<ArrowIcons />}
                />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                onClick={() =>
                  handleClick("https://github.com/mohithpranav/srm-connect-be")
                }
              >
                <ProjectsCard
                  imgURL={Projectpic()}
                  title="College Connect"
                  description="Connect with people based on shared interests, hackathons, and desired skill sets. Chat and collaborate easily."
                  icon={<ArrowIcons />}
                />
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                onClick={() =>
                  handleClick("https://nike-chi-amber.vercel.app/")
                }
              >
                <ProjectsCard
                  imgURL={Projectpic()}
                  title="Nike landing page"
                  description="A responsive landing page for Nike, showcasing products and features."
                  icon={<ArrowIcons />}
                />
              </motion.div>
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
            <form onSubmit={handleSubmit} className="mt-20">
              <div className="flex gap-2 justify-center sm:justify-normal mb-2">
                <TextBox
                  boxName="Name"
                  text="Your Name"
                  variant="primary"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <TextBox
                  boxName="Email"
                  text="Your@gmail.com"
                  variant="primary"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-2 mt-2">
                <TextBox
                  boxName="Subject"
                  text="Subject"
                  variant="secondary"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <TextBox
                boxName="Message"
                text="Your Message"
                variant="tertiary"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-10 w-[370px] sm:w-[650px] text-white bg-[#F46C38] rounded-lg mt-4 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
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
