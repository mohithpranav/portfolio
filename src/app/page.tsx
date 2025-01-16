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

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-center mb-12 mt-7">
        <Navbox variant="navbox">
          <div className="flex justify-between w-full">
            {NavIcons.map((icon) => (
              <div key={icon.id} className="p-1">
                <icon.iconSVG />
              </div>
            ))}
          </div>
        </Navbox>
      </div>

      <div>
        <div className="flex justify-center">
          <div className="top-20 z-10 sticky max-h-fit">
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
                      <div key={icon.id} className="p-2">
                        <icon.iconSVG />
                      </div>
                    ))}
                  </div>
                </Navbox>
              }
            />
          </div>
          <div className="ml-28 font-framer w-2/4">
            {/* Intro Section */}
            <div className="text-8xl font-extrabold">
              FULL STACK <br /> <div className="text-gray-500">DEVELOPER</div>
            </div>
            <div className="max-w-[40rem] mt-4 text-lg font-normal text-gray-250">
              I’m a 3rd-year BTech student at SRM University, passionate about
              solving complex problems and building scalable, efficient web
              applications. Always eager to learn and grow, I embrace modern
              technologies and continuously explore new tools to create
              innovative, impactful solutions.
            </div>
            <div className="flex mt-10">
              <div className="mr-12">
                <div className="font-semibold text-7xl mb-2">+7</div>
                <div>
                  PROJECTS <br /> BUILD
                </div>
              </div>
              <div className="mr-12">
                <div className="font-semibold text-7xl mb-2">+100</div>
                <div>
                  DSA PROBLEMS <br /> SOLVED
                </div>
              </div>
              <div>
                <div className="font-semibold text-7xl mb-2">+12</div>
                <div>
                  TOOLS & <br /> TECHNOLOGIES
                </div>
              </div>
            </div>

            {/* Technical Skills Section */}
            <div className="mt-20">
              <div className="text-8xl font-extrabold">
                TECHNICAL <br /> <div className="text-gray-500">SKILLS</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {SkillIcons.map((icon) => (
                  <div className="" key={icon.id}>
                    <SkillBox
                      imgURL={<icon.iconSVG />}
                      name={icon.name}
                      description={icon.description}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="mt-20">
              <div className="text-8xl font-extrabold mt-1">
                PROJECTS <br /> <div className="text-gray-500">BUILT</div>
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
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"></div>
            </div>

            {/* Contact Section */}
            <div className="mt-20">
              <div className="text-8xl font-extrabold">
                LETS WORK <br /> <div className="text-gray-500">TOGETHER</div>
              </div>
              <div className="mt-20">
                <div className="flex gap-4">
                  <TextBox boxName="Name" text="Your Name" variant="primary" />
                  <TextBox
                    boxName="Email"
                    text="Your@gmail.com"
                    variant="primary"
                  />
                </div>

                <div className="mt-3">
                  <TextBox boxName="Budget" text="...." variant="secondary" />
                </div>

                <div className="mt-3">
                  <TextBox
                    boxName="Message"
                    text="Message"
                    variant="tertiary"
                  />
                </div>

                <button className="h-10 w-[660px] text-white bg-[#F46C38] rounded-lg mt-4 mb-10px">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="h-20 mt-32 justify-center items-center flex font-medium font-framer ">
        Made by <p className="text-[#F46C38] ml-1"> Mohith Pranav</p>
      </div>
    </div>
  );
}
