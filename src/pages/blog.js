import React from "react";

const blog = () => {
  return (
    <div className="blogs mt-5 font-semibold flex flex-col items-center">
      <h1 className="text-5xl">Popular Blogs</h1>
      <div className="blogItems mt-10">
        <div className="blogItem mb-4">
          <h1 className="text-xl">How to learn JavaScript in 2022?</h1>
          <p>JavaScript is used to design logic for the Web</p>
        </div>
        <div className="blogItem mb-4">
          <h1 className="text-xl">How to learn JavaScript in 2022?</h1>
          <p>JavaScript is used to design logic for the Web</p>
        </div>
        <div className="blogItem mb-4">
          <h1 className="text-xl">How to learn JavaScript in 2022?</h1>
          <p>JavaScript is used to design logic for the Web</p>
        </div>
      </div>
    </div>
  );
};

export default blog;
