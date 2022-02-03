type Props = {
  children: JSX.Element | string;
};

const H1 = ({ children }: Props) => (
  <h1 className="text-3xl mb-4 font-semibold max-w-screen-md mx-auto">
    {children}
  </h1>
);

const H2 = ({ children }: Props) => (
  <h2 className="text-2xl my-4 max-w-screen-md mx-auto">{children}</h2>
);

const H3 = ({ children }: Props) => (
  <h3 className="border-l-2 pl-2 border-orange-400 text-xl my-4 max-w-screen-md mx-auto">
    {children}
  </h3>
);

const Headers = {
  H1,
  H2,
  H3,
};

export default Headers;
