import "./Contact.css";
import {
  MapPin,
  Phone,
  Mail,
  Send
} from "lucide-react";

function Contact() {
  return (
    <div className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us 🌿</h1>
        <p>We’d love to hear from you. Get in touch with HerbAyur.</p>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <h2>Get In Touch</h2>
          <p>Connecting Sri Lankan herbal suppliers and buyers with trust.</p>

          <div className="contact-item">
            <MapPin size={18}/>
            <span>Malabe, Sri Lanka</span>
          </div>

          <div className="contact-item">
            <Phone size={18}/>
            <span>+94 78 3730 114</span>
          </div>

          <div className="contact-item">
            <Mail size={18}/>
            <span>support@herbayur.lk</span>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">

          <h2>Send Message</h2>

          <div className="contact-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" required />
          </div>

          <div className="contact-group">
            <label>Email</label>
            <input type="email" placeholder="Your Email" required />
          </div>

          <div className="contact-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Write your message..." required />
          </div>

          <button className="contact-btn">
            <Send size={16}/> Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;