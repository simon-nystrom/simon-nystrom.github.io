type LiProps = {
  children: JSX.Element;
};

const Li = ({ children }: LiProps) => {
  return (
    <li className="text-orange-400">
      <div className="text-white">{children}</div>
    </li>
  );
};

export default Li;
