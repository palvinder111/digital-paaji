"use client";

import { useEffect, useState } from "react";
import { useTitle } from "react-use";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import Link from "next/link";
import { IoChatbubbleEllipses } from "react-icons/io5";

export default function RootLayout({ children }) {
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const titles = [
    "DigitalPaaji - No.1 Digital Marketing Design Development Agency",
    "Please come back!",
    "I am feeling lonely :-(",
    "Don't you love me anymore?",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  useTitle(titles[titleIndex]); // Set initial title

  useEffect(() => {
    // Simulate loading time
    const loadingTimeout = setTimeout(() => setIsLoading(false), 0); // Set loading to false after 1 second

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPageVisible(false);
        setTitleIndex(1);
        updateFavicon("/Images/smile.png");
      } else {
        setIsPageVisible(true);
        setTitleIndex(0);
        updateFavicon("/Images/favicon.png");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (!isPageVisible) {
      const interval = setInterval(() => {
        setTitleIndex((prevIndex) =>
          prevIndex >= titles.length - 1 ? 1 : prevIndex + 1
        );
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isPageVisible]);

  const updateFavicon = (href) => {
    const existingLink = document.querySelector("link[rel='icon']");
    if (existingLink) {
      existingLink.href = href;
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = href;
      document.head.appendChild(newLink);
    }
  };

  useEffect(() => {
    updateFavicon("/Images/favicon.png");
  }, []);

  return (
    <html lang="en">
      <body>
        {isLoading ? (
          // Show loading GIF
          <div className="flex items-center justify-center h-screen ">
            <img
              src="/Images/Preloader.gif"
              alt="Loading..."
              className=""
            />
          </div>
        ) : (
          // Show actual content after loading
          <>
            <div className="mb-[100px] xl:mb-[150px]">
              <Navbar />
            </div>
            {children}
            <Footer />
               {/* Floating Contact Icon */}
               <Link
              href="https://wa.me/8699640752"
              className="fixed  bottom-4 right-4 bg-blue-500 animate-pulse text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition duration-300"
            >
              <IoChatbubbleEllipses  size={24} className=""/>
            </Link>
          </>
        )}
      </body>
    </html>
  );
}









// "use client";

// import { useEffect, useState } from "react";
// import { useTitle } from "react-use";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   const [isPageVisible, setIsPageVisible] = useState(true);

//   // Dynamic titles
//   const titles = [
//     "DigitalPaaji - No.1 Digital Marketing",
//     "Please come back!",
//     "I am feeling lonely :-(",
//     "Don't you love me anymore?",
//   ];
//   const [titleIndex, setTitleIndex] = useState(0);

//   useTitle(titles[titleIndex]); // Set initial title

//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         // User has left the page
//         setIsPageVisible(false);
//         setTitleIndex(1); // Change to "Please come back!"
//         updateFavicon("/Images/smile.png"); // Set alternate favicon
//       } else {
//         // User has returned
//         setIsPageVisible(true);
//         setTitleIndex(0); // Change to default title
//         updateFavicon("/Images/logo.webp"); // Set default favicon
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isPageVisible) {
//       let interval = setInterval(() => {
//         setTitleIndex((prevIndex) =>
//           prevIndex >= titles.length - 1 ? 1 : prevIndex + 1
//         );
//       }, 2000); // Rotate titles every 2 seconds when the page is hidden
//       return () => clearInterval(interval);
//     }
//   }, [isPageVisible]);

//   const updateFavicon = (href) => {
//     const existingLink = document.querySelector("link[rel='icon']");
//     if (existingLink) {
//       existingLink.href = href; // Update existing favicon
//     } else {
//       const newLink = document.createElement("link");
//       newLink.rel = "icon";
//       newLink.href = href;
//       document.head.appendChild(newLink); // Add new favicon
//     }
//   };

//   // Initial favicon setup
//   useEffect(() => {
//     updateFavicon("/Images/logo.webp");
//   }, []);

//   return (
//     <html lang="en">
//       <body>
//         <div className=" mb-[100px] xl:mb-[150px]">
//         <Navbar />
//         </div>
//         {children}
//         <Footer />
//       </body>
//     </html>
//   );
// }
