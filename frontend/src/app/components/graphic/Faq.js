import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaWhatsapp } from "react-icons/fa";

function Faq() {
    const [showIcon,setShowIcon] = useState(false)
  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState({});
const handleShowIcon = ()=>{
    setShowIcon(!showIcon)
}
  const contentRefs = useRef([]);

  useEffect(() => {
    // Measure the height of each FAQ answer
    const measuredHeights = contentRefs.current.map(
      (ref) => ref?.scrollHeight || 0
    );
    setHeights(measuredHeights);
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do you ensure that the designs align with my brand?",
      answer:
        "Using consulting, market research, and preliminary thoughts, Digital Paaji places a high priority on matching designs to your brand. To ensure that designs meet and beyond your expectations and are genuinely indicative of the brand, we welcome feedback and teamwork in the refinement process.",
    },
    {
      question: "Can you help with rebranding?",
      answer:
        "For a seamless transition that will keep your current clientele and draw in new ones, Digital Paaji provides a full rebranding service that includes evaluating your current brand identity, pinpointing opportunities for development, coming up with fresh design concepts, and establishing brand standards.",
    },
    {
      question: "How does the design process work at Digital Paaji?",
      answer:
        "Research, concept creation, and feedback are all part of Digital Paaji's methodical and cooperative design process, which begins with an initial consultation. To ensure a high-quality design, files are prepared for print and digital use during the finalisation stage.",
    },
    {
      question: "Can you help with print production as well?",
      answer:
        "Print production services are provided by Digital Paaji, guaranteeing premium materials for branding and marketing. Along with selecting materials and checking proofs for accuracy, we collaborate with reputable printing providers. Creating beautiful and useful materials is their aim.",
    },
    {
      question: "What is the cost of your graphic design services?",
      answer:
        "Competitive graphic design services catered to individual projects and levels of complexity are provided by Digital Paaji. We guarantee premium designs that raise the value of brands by offering clear pricing and a variety of packages to suit demands and budgets.",
    },
  ];

  return (
    <div className="flex flex-col items-stretch gap-12 mx-8 md:mx-12 xl:mx-60">
      {/* Header Section */}
      <div className="text-center border-b-2 border-black py-6">
        <h3 className="bungeeHead text-[#cc5f4d] text-[30px] xl:text-[40px]">
          Any Questions?
        </h3>
        <h3 className="h-20  w-fit mx-auto flex items-center justify-center gap-2 merriHead text-black text-xl xl:text-2xl mt-6" onMouseLeave={handleShowIcon}>
          We are Just a {"  "}

          {showIcon ? (
              <Link
              href="https://wa.me/8699640752"
              target="_blank"
              rel="noopener noreferrer"
              className=" w-16 h-16 text-green-600 transition-transform duration-500"
            >
             <img src="/Images/services/whIcon.gif" alt="" className="flip w-full h-auto object-cover"/>
            </Link>
          ):(
            <span className=" text-[#cc5f4d] underline " onMouseEnter={handleShowIcon}>Click</span>

          )}

           {" "}Away
        </h3>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question Section */}
            <button
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center w-full py-4 text-left font-medium"
            >
              <span className="bungeeHead text-[#006E7F] text-md ">{faq.question}</span>
              {openIndex === index ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </button>
            {/* Answer Section */}
            {/* <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: openIndex === index ? `${heights[index]}px` : "0",
                opacity: openIndex === index ? 1 : 0,
              }}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              <div className="servicePara text-gray-700 text-base mt-2">
                {faq.answer}
              </div>
            </div> */}
            <div
  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
    openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
  }`}
  ref={(el) => (contentRefs.current[index] = el)}
>
  <div className="servicePara text-gray-700 text-sm mt-2">
    {faq.answer}
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
