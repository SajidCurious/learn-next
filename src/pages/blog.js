import Link from "next/link";
import React, { useEffect, useState } from "react";

const blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   console.log("effect is runnig");
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       console.log(parsed);
  //       setBlogs(parsed);
  //     });
  // }, []);

  return (
    <div className="blogs mt-5 font-semibold flex flex-col items-center">
      <h1 className="text-4xl">Popular Blogs</h1>
      {blogs.map((blogitem) => {
        return (
          <div key={blogitem.slug} className="blogItems mt-10">
            <div key={blogitem.slug} className="blogItem mb-6">
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h1 className="text-2xl mb-5">{blogitem.title}</h1>
              </Link>
              <p className="w-[800px]">{blogitem.content.substr(0, 200)}</p>
            </div>
            <button className="font-semibold px-3 py-1 rounded-md bg-green-600 text-white">
              Read More
            </button>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default blog;
