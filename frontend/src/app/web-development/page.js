'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from "../components/web/Header";
import GetInTouch from '../components/services/GetInTouch'
import Services from '../components/web/Services'
import Benefits from '../components/web/Benefits'
import Technologies from '../components/web/Technologies'
import Choose from '../components/web/Choose'

import Select from '../components/web/Select'
import Faq from '../components/web/Faq'



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
  }, []);

  return (
    <main>
        <Header/>
   <div className="my-24">
        <Services />
      </div>
      <div className="my-24">
        <Benefits />
      </div>
      <div className="mt-24">
        <Select />
      </div>
      <div className="mb-24">
        <Choose />
      </div>
      <div className="my-24">
        <Technologies />
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
