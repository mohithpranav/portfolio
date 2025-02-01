import { ContactIcon } from "./ContactIcon";
import { HomeIcon } from "./HomeIcon";
import { ProjectIcon } from "./ProjectIcon";
import { SkillsIcon } from "./SkillsIcon";

export const NavIcons = [
  { id: 1, iconSVG: HomeIcon, name: "Home", sectionId: "" },
  {
    id: 2,
    iconSVG: SkillsIcon,
    name: "Skills",
    sectionId: "technical",
  },
  {
    id: 3,
    iconSVG: ProjectIcon,
    name: "Projects",
    sectionId: "projects",
  },
  {
    id: 4,
    iconSVG: ContactIcon,
    name: "Contact",
    sectionId: "contact",
  },
];
