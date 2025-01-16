import { ReactElement } from "react";

interface NavboxProps {
  variant: "navbox" | "profilebox";
  children?: ReactElement;
}

const variantClass = {
  navbox: "bg-gray-400",
  profilebox: "bg-white",
};

export function Navbox({ variant, children }: NavboxProps) {
  return (
    <div
      className={`${variantClass[variant]} flex items-center justify-center py-5 px-6 w-60 h-10 rounded-2xl `}
    >
      {children}
    </div>
  );
}
