import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

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
      <nav className="bg-black flex items-center justify-between">
        <h1 className="text-white ml-12 font-bold text-2xl">Hunting Coder</h1>
        <ul className="flex pr-12 gap-20 items-center py-4 text-white font-semibold">
          <Link href="/">
            <li className="hover:cursor-pointer">Home</li>
          </Link>
          <Link href="/blog">
            <li className="hover:cursor-pointer">Blog</li>
          </Link>
          <Link href="/contact">
            <li className="hover:cursor-pointer">Contact</li>
          </Link>
          <Link href="/about">
            <li className="hover:cursor-pointer">About</li>
          </Link>
        </ul>
      </nav>
      <main>
        <div className="flex items-center justify-around mt-10">
          <p className="text-2xl">
            A Blog for Hunting Coders by a Hunting Coder
          </p>

          <p className="font-bold text-[16px]">by Mohammed Sajid</p>
        </div>

        <div className="blogs mt-16 font-semibold">
          <h1 className="text-3xl text-center">Popular Blogs</h1>
          <div className="blogItem">
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is used to design logic for the Web</p>
          </div>
          <div className="blogItem">
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is used to design logic for the Web</p>
          </div>
          <div className="blogItem">
            <h1>How to learn JavaScript in 2022?</h1>
            <p>JavaScript is used to design logic for the Web</p>
          </div>
        </div>
      </main>
    </>
  );
}
