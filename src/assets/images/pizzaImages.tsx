import Image from "next/image";

export const PizzaImage = () => {
  return (
    <Image
      src="/pizza.png"
      alt="Addiscombe Pizza"
      width={130}
      height={135}
      className="w-full h-full object-cover rounded-lg"
      priority
    />
  );
};
