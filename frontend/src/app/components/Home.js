'use client';
import Banner from "./Banner";
import BannerBottom from "./BannerBottom";
import Services from "./Services";
import KhetKiMuli from "./KhetKiMuli";
import AddOn from "./AddOn";
import Growth from "./Growth";
import Offer from "./Offer";
import Testimonials from "./Testimonials";
import Reviews from "./Reviews";
import Vypaar from './Vypaar';
import Work from "./Work";



export default function Home() {

  return (
    <div>
      <Banner/>
 
      <div className="mb-24" >
      <BannerBottom />
    </div>
    <div className="my-24" data-aos="fade-up">
      <Services />
    </div>
    <div className="my-24" data-aos="fade-up">
      <KhetKiMuli />
    </div>
    {/* <div className="my-24" data-aos="fade-up">
      <AddOn />
    </div> */}
     <div className="my-24" data-aos="fade-up">
      <Offer />
    </div>
    <div className="my-24" >
      <Growth />
    </div>
   
    {/* <div className="my-24" data-aos="flip-down">
      <Testimonials />
    </div> */}
    <div className="my-24" data-aos="zoom-in-out">
      <Reviews />
    </div>
    <div className="my-24" data-aos="fade-up">
      <Work />
    </div>
    <div className="my-24" data-aos="fade-down">
      <Vypaar />
    </div>
    
  </div>
  );
}
