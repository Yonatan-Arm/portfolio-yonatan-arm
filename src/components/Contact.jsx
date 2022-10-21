import React, { useEffect } from "react";
import headPhonesImg from "../assets/imgs/headphones.svg";
import contactImg from "../assets/imgs/contact.png";
import sendImg from "../assets/imgs/send.svg";
import { useForm } from "../hooks/useForm";

export default function Contact() {
  const [user, handleChange, setUser] = useForm(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    const user = { name: "", email: "", message: "" };
    setUser(user);
  };
  const sendMsg = (ev) => {
    ev.preventDefault();
    var name = user.name;
    var email = user.email;
    var msgBody = user.message;
    var emailUrl = `https://mail.google.com/mail/u/0/?fs=1&to=yoniarm123@gmail.com&su=${name}&body=${msgBody}&tf=cm`;
    window.open(emailUrl);
    loadUser();
  };
  if (!user) return <div>Loading...</div>;
  return (
    <section className="contact-section">
      <h2 className="flex align-center justify-center">
        <img src={headPhonesImg} alt="headPhones-img" />
        Get In <span>Touch </span>
      </h2>
      <div className="content-box flex">
        <div className="img-box">
          <img src={contactImg} alt="img-box" />
        </div>
        <form onSubmit={(e) => { sendMsg(e); }} >
          <div className="flex column justify-center">
            <div className="filed">
              <input
                placeholder="Name"
                onChange={handleChange}
                value={user.name}
                type="text"
                name="name"
              />
            </div>
            <div className="filed">
              <input
                placeholder="Enter email"
                onChange={handleChange}
                value={user.email}
                type="text"
                name="email"
              />
            </div>
            <div className="filed">
              <textarea
                placeholder="Your message"
                onChange={handleChange}
                value={user.message}
                type="text"
                name="message"
              />
            </div>
          </div>
          <div className="btn-box">
            <button> Submit 
                 <img src={sendImg} alt="send-img" />
                 </button>
          </div>
        </form>
      </div>
    </section>
  );
}
