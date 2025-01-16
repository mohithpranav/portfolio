import { ReactElement } from "react";

interface ProjectsCardProps {
  imgURL: string | ReactElement;
  title: string;
  description: string;
  icon: ReactElement;
}

export function ProjectsCard({
  imgURL,
  title,
  description,
  icon,
}: ProjectsCardProps) {
  return (
    <div className="flex px-4 py-4 w-fit  hover:cursor-pointer rounded-2xl scale-105 duration-1000  hover:bg-[#1C1A19] group">
      {imgURL}
      <div className="ml-4 flex flex-col justify-center w-96">
        <div className="font-semibold font-framer text-2xl">{title}</div>
        <div className="text-base font-normal font-framer text-gray-250">
          {description}
        </div>
      </div>
      <div className="flex justify-end group-hover:animate-slideDiagonal ">
        {icon}
      </div>
    </div>
  );
}
