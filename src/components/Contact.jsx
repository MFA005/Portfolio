import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useIsVisible } from "../data";


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
    <div ref={refContact} className={`snap-start flex flex-col justify-around items-center xl:flex-row xl:gap-52 bg-radial-gradient-b from-accent/40 via-transparent to-transparent mx-auto min-h-screen transition-opacity duration-1500 ${
        isVisibleContact ? "opacity-100" : "opacity-0"
      }`}>
      <div className="flex flex-col justify-center items-start mt-15 m-16">
        <span className="pb-5 mb-2 pl-7 pt-20 tracking-widest font-ShareTech font-bold text-4xl text-white">
          Get in touch
        </span>
        <hr className="w-[120px] h-[5px] mb-3 rounded-lg bg-white ml-7 border-2" />
        <form className="flex flex-col p-6" ref={form} onSubmit={sendEmail}>
          <input
            className="p-3 pl-5 font-ShareTech tracking-widest bg-black/20 border-2 border-white/20 text-white my-5 w-96 rounded-full"
            placeholder="Your Name"
            type="text"
            name="user_name"
            required
          />
          <input
            className="p-3 pl-5 font-ShareTech tracking-widest bg-black/20 border-2 border-white/20 text-white my-5 w-96 rounded-full"
            placeholder="Your Email"
            type="email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-5 pl-5 font-ShareTech tracking-widest bg-black/20 border-2 border-white/20 text-white my-5 w-96 rounded-2xl rounded-br-none"
            name="message"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 mt-3 font-ShareTech tracking-widest bg-gradient-to-br from-accent/50 to-accent/30 hover:from-accent/70 hover:to-accent/50 text-white w-28 rounded-full"

          >
            Send
          </button>
        </form>
      </div>
      <div className=" flex flex-col mt-32 mr-20 xl:mr-36">
      <div className="flex mb-10">
        <img className="w-14" src="src/assets/Message_alt_fill.svg" alt="" />
        <span className="text-xl pt-3 pl-5 font-ShareTech tracking-widest text-white">mfahmed005@gmail.com</span>
      </div>
      <div className="flex mb-10">
        <img className="w-14" src="src/assets/Pin_fill.svg" alt="" />
        <span className="text-xl pt-3 pl-5 font-ShareTech tracking-widest text-white">Kitchener, Ontario</span>
      </div>
      <div className="flex mb-10">
        <img className="w-14" src="src/assets/Phone_fill.svg" alt="" />
        <span className="text-xl pt-3 pl-5 font-ShareTech tracking-widest text-white">(416) 881-5667</span>
      </div>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          
          <div className="bg-primary font-ShareTech xl:font-bold xl:tracking-widest xl:text-xl text-white text-center rounded-lg p-6 xl:p-9 shadow-lg">
            Email Sent! 
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
