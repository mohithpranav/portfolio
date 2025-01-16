import React, { ReactElement } from "react";
import { DecoItem1, DecoItem2 } from "@/assets/icons/social-icons/decoItems";

interface ProfileCardProps {
  imgURL?: ReactElement;
  name: string;
  description: React.ReactNode;
  navboxContent: ReactElement;
}

export function ProfileCard({
  imgURL,
  name,
  description,
  navboxContent,
}: ProfileCardProps) {
  return (
    <div
      className="flex flex-col justify-center items-center pt-8 w-350
   rounded-2xl bg-white font-framer"
    >
      <div>{imgURL}</div>
      <div className="text center text-black font-bold text-3xl mt-6 mb-12 font-framer">
        {name}
      </div>
      <div className="text-gray-300 text-lg text-center font-semibold mb-8 font-framer">
        {description}
      </div>
      <div className="pb-5">{navboxContent}</div>
    </div>
  );
}
