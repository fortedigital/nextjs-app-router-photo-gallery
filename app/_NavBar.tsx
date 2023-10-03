import React from "react";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <h1 className="text-4xl font-bold text-center m-8">
      Welcome to <a href="https://nextjs.org">Next.js</a> photo gallery
    </h1>
  );
};

export default NavBar;
