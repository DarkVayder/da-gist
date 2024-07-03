'use client'
import GistList from "@/Components/GistList";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Image from "next/image";

export default function Home() {
  return (

    <>
      <Header />
      <GistList />
      <Footer />
    </>

      );
}
