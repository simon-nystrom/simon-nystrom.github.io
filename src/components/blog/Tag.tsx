type Props = {
  idx: number;
  text: string;
};

const colors = [
  "bg-green-200",
  "bg-orange-200",
  "bg-pink-200",
  "bg-purple-200",
];

const Tag = ({ idx, text }: Props) => {
  return (
    <span
      className={`rounded-full px-2 ${
        colors[idx % colors.length]
      } text-white text-sm bg-opacity-20`}
    >
      {text}
    </span>
  );
};

export default Tag;
