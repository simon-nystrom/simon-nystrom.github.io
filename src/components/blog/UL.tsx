type Props = {
  children: JSX.Element;
};

const UL = ({ children }: Props) => (
  <ul className="list-disc list-inside pl-4 py-4 max-w-screen-md mx-auto">
    {children}
  </ul>
);

export default UL;
