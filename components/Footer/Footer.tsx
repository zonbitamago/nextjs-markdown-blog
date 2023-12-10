import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="p-2 text-s flex justify-center">
        <Link href="generator">Generator</Link>
      </div>
      <p className="p-2 text-center text-xs">
        Copyright © 2019 Webty, inc. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
