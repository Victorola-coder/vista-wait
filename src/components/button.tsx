interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function button(props: ButtonProps) {
  const { loading, className, onClick, children, disabled, ...prop } = props;

  return <div>button</div>;
}
