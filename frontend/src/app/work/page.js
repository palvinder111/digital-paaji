"use client";
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/Header";
import Work from "../components/Work";
import Cards from "../components/work/cards";
import Zigzag from "../components/BannerBottom";

export default function About() {
    useEffect(() => {
      AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
    }, []);
  
  return (
    <main>
      <Header
        title="Our WORK"
        content="2 Gallan Kariye Vypaar Dia – Let’s Talk Business"
      />

      <div className="my-24">
        <Work />
      </div>
      <div className="my-24">
        <Zigzag />
      </div>
      <div className="my-24">
        <Cards />
      </div>
    </main>
  );
}
