// import React, { ReactElement } from "react";

// interface ProfileCardProps {
//   imgURL?: ReactElement;
//   name: string;
//   description: React.ReactNode;
//   navboxContent: ReactElement;
// }

// export function ProfileCard({
//   imgURL,
//   name,
//   description,
//   navboxContent,
// }: ProfileCardProps) {
//   return (
//     <div
//       className="flex flex-col justify-center items-center pt-8
//    rounded-2xl bg-white font-framer"
//     >
//       <div>{imgURL}</div>
//       <div className="text center text-black font-bold text-3xl mt-6 mb-12 font-framer">
//         {name}
//       </div>
//       <div className="text-gray-300 text-lg text-center font-semibold mb-8 font-framer px-8 ">
//         {description}
//       </div>
//       <div className="pb-5">{navboxContent}</div>
//     </div>
//   );
// }

import React, { ReactElement } from "react";

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
      className="flex flex-col justify-center items-center pt-8 
      rounded-2xl bg-white font-framer w-full sm:w-[80%] md:w-auto"
    >
      <div>{imgURL}</div>
      <div className="text-center text-black font-bold text-3xl mt-6  sm:mb-12 font-framer">
        {name}
      </div>
      <div className="text-gray-300 text-lg text-center font-semibold mb-8 font-framer px-8">
        {description}
      </div>
      <div className="pb-5">{navboxContent}</div>
    </div>
  );
}
