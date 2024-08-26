import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Hero from "@/components/Sections/Hero";
import Usps from "@/components/Sections/Usps";
import Carousel from "@/components/Sections/Carousel";

export default function Home() {
  return (
    <main>
      <div className="bg-backgound relative z-10">
        <Hero/>
        <Usps/>
      </div>
      <Carousel/>
    </main>
  );
}
