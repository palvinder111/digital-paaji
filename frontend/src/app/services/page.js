'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/Header";
import GetInTouch from '../components/services/GetInTouch'
import Content from '../components/services/Content'
import Faq from '../components/services/Faq'



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header title="Welcome to Digital Paaji" content="Your Gateway to Online Success"/>
        <div className="my-24">
        <Content />
      </div>
        <div className="my-24">
        <GetInTouch />
      </div>
      <div className="my-24">
        <Faq />
      </div>
    </main>
  );
}
