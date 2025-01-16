interface TextBoxProps {
  boxName: string;
  text: string;
  variant: "primary" | "secondary" | "tertiary";
}

const variantClass = {
  primary: " h-10 w-80 rounded-lg ",
  secondary: "h-10 rounded-xl w-[660px] ",
  tertiary: "h-24 rounded-lg w-[660px] pb-14",
};

export function TextBox({ boxName, text, variant }: TextBoxProps) {
  return (
    <div>
      <div className="text-gray-250 mb-2 text-xs font-medium">{boxName}</div>
      <input
        type="text"
        placeholder={text}
        className={`appearance-none outline-none ${variantClass[variant]} bg-gray-500 pl-2 font-medium  placeholder:text-gray-225 `}
      />
    </div>
  );
}
