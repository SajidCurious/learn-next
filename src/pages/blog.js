import Link from "next/link";
import React, { useEffect } from "react";

const blog = () => {
  useEffect(() => {
    console.log("effect is runnig");
  }, []);

  return (
    <div className="blogs mt-5 font-semibold flex flex-col items-center">
      <h1 className="text-5xl">Popular Blogs</h1>
      <div className="blogItems mt-10">
        <div className="blogItem mb-6">
          <Link href={"/blogpost/learn-javascript"}>
            <h1 className="text-2xl">How to learn JavaScript in 2022?</h1>
          </Link>
          <p>JavaScript is used to design logic for the Web</p>
        </div>
        <div className="blogItem mb-6">
          <Link href={"/blogpost/learn-javascript"}>
            <h1 className="text-2xl">How to learn JavaScript in 2022?</h1>
          </Link>
          <p>JavaScript is used to design logic for the Web</p>
        </div>
        <div className="blogItem mb-6">
          <Link href={"/blogpost/learn-javascript"}>
            <h1 className="text-2xl">How to learn JavaScript in 2022?</h1>
          </Link>
          <p>JavaScript is used to design logic for the Web</p>
        </div>
      </div>
    </div>
  );
};

export default blog;
