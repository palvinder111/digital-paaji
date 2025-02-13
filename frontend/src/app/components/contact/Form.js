'use client';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validation function
  const validate = () => {
    const tempErrors = {};

    if (!formData.fname) tempErrors.fname = 'First name is required';
    if (!formData.lname) tempErrors.lname = 'Last name is required';
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    else if (!/^\+?\d{10,15}$/.test(formData.phone))
      tempErrors.phone = 'Phone number must be valid (e.g., +1234567890)';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = 'Email is invalid';
    if (!formData.message) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://digital-paaji.onrender.com/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success(data.message || 'Your message has been sent successfully!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          fname: '',
          lname: '',
          phone: '',
          email: '',
          message: '',
        }); // Reset form
      } else {
        toast.error(data.error || 'Something went wrong!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send your message. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-4 md:mx-12 xl:mx-60">
      <ToastContainer style={{ zIndex: 999999999 }} />
      <h3 className="bungeeHead mb-10 text-[30px] text-[#cc5f4d] xl:text-[40px]">
        Let’s get in touch
      </h3>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">FIRST NAME *</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
        </div>
        {/* Last Name */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">LAST NAME *</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
        </div>
        {/* Phone */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">YOUR PHONE *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 2929 29xxx"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        {/* Email */}
        <div>
          <label className="bungeeHead block lg:text-lg mb-2">YOUR EMAIL *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="youremail@domain.com"
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        {/* Message */}
        <div className="md:col-span-2">
          <label className="bungeeHead block lg:text-lg mb-2">MESSAGE *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            rows={4}
            className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        {/* Submit Button */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`merriHead flex items-center justify-center gap-2 w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 rounded-md transition duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send message'}</span>
            <img
              src="/Images/addOn/ContactIcon.webp"
              className="w-4 h-4"
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
}










// 'use client';
// export default function ContactForm() {
//   return (
//     <div className="mx-4 md:mx-12 xl:mx-60">
//          <h3 className="bungeeHead mb-10  text-[30px] text-[#cc5f4d] xl:text-[40px]">
//          Let’s get in touch
//           </h3>
   
//     <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
//       {/* First Name */}
//       <div>
//         <label className="bungeeHead block lg:text-lg  mb-2">FIRST NAME *</label>
//         <input
//           type="text"
//           placeholder="Enter your first name"
//           className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
//         />
//       </div>
//       {/* Last Name */}
//       <div>
//         <label className="bungeeHead block lg:text-lg  mb-2">LAST NAME *</label>
//         <input
//           type="text"
//           placeholder="Enter your last name"
//           className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
//         />
//       </div>
//       {/* Phone */}
//       <div>
//         <label className="bungeeHead block lg:text-lg  mb-2">YOUR PHONE *</label>
//         <input
//           type="tel"
//           placeholder="+91 2929 29xxx"
//           className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
//         />
//       </div>
//       {/* Email */}
//       <div>
//         <label className="bungeeHead block lg:text-lg  mb-2">YOUR EMAIL *</label>
//         <input
//           type="email"
//           placeholder="youremail@domain.com"
//           className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
//         />
//       </div>
//       {/* Message */}
//       <div className="md:col-span-2">
//         <label className="bungeeHead block lg:text-lg  mb-2">MESSAGE *</label>
//         <textarea
//           placeholder="Enter Message"
//           rows={4}
//           className="bg-[#ede7db] w-full border px-4 py-2 focus:outline-none border-black"
//         ></textarea>
//       </div>
//       {/* Submit Button */}
//       <div className="md:col-span-2">
//         <button
//           type="submit"
//           className="flex items-center justify-center gap-2 w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-md transition duration-300"
//         >
//           <span>
//           Send message 
//           </span>
// <img src="/Images/addOn/ContactIcon.webp" className="w-2 h-2" alt="" />          
//         </button>
//       </div>
//     </form>
//     </div>
//   );
// }
