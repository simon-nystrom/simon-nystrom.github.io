type Props = {
  children: JSX.Element | string;
};

const Paragraph = ({ children }: Props) => {
  return <p className="leading-relaxed">{children}</p>;
};

export default Paragraph;
