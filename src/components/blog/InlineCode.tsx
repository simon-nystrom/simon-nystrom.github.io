type Props = {
  children: JSX.Element | string;
};

const InlineCode = ({ children }: Props) => {
  return (
    <code className="bg-gray-700 px-1 rounded-sm text-orange-100">
      {children}
    </code>
  );
};

export default InlineCode;
