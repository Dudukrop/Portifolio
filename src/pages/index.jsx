import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Home from "@/components/Home";
import About from "@/components/About";
import { useScroll, useTransform } from "framer-motion";
import Skills from "@/components/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function index() {

  return (
    <main>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Header />
      <Home />
      <About />
      <Skills />
    </main>
  );
}
