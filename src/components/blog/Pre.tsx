import classNames from "classnames";

type Props = {
  children: JSX.Element | string;
  className: string;
};

const Pre = ({ children, ...props }: Props) => {
  return (
    <pre className={classNames("mx-auto block my-8", props.className)}>
      {children}
    </pre>
  );
};

export default Pre;
