/* eslint-disable @next/next/no-img-element */

type Props = {
  alt: string;
  src: string;
};

const Img = (props: Props) => (
  <span className="relative block w-full my-4">
    <img {...props} alt={props.alt}></img>
  </span>
);

export default Img;
