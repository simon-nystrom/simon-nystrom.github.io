import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex items-center mb-4">
      <h1 className="text-xl border-r border-orange-300 pr-6">newcurrent</h1>
      <nav className="pl-6">
        <ul className="flex gap-6 justify-items-end">
          <li className="text-orange-300 font-semibold">
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          {/* <li className="">
            <Link href={"/about"}>About</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
