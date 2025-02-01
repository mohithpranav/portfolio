import { ReactElement } from "react";

interface SkillBoxProps {
  imgURL: ReactElement;
  name: string;
  description: string;
}

export function SkillBox({ imgURL, name, description }: SkillBoxProps) {
  return (
    <div className=" flex sm:w-64 w-1/2 onHover:bg-gray-800 rounded-lg sm:p-3  mb-6 sm:mb-0 hover:bg-[#1C1A19] cursor-pointer ">
      <div className="pr-2 sm:w-auto sm:pr-4 mr-4 sm:mr-0">{imgURL}</div>
      <div className="flex flex-col justify-center">
        <div className="font-semibold text-base w-10 sm:w-auto">{name}</div>
        <div className="text-gray-250 text-xs w-8 sm:w-auto">{description}</div>
      </div>
    </div>
  );
}
