import Link from "next/link";
import React from "react";

function Header({ title, content, button }) {
  return (
    <div className="relative">
      <div
        className=" w-full"
        style={{ backgroundImage: "url(/Images/services/bg.webp)" }}
      >
        <div className=" text-center py-20 lg:py-32 mx-4">
          <h3 className="bungeeHead text-3xl md:text-3xl lg:text-5xl text-white ">
            {title}
          </h3>
          <h5 className="merriHead mt-3 md:mt-6 text-white mx-6 text-center md:mx-16 xl:mx-52 text-sm ">
            {content}
          </h5>
          <div className=" mt-8">
            <Link href="tel:+918699640752" className="px-6 py-4 border rounded-xl border-black bg-[#f8cb2e] hover:bg-[#cc5f4d] text-black font-medium text-lg ">
              {button}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 -bottom-1 w-[100%] h-[15%] lg:h-[33%] ">
        <img
          src="/Images/services/wavy.png"
          alt=""
          className="w-full h-[100%] object-cover"
        />
      </div>
    </div>
  );
}

export default Header;
