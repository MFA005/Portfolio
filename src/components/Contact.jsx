import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useIsVisible } from "../data";
import { Phone, Message, Pin } from "../data/image";


const Contact = () => {
  const form = useRef();

  const [isPopupVisible, setPopupVisible] = useState(false);

  const refContact = useRef(null);
    const isVisibleContact = useIsVisible(refContact);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3d34b7k", "template_2d5ot08", form.current, {
        publicKey: "h9_SNegLtgMpCtzip",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          setPopupVisible(true);
          setTimeout(() => setPopupVisible(false), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div ref={refContact} className={`snap-start flex flex-col justify-center items-center xl:flex-row xl:gap-52 bg-radial-gradient-b from-purple-600/60 via-transparent to-transparent mx-auto min-h-screen transition-opacity duration-1500 ${
        isVisibleContact ? "opacity-100" : "opacity-0"
      }`}>
      <div className="flex flex-col justify-center items-start mt-15 m-16">
        <span className="pb-5 mb-2 pl-7 pt-20 tracking-widest font-ShareTech font-bold text-4xl text-white">
          Get in touch
        </span>
        <hr className="w-[120px] h-[5px] mb-3 rounded-lg bg-white ml-7 border-2" />
        <form className="flex flex-col p-6" ref={form} onSubmit={sendEmail}>
          <input
            className="p-3 pl-5 font-bold font-ShareTech tracking-widest bg-black/40 border-2 border-white/20 text-white my-5 w-96 rounded-full"
            placeholder="Your Name"
            type="text"
            name="user_name"
            required
          />
          <input
            className="p-3 pl-5 font-bold font-ShareTech tracking-widest bg-black/40 border-2 border-white/20 text-white my-5 w-96 rounded-full"
            placeholder="Your Email"
            type="email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-5 pl-5 font-bold font-ShareTech tracking-widest bg-black/40 border-2 border-white/20 text-white my-5 w-96 rounded-2xl rounded-br-none"
            name="message"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 mt-3 font-bold font-ShareTech tracking-widest bg-gradient-to-br from-purple-600/50 to-purple-600/30 hover:purple-red-600/70 hover:to-purple-600/50 text-white transition-all duration-300 w-28 rounded-full"

          >
            Send
          </button>
        </form>
      </div>
      <div className=" flex flex-col mt-28 md:mt-40 mr-0 border-2 rounded-lg border-white/20 bg-black/40 mb-20 p-5 xl:mr-36">
      <div className="flex mb-10 ">
        <img className="w-14" src={Message} alt="" />
        <span className="text-xl pt-3 pl-5 font-ShareTech tracking-widest text-white">mfahmed005@gmail.com</span>
      </div>
      <div className="flex mb-10">
        <img className="w-14" src={Pin} alt="" />
        <span className="text-xl pt-3 pl-5 font-ShareTech tracking-widest text-white">Kitchener, Ontario</span>
      </div>
      <div className="flex mb-0">
        <img className="w-14" src={Phone} alt="" />
        <span className="text-xl pt-3 pl-5 font-ShareTech tracking-widest text-white">(416) 881-5667</span>
      </div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          
          <div className="bg-purple-700 font-ShareTech xl:font-bold xl:tracking-widest xl:text-xl text-white text-center rounded-lg p-6 xl:p-9 shadow-lg">
            Email Sent! 
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
