import React from "react";
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function Why() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch  mx-4 md:mx-12 xl:mx-72">
         {/* Map Section */}
      <div className=" w-[60%] mx-auto lg:w-1/2">
        <img
          src="/Images/navGif/GD.gif"
          alt=""
          className="zoom "
        />
      </div>
      {/* Contact Section */}
      <div className="w-full lg:w-1/2 px-6 py-12 md:px-8  lg:px-12 bg-[#cc5f4d] flex flex-col justify-start">
        <h3 className="bungeeHead text-3xl text-white  ">
        Graphic Designing Services
        </h3>
        <p className="servicePara text-sm text-white my-4">
        Offering a variety of graphic design services, Digital Paaji specialises in creating visual narratives that represent a company’s identity and core principles. Their talented designers are committed to producing engaging, captivating material that successfully conveys your company message, guaranteeing firms a strong online presence.
        </p>
        <div className="">
          <Link href="tel:+918699640752" className="zoom px-6 py-4 border rounded-xl border-white text-white font-medium text-lg underline " style={{width:'fit-content'}} >
            Call Us
          </Link>
        </div>
      </div>
     
    </div>
  );
}

export default Why;
