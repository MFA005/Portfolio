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
    <div
      ref={refContact}
      className={`snap-start flex flex-col justify-center items-center gap-8 md:gap-12 xl:flex-row xl:gap-20 bg-radial-gradient-b from-purple-600/60 via-transparent to-transparent w-full min-h-screen transition-opacity duration-1500 px-4 md:px-0 ${
        isVisibleContact ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* form column */}
      <div className="flex flex-col justify-center items-start mt-6 md:mt-16 w-full max-w-xl">
        <span className="pb-3 mb-2 pl-2 md:pl-7 pt-6 tracking-wide md:tracking-widest font-ShareTech font-bold text-3xl md:text-4xl text-white">
          Get in touch
        </span>
        <hr className="w-[100px] h-[4px] mb-3 rounded-lg bg-white ml-2 md:ml-7 border-2" />
        <form className="flex flex-col p-2 md:p-6 w-full" ref={form} onSubmit={sendEmail}>
          <input
            className="p-3 pl-4 font-bold font-ShareTech tracking-wide bg-black/40 border-2 border-white/20 text-white my-3 w-full max-w-md rounded-full text-sm md:text-base"
            placeholder="Your Name"
            type="text"
            name="user_name"
            required
          />
          <input
            className="p-3 pl-4 font-bold font-ShareTech tracking-wide bg-black/40 border-2 border-white/20 text-white my-3 w-full max-w-md rounded-full text-sm md:text-base"
            placeholder="Your Email"
            type="email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-4 pl-4 font-bold font-ShareTech tracking-wide bg-black/40 border-2 border-white/20 text-white my-3 w-full max-w-md rounded-2xl rounded-br-none text-sm md:text-base h-40 md:h-48"
            name="message"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 mt-3 font-bold font-ShareTech tracking-wide bg-gradient-to-br from-purple-600/50 to-purple-600/30 hover:to-purple-600/50 text-white transition-all duration-300 w-full md:w-32 rounded-full"
          >
            Send
          </button>
        </form>
      </div>

      {/* contact info column */}
      <div className="flex flex-col mt-8 md:mt-20 md:ml-8 w-full max-w-sm border-2 rounded-lg border-white/20 bg-black/40 mb-12 p-4 md:p-6">
        <div className="flex mb-6 items-center">
          <img className="w-12 md:w-14" src={Message} alt="msg icon" />
          <span className="text-base md:text-xl pl-4 font-ShareTech tracking-wide text-white break-words">
            mfahmed005@gmail.com
          </span>
        </div>
        <div className="flex mb-6 items-center">
          <img className="w-12 md:w-14" src={Pin} alt="location icon" />
          <span className="text-base md:text-xl pl-4 font-ShareTech tracking-wide text-white">Kitchener, Ontario</span>
        </div>
        <div className="flex items-center">
          <img className="w-12 md:w-14" src={Phone} alt="phone icon" />
          <span className="text-base md:text-xl pl-4 font-ShareTech tracking-wide text-white">(416) 881-5667</span>
        </div>
      </div>

      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-purple-700 font-ShareTech xl:font-bold xl:tracking-widest xl:text-xl text-white text-center rounded-lg p-4 md:p-6 shadow-lg max-w-xs w-full">
            Email Sent!
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
