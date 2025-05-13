import './contact.css';
import Sparkles from './sparkles';

export default function Contact() {
  return (
    <>
      <div className="con-main">
        <Sparkles />
        <form className="contact-form">
          <h1 className="contact-title">Contact Us</h1>
          
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
