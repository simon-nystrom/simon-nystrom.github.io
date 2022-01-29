type Props = {
  children: JSX.Element | string;
};

const Paragraph = ({ children }: Props) => {
  return (
    <p className="leading-relaxed max-w-screen-md mx-auto mb-4">{children}</p>
  );
};

export default Paragraph;
