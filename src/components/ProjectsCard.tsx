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
    <div className="flex px-4 py-4 w-96 sm:w-[570px] hover:cursor-pointer rounded-2xl scale-105 duration-400 hover:bg-[#1d1c1c] group">
      {imgURL}
      <div className="ml-4 flex flex-col justify-center w-96">
        <div className="font-semibold font-framer text-2xl">{title}</div>
        <div className="text-base font-normal font-framer text-gray-250">
          {description}
        </div>
      </div>
      <div className="flex justify-end mt-2 mr-2 group-hover:animate-slideDiagonal transition-transform">
        {icon}
      </div>
    </div>
  );
}
