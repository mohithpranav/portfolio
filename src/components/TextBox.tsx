interface TextBoxProps {
  boxName: string;
  text: string;
  variant: "primary" | "secondary" | "tertiary";
  type?: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
}

const variantClass = {
  primary: " h-10 w-[182px]  sm:w-80 rounded-lg ",
  secondary: "h-10 rounded-xl w-[370px] sm:w-[650px] ",
  tertiary: "h-24 rounded-lg w-[370px] sm:w-[650px] pb-14",
};

export function TextBox({
  boxName,
  text,
  variant,
  type = "text",
  name,
  value,
  onChange,
  required = false,
}: TextBoxProps) {
  const isTextArea = variant === "tertiary";
  const InputComponent = isTextArea ? "textarea" : "input";

  return (
    <div className="">
      <div className="text-gray-250 mb-2 text-sm  font-framer flex flex-start">
        <div>{boxName}</div>
      </div>
      <InputComponent
        type={type}
        name={name}
        placeholder={text}
        value={value}
        onChange={onChange}
        required={required}
        className={`appearance-none outline-none ${variantClass[variant]} bg-gray-500 pl-2 font-framer placeholder:text-gray-225`}
      />
    </div>
  );
}
