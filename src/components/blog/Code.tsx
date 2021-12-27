type Props = {
  children: JSX.Element | string;
};

const Code = ({ children }: Props) => {
  return <code className="max-w-screen-md">{children}</code>;
};

export default Code;
