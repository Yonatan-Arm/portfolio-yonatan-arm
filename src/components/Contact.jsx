import React, {  useRef, useState } from "react";
import headPhonesImg from "../assets/imgs/headphones.svg";
import contactImg from "../assets/imgs/contact.png";
import sendImg from "../assets/imgs/send.svg";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [sendMessage, setSendMessage] = useState(false)
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_qzxap0r",
        "template_wt0f4ng",
        form.current,
        "nAg_NofuvJfYHzrFz"
      )
      .then(
        (result) => {
          setSendMessage(true)
          setTimeout(() => {
            setSendMessage(false)
          }, 10000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="Contact">
      <h2 className="flex align-center justify-center">
        <img src={headPhonesImg} alt="headPhones-img" />
        Get In <span>Touch </span>
      </h2>
      <div className="content-box flex">
        <div className="img-box">
          <img src={contactImg} alt="img-box" />
        </div>
        {sendMessage ? (
        <div className="flex column justify-center message"> 
        <h2>Thank you!</h2>
        <p>Your email has been sent. I'll get back to you shortly. </p> 
        </div>
        )
         : (
             <form ref={form} onSubmit={sendEmail}>
             <div className="flex column justify-center">
               <div className="filed">
                 <input type="text" name="user_name" placeholder="Name" />
               </div>
               <div className="filed">
                 <input type="email" name="user_email" placeholder="Enter email"/>
             </div>
               <div className="filed">
                 <textarea name="message"  placeholder="Your message" />
             </div>
             </div>
             <div className="btn-box">
             <button> Submit
               <img src={sendImg} alt="send-img" />
             </button>
             </div>
           </form>
        )}
     
      </div>
    </section>
  );
}
