import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  // const router = useRouter();
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl mt-6">{blog && blog.title}</h1>
      <p className="max-w-6xl mt-5">{blog && blog.content}</p>
    </div>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}

export default slug;
