import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-700 text-white h-14">
      <div className="grid justify-center content-center h-full">
        <Link href="/">
          <h1 className="font-mono text-2xl font-bold">blog</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
