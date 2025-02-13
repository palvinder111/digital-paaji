"use client";
import React, { useState } from "react";
import Link from "next/link";

function Services() {
  const [show, setShow] = useState("5");

  const handleMouseEnter = (elem) => setShow(elem);
  const handleMouseLeave = () => setShow(null);
  return (
    <div className="mx-12 lg:mx-24 xl:mx-60 ">
      <div className="text-center">
        <h3 className="merriHead text-[#302f2f] text-xl xl:text-2xl">
          Welcome to Digital Paaji - We mind your Business
        </h3>
        <p className="servicePara text-[#757474] mt-4 text-sm xl:text-[16px] ">
          One of the top agencies with more than 15 years of expertise in
          digital marketing is Digital Paaji. For expansion and success, we
          think all companies should have access to the best marketing
          techniques. Web development, graphic design, SEO, video production,
          social media management, and digital marketing are all included in our
          extensive service offering. Utilising state-of-the-art marketing
          automation tools and professional insights, we successfully acquire
          and convert qualified prospects. For the purpose of optimising return
          on investment, our experts follow a data-driven strategy.
        </p>
      </div>
      <div className=" text-center">
        <h3 className="bungeeHead my-12 text-[#cc5f4d]  text-[30px] xl:text-[40px]">
          OUR SERVICES
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">DIGITAL MARKETING</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              <div className="mx-auto  w-[14rem] h-40">
                <Link
                  href={"/digital-marketing"}
                  onMouseEnter={() => handleMouseEnter("1")}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  <li
                    className={`heading text-[11px] font-bungee-inline text-center ${
                      show === "1" ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src="/Images/DM.webp"
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </li>
                  <div
                    className={` relative ${show === "1" ? "block" : "hidden"}`}
                  >
                    <img
                      src="/Images/navGif/DM.gif"
                      alt="1"
                      className={`w-full h-auto object-cover ${
                        show === "1" ? "block" : "hidden"
                      }`}
                    />
                    <img
                      src="/Images/services/hand.gif"
                      alt="1"
                      className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover ${
                        show === "1" ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">
                SOCIAL MEDIA MARKETING
              </h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              <div className="mx-auto  w-[14rem] h-40">
                <Link
                  href={"/social-media-marketing"}
                  onMouseEnter={() => handleMouseEnter("2")}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  <li
                    className={`heading text-[11px] font-bungee-inline text-center ${
                      show === "2" ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src="/Images/1.webp"
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </li>
                  <div
                    className={` relative ${show === "2" ? "block" : "hidden"}`}
                  >
                    <img
                      src="/Images/navGif/SMM.gif"
                      alt="2"
                      className={`w-full h-auto object-cover ${
                        show === "2" ? "block" : "hidden"
                      }`}
                    />
                    <img
                      src="/Images/services/hand.gif"
                      alt="2"
                      className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover${
                        show === "2" ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">GRAPHIC DESIGNING</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              <div className="mx-auto  w-[14rem] h-40">
                <Link
                  href={"/graphic-designing"}
                  onMouseEnter={() => handleMouseEnter("3")}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  <li
                    className={`heading text-[11px] font-bungee-inline text-center ${
                      show === "3" ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src="/Images/GD.webp"
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </li>
                  <div
                    className={` relative ${show === "3" ? "block" : "hidden"}`}
                  >
                    <img
                      src="/Images/navGif/GD.gif"
                      alt="3"
                      className={`w-full h-auto object-cover ${
                        show === "3" ? "block" : "hidden"
                      }`}
                    />
                    <img
                      src="/Images/services/hand.gif"
                      alt="3"
                      className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover${
                        show === "3" ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d] ">SEO</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              <div className="mx-auto  w-[14rem] h-40">
                <Link
                  href={"/search-engine-optimization"}
                  onMouseEnter={() => handleMouseEnter("4")}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  <li
                    className={`heading text-[11px] font-bungee-inline text-center ${
                      show === "4" ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src="/Images/SEO.webp"
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </li>
                  <div
                    className={` relative ${show === "4" ? "block" : "hidden"}`}
                  >
                    <img
                      src="/Images/navGif/SEO.gif"
                      alt="4"
                      className={`w-full h-auto object-cover ${
                        show === "4" ? "block" : "hidden"
                      }`}
                    />
                    <img
                      src="/Images/services/hand.gif"
                      alt="4"
                      className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover${
                        show === "4" ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">VIDEO PRODUCTION</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              <div className="mx-auto  w-[14rem] h-40">
                <Link
                  href={"/video-production"}
                  onMouseEnter={() => handleMouseEnter("5")}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  <li
                    className={`heading text-[11px] font-bungee-inline text-center ${
                      show === "5" ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src="/Images/VE.webp"
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </li>
                  <div
                    className={` relative ${show === "5" ? "block" : "hidden"}`}
                  >
                    <img
                      src="/Images/navGif/VP.gif"
                      alt="5"
                      className={`w-full h-auto object-cover ${
                        show === "5" ? "block" : "hidden"
                      }`}
                    />
                    <img
                      src="/Images/services/hand.gif"
                      alt="5"
                      className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover ${
                        show === "5" ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="border border-black " data-aos="zoom-in">
            <div className="border-b border-black">
              <h3 className="services p-4 text-[#2e2d2d]">WEB DEVELOPMENT</h3>
            </div>
            <div className="flex overflow-hidden h-[260px]">
              <div className="mx-auto  w-[14rem] h-40">
                <Link
                  href={"/digital-marketing"}
                  onMouseEnter={() => handleMouseEnter("6")}
                  onMouseLeave={handleMouseLeave}
                  className=""
                >
                  <li
                    className={`heading text-[11px] font-bungee-inline text-center ${
                      show === "6" ? "hidden" : "block"
                    }`}
                  >
                    <img
                      src="/Images/WD.webp"
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </li>
                  <div
                    className={` relative ${show === "6" ? "block" : "hidden"}`}
                  >
                    <img
                      src="/Images/navGif/WD.gif"
                      alt="6"
                      className={`w-full h-auto object-cover ${
                        show === "6" ? "block" : "hidden"
                      }`}
                    />
                    <img
                      src="/Images/services/hand.gif"
                      alt="6"
                      className={`absolute bottom-2 -right-9 md:-right-16 lg:-right-12 w-16 h-16 object-cover ${
                        show === "6" ? "block" : "hidden"
                      }`}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="tel:+918699640752"
            className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg "
          >
            Call Us Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
