"use client";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";
import ParticleBackground from "./components/ParticleBackround";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Daniel Imran</title>
      </Head>
      <div className="scroll-smooth relative">
        <Analytics />
        <ParticleBackground />
        <Navbar />
        <Sections />
      </div>
    </>
  );
}
