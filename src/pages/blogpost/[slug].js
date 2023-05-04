import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
  }, [router.isReady]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl mt-6">{blog && blog.title}</h1>
      <p className="max-w-6xl mt-5">{blog && blog.content}</p>
    </div>
  );
};

export default slug;
