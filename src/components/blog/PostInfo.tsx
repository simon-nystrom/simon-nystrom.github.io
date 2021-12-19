import Tag from "./Tag";

type Props = {
  date: string | Date;
  series?: string;
  tags: string[];
};

const PostInfo = ({ date, series, tags }: Props) => (
  <div className="flex -mt-2 mb-4 text-sm justify-between">
    <span className="font-bold">{date}</span>
    <div className="flex-col sm:flex-row items-end flex gap-2 font-semibold">
      {series && <Tag idx={0} text={series}></Tag>}
      {tags.map((t, i) => (
        <Tag key={t} idx={i + 1} text={t}></Tag>
      ))}
    </div>
  </div>
);

export default PostInfo;
