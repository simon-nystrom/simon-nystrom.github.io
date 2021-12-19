type Props = {
  children: JSX.Element;
};

const UL = ({ children }: Props) => (
  <ul className="list-disc list-inside pl-4 py-4">{children}</ul>
);

export default UL;
