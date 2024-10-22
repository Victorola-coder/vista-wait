import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ ...props }: InputProps) {
  const { type, className, onChange, ...prop } = props;
  return (
    <input
      {...prop}
      type={type}
      name="email"
      id="email"
      className={clsx(
        className,
        "font-medium outline-none w-[325px] text-dark md:w-[610px] transition-all duration-300 placeholder:text-dark-200 text-[14px] leading-[28px] mt-[20px] md:text-base md:leading-[28px] rounded-[50px] border border-solid border-primary-100 px-[18px] py-[17px]"
      )}
      placeholder="Enter your email..."
      onChange={onChange}
    />
  );
}
