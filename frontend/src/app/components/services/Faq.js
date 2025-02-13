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
      question: "How does Digital Paaji ensure results for its clients?",
      answer:
        "To assess companies, the market, and the competition, create customized marketing plans, and track the success of campaigns, Digital Paaji employs a data-driven methodology. We work together closely, stay transparent, and get input to improve your campaign goals. Our objective is to provide long-term corporate growth and a high return on investment.",
    },
    {
      question: "What industries does Digital Paaji serve?",
      answer:
        "For a range of sectors, including technology, retail, healthcare, hospitality, and education, Digital Paaji provides customised digital marketing strategies. To provide local eateries and tech startups with specialised solutions, we carry out in-depth research to comprehend target consumers and market dynamics. Our proficiency connects with audiences and produces quantifiable outcomes.",
    },
    {
      question: "What can I expect in terms of timeline and deliverables?",
      answer:
        "Beginning with the first consultation and discovery phase, Digital Paaji provides a defined project timeline and deliverables. Depending on the services, we offer a personalised digital marketing plan with different execution schedules. To guarantee a cooperative and open partnership that produces positive outcomes, regular updates and reports are given throughout the project.",
    },
    {
      question: "Can Digital Paaji help with branding and messaging?",
      answer:
        "Effective branding and message are the main goals of Digital Paaji's marketing strategy. Together with our clients, we develop distinctive value propositions, communications tactics, and brand voices. We offer branding services like identity development, logo design, and storytelling.",
    },
    {
      question: "What is the cost of Digital Paaji’s services?",
      answer:
        "Taking into account the project's scale, complexity, and period of participation, Digital Paaji provides bespoke packages that are suited to each client's requirements and objectives. We guarantee openness and achieve significant benefits without any additional costs by offering a customised proposal based on the budget and goals.",
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
