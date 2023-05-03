import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center items-center mt-6 ml-6">
          <Image
            src="/homeimg.jpg"
            alt="image"
            width={200}
            height={1}
            className="rounded-3xl"
          ></Image>
          <div className="ml-5">
            <p className="text-2xl">
              A Blog for Hunting Coders by a Hunting Coder
            </p>
            <p className="font-bold text-[16px]">by Mohammed Sajid</p>
          </div>
        </div>
        <div className="blogs mt-16 font-semibold flex flex-col items-center">
          <h1 className="text-5xl">Popular Blogs</h1>
          <div className="blogItems mt-10">
            <div className="blogItem mb-6">
              <h1 className="text-2xl">How to learn JavaScript in 2022?</h1>
              <p>JavaScript is used to design logic for the Web</p>
            </div>
            <div className="blogItem mb-6">
              <h1 className="text-2xl">How to learn JavaScript in 2022?</h1>
              <p>JavaScript is used to design logic for the Web</p>
            </div>
            <div className="blogItem mb-6">
              <h1 className="text-2xl">How to learn JavaScript in 2022?</h1>
              <p>JavaScript is used to design logic for the Web</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
