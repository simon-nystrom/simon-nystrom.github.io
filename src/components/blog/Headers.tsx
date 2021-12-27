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

const Headers = {
  H1,
  H2,
};

export default Headers;
