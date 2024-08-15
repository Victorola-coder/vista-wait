import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  onChange?: () => void;
}

export default function Input({ ...props }: InputProps) {
  const { type, className, onChange, ...prop } = props;
  return (
    <input
      {...prop}
      type="email"
      name="email"
      id="email"
      className={clsx(className, "")}
      placeholder="Enter your email..."
      onChange={onChange}
    />
  );
}
