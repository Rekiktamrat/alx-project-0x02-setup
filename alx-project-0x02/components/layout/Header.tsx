import Link from "next/link";
import React, { ReactNode } from "react";

const Header: React.FC = () => {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </>
  );
};

export default Header;
