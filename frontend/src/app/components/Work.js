import React from "react";

function Work() {
  return (
    <div className="text-center">
      <h3 className="bungeeHead my-16 text-[#cc5f4d]  text-[30px] xl:text-[50px]">
        OUR WORK
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 mx-20 md:mx-24 xl:mx-44  " >
        <div className=" relative group border border-black overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          {/* Image with Overlay */}
          <div className="relative m-4">
            <img
              src="/Images/work/2.webp"
              alt="Creative Creatives"
              className="w-full h-full object-cover"
            />

            {/* Overlay on Image */}
            <div className="absolute inset-0  bg-black bg-opacity-0  h-0 group-hover:h-full group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-500 ">
              <p className="bungeeHead p-2 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Creative Creatives
              </p>
            </div>
          </div>
        </div>

        <div className="relative group border border-black overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
          {/* Image with Overlay */}
          <div className="relative m-4">
            <img
              src="/Images/work/1.gif"
              alt="Viral Reels"
              className="w-full h-full object-cover"
            />

            {/* Overlay on Image */}
            <div className="absolute inset-0 bg-black bg-opacity-0  h-0 group-hover:h-full group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-500 ">
              <p className="bungeeHead p-2 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                VIRAL REELS
              </p>
            </div>
          </div>
        </div>
        <div className="relative group border border-black overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          {/* Image with Overlay */}
          <div className="relative m-4">
            <img
              src="/Images/work/3.webp"
              alt="Viral Reels"
              className="w-full h-full object-cover"
            />

            {/* Overlay on Image */}
            <div className="absolute inset-0 bg-black bg-opacity-0  h-0 group-hover:h-full group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-500 ">
              <p className="bungeeHead p-2 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              RESULTS
              </p>
            </div>
          </div>
        </div>
        <div className="relative group border border-black overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          {/* Image with Overlay */}
          <div className="relative m-4">
            <img
              src="/Images/work/4.gif"
              alt="Performing Videos"
              className="w-full h-full object-cover"
            />

            {/* Overlay on Image */}
            <div className="absolute inset-0 bg-black bg-opacity-0  h-0 group-hover:h-full group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-500 ">
              <p className="bungeeHead p-2 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                PERFORMING VIDEOS
              </p>
            </div>
          </div>
        </div>
        <div className="relative group border border-black overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
          {/* Image with Overlay */}
          <div className="relative m-4">
            <img
              src="/Images/work/5.webp"
              alt="Performing Posts"
              className="w-full h-full object-cover"
            />

            {/* Overlay on Image */}
            <div className="absolute inset-0 bg-black bg-opacity-0  h-0 group-hover:h-full group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-500 ">
              <p className="bungeeHead p-2 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                PERFORMING POSTS
              </p>
            </div>
          </div>
        </div>
        <div className="relative group border border-black overflow-hidden transform -rotate-6 hover:rotate-0 transition-transform duration-500">
          {/* Image with Overlay */}
          <div className="relative m-4">
            <img
              src="/Images/work/6.webp"
              alt="SATISFIED CLIENTS"
              className="w-full h-full object-cover"
            />

            {/* Overlay on Image */}
            <div className="absolute inset-0 bg-black bg-opacity-0  h-0 group-hover:h-full group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-500 ">
              <p className="bungeeHead p-2 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                SATISFIED CLIENTS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
