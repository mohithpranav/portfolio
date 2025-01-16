import { ReactElement } from "react";

interface SkillBoxProps {
  imgURL: ReactElement;
  name: string;
  description: string;
}

export function SkillBox({ imgURL, name, description }: SkillBoxProps) {
  return (
    <div className=" flex w-64 onHover:bg-gray-800 rounded-lg p-3 hover:bg-[#1C1A19] cursor-pointer ">
      <div className="pr-4">{imgURL}</div>
      <div className="flex flex-col justify-center ">
        <div className="font-semibold text-base">{name}</div>
        <div className="text-gray-250 text-xs">{description}</div>
      </div>
    </div>
  );
}
