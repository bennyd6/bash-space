import './contact.css';
import Sparkles from './sparkles';
import React, { useState } from "react";
export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsLoading(true);
    setIsSubmitted(false);

    const formData = new FormData(event.target);
    formData.append("access_key", "9368c00e-3540-441c-9c04-fcce5b674635");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thanks for your message!");
        setIsSubmitted(true);
        setIsLoading(false);
        event.target.reset();
      } else {
        setResult(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="con-main" id='contact'>
        <Sparkles />
        <form className="contact-form" onSubmit={onSubmit}>
          <h1 className="contact-title">Contact Us</h1>
          
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
          {!isSubmitted?(
          <button type="submit">Send</button>):(<button>Sent Successfully!! Send Again?</button>)}
        </form>
      </div>
    </>
  );
}
