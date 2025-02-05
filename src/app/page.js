"use client";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import ParticleBackground from "./components/ParticleBackround";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Daniel Imran</title>
      </Head>
      <div className="scroll-smooth relative">
        <ParticleBackground />
        <Navbar />
        <Sections />
      </div>
    </>
  );
}
