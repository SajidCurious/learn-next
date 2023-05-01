import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl mt-6">Title of the page {slug}</h1>
      <p className="max-w-6xl mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum explicabo
        possimus deleniti ab minus dolorem quisquam eos nemo ipsa maiores qui
        eum natus quam quas tenetur, laboriosam assumenda. Ducimus soluta
        incidunt debitis delectus, cupiditate exercitationem voluptatibus
        voluptates quod cumque consequatur accusantium dolor consequuntur dolore
        hic mollitia fugit provident magnam? Consectetur non quasi quo iusto
        fuga, modi dolorem architecto nam, est ex voluptates beatae ipsum
        doloremque eos excepturi neque cum delectus repellat ad magnam molestias
        dolore quidem. Quasi corrupti modi aperiam cumque quaerat eligendi
        tempore possimus! Est incidunt laboriosam deleniti nostrum, doloremque
        quas error eveniet excepturi, magnam minima tempore sunt placeat.
      </p>
    </div>
  );
};

export default slug;
