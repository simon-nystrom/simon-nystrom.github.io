type Props = {
  children: JSX.Element | string;
};

const Paragraph = ({ children }: Props) => {
  return <p className="leading-relaxed max-w-screen-md mx-auto">{children}</p>;
};

export default Paragraph;
