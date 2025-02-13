'use client';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from "../components/Header";
import KhetKiMuli from '../components/about/Story'
import Offer from '../components/about/AboutOffer'
import SocialMedia from '../components/about/SocialMedia'
import History from '../components/about/History';



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false}); // Initialize AOS with desired settings
  }, []);
  return (
    <main>
        <Header title="About Us"/>
        <div className='mb-24'>
          <History/>
        </div>
        <div className='my-24'>
          <KhetKiMuli/>
        </div>
        <div className='my-24'>
          <Offer/>
        </div>
        <div className='my-24'>
          <SocialMedia/>
        </div>
    </main>
  );
}
