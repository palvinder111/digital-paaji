'use client';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import "./globals.css";

import Home from "./components/Home";




export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <main>
      <Home/>
  </main>
  );
}
