"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { TbStarFilled } from "react-icons/tb";

function Testimonials() {
  // State for reviews and ratings
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(4.8);
  const [totalReviews, setTotalReviews] = useState(17);

  // Comment out the useEffect that fetches reviews from the API
  // useEffect(() => {
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/reviews/");
  //       const data = await response.json();
  //       if (Array.isArray(data)) {
  //         setReviews(data);
  //         const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
  //         const totalReviewsCount = data.length;
  //         setAverageRating((totalRating / totalReviewsCount).toFixed(1)); // Average with 1 decimal
  //         setTotalReviews(totalReviewsCount);
  //       } else {
  //         console.error("Invalid data format:", data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching reviews:", error);
  //     }
  //   };
  //   fetchReviews();
  // }, []);

  // Dummy data for reviews (replacing the fetched data)
  const dummyReviews = [
    {
      author_name: "Sunny Sharma",
      relative_time_description: "2 weeks ago",
      rating: 5,
      text: "I felt very comfortable with Digital Paaji team and their thought leadership in the industry. They seemed honest, direct and didn't try to upsell services. Higher Visibility did exactly what we asked for and did it quickly. Friendly environment. Highly impressed with their work and communication level. Best of luck!",
    },
    {
      author_name: "Prashant Kumar",
      relative_time_description: "1 month ago",
      rating: 4,
      text: "I've had the pleasure of working with Digital Paaji for one incredible year. The team's expertise, passion, and dedication to delivering top-notch digital marketing solutions are truly impressive. I'm grateful for the opportunities I've had while working at Digital Paaji and I highly recommend them to anyone seeking a reliable, results-driven digital marketing partner. Five stars, without a doubt!",
    },
    {
      author_name: "Lakhvinder Singh",
      relative_time_description: "3 months ago",
      rating: 5,
      text: "I recently visited Digital Paaji office in Patiala, and I had an excellent experience. The team is highly professional and knowledgeable, offering insightful digital marketing solutions. The office itself is modern and well-organized, providing a creative and productive environment. Their expertise in digital strategies is truly impressive. Highly recommend Digital Paaji for anyone looking to boost their online presence!",
    },
    {
      author_name: "Raman Nagpal",
      relative_time_description: "3 weeks ago",
      rating: 5,
      text: "I have been with Rishi for a long time. All I can say is that he is a dedicated person, communicative, prompt and makes every attempt to provide solutions at a reasonable cost. Fully reliable. I highly recommend his services.",
    },
    {
      author_name: "Parminder Singh",
      relative_time_description: "1 week ago",
      rating: 5,
      text: "Good experience with the team in digital marketing, maintained by well-experienced man Rishiraj Singh. Best of luck to the Digital Paaji team.",
    },
    {
      author_name: "Kamal Dhiman",
      relative_time_description: "5 days ago",
      rating: 5,
      text: "I have a very good experience with the Digital Paaji team. They also provide digital marketing classes. Must visit!",
    },
    {
      author_name: "Karanbir Singh",
      relative_time_description: "4 months ago",
      rating: 5,
      text: "Very good service, highly recommended.",
    },
];


  // Set the dummy data as reviews
  useEffect(() => {
    setReviews(dummyReviews);
    setTotalReviews(dummyReviews.length);
    const totalRating = dummyReviews.reduce((sum, review) => sum + review.rating, 0);
    setAverageRating((totalRating / dummyReviews.length).toFixed(1));
  }, []);

  return (
    <div className="flex justify-center gap-8 items-center flex-wrap-reverse xl:flex-nowrap mx-4 xl:mx-20">
      {/* Left Section */}
      <div className="py-10 px-2 w-full xl:w-1/2 bg-cover bg-center rounded-lg relative">
        <div className="mx-auto w-[300px] h-auto">
          <img
            src="/Images/logo2.webp"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-2 py-8">
          <div className="servicePara text-sm text-gray-700">
            {averageRating}
          </div>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <p
                className={`${
                  i < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"
                }`}
                key={i}
              >
                <TbStarFilled />
              </p>
            ))}
          </div>
          <div className="text-sm text-gray-700">{totalReviews} Google Reviews</div>
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay]}
          className="custom-swiper"
        >
          {/* Render Reviews from Dummy Data */}
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="flex flex-col items-start justify-center border border-white p-6 rounded-lg w-[90%] xl:w-[80%] mx-auto">
                  <p className="servicePara mt-4 text-black text-sm xl:text-base text-justify">
                    {review.text}
                  </p>

                  {/* Customer Image & Name */}
                  <div className="flex items-center gap-2 md:gap-0 justify-between flex-wrap border-t border-white mt-6 w-full p-2">
                    <div className="flex items-center gap-8 md:gap-4 justify-between md:justify-start mt-2">
                      <p
                        alt="Customer"
                        className="rounded-full bg-purple-700 text-white text-lg font-bold px-4 py-2 object-cover"
                      >
                        {review.author_name.charAt(0)}
                      </p>
                      <div>
                        <h3 className="merriHead text-sm md:text-md text-gray-500">
                          {review.author_name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {review.relative_time_description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mx-auto md:mx-0">
                      {[...Array(review.rating)].map((_, i) => (
                        <p className="text-yellow-500" key={i}>
                          <TbStarFilled />
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-center text-gray-500 py-6">
              No reviews available at the moment.
            </div>
          )}
        </Swiper>
      </div>

      {/* Right Section */}
      <div className="w-full xl:w-1/2 xl:ml-16">
        <img src="/Images/addOn/tetimonial.webp" alt="" className="mx-auto" />
      </div>
    </div>
  );
}

export default Testimonials;



// "use client";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import { TbStarFilled } from "react-icons/tb";

// function Testimonials() {
//   // State for reviews and ratings
//   const [reviews, setReviews] = useState([]);
//   const [averageRating, setAverageRating] = useState(4.8);
//   const [totalReviews, setTotalReviews] = useState(17);

//   // Fetch reviews from API
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/reviews/");
//         const data = await response.json();

//         if (Array.isArray(data)) {
//           setReviews(data);

//           // Calculate total rating and average rating
//           const totalRating = data.reduce((sum, review) => sum + review.rating, 0);
//           const totalReviewsCount = data.length;

//           // setAverageRating((totalRating / totalReviewsCount).toFixed(1)); // Average with 1 decimal
//           // setTotalReviews(totalReviewsCount);
//         } else {
//           console.error("Invalid data format:", data);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };

//     fetchReviews();
//   }, []);

//   return (
//     <div className="flex justify-center gap-8 items-center flex-wrap-reverse xl:flex-nowrap mx-4 xl:mx-20">
//       {/* Left Section */}
//       <div className="py-10 px-2 w-full xl:w-1/2 bg-cover bg-center rounded-lg relative">
//         <div className="mx-auto w-[300px] h-auto">
//           <img
//             src="/Images/logo2.webp"
//             alt=""
//             className="w-full h-auto object-cover"
//           />
//         </div>
//         <div className="flex items-center justify-center gap-2 py-8">
//           <div className="servicePara text-sm text-gray-700">
//             {averageRating}

//           </div>
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <p
//                 className={`${
//                   i < Math.round(averageRating) ? "text-yellow-500" : "text-gray-300"
//                 }`}
//                 key={i}
//               >
//                 <TbStarFilled />
//               </p>
//             ))}
//           </div>
//           <div className="text-sm text-gray-700">{totalReviews} Google Reviews</div>
//         </div>

//         {/* Swiper Component */}
//         <Swiper
//           spaceBetween={30}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           pagination={{ clickable: true }}
//           navigation={true}
//           modules={[Autoplay]}
//           className="custom-swiper"
//         >
//           {/* Render Reviews from API */}
//           {reviews.length > 0 ? (
//             reviews.map((review, index) => (
//               <SwiperSlide key={index} className="w-full">
//                 <div className="flex flex-col items-start justify-center border border-white p-6 rounded-lg w-[90%] xl:w-[80%] mx-auto">
//                   <p className="servicePara mt-4 text-black text-sm xl:text-base text-justify">
//                     {review.text}
//                   </p>

//                   {/* Customer Image & Name */}
//                   <div className="flex items-center gap-2 md:gap-0 justify-between flex-wrap border-t border-white mt-6 w-full p-2">
//                     <div className="flex items-center gap-8 md:gap-4 justify-between md:justify-start mt-2">
//                       <p
//                         alt="Customer"
//                         className="rounded-full bg-purple-700 text-white text-lg font-bold px-4 py-2 object-cover"
//                       >
//                         {review.author_name.charAt(0)}
//                       </p>
//                       <div>
//                         <h3 className="merriHead text-sm md:text-md text-gray-500">
//                           {review.author_name}
//                         </h3>
//                         <p className="text-xs text-gray-400">
//                           {review.relative_time_description}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-center mx-auto md:mx-0">
//                       {[...Array(review.rating)].map((_, i) => (
//                         <p className="text-yellow-500" key={i}>
//                           <TbStarFilled />
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))
//           ) : (
//             <div className="text-center text-gray-500 py-6">
//               No reviews available at the moment.
//             </div>
//           )}
//         </Swiper>
//       </div>

//       {/* Right Section */}
//       <div className="w-full xl:w-1/2 xl:ml-16">
//         <img src="/Images/addOn/tetimonial.webp" alt="" className="mx-auto" />
//       </div>
//     </div>
//   );
// }

// export default Testimonials;
