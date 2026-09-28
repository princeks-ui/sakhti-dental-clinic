import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Sakthi Dental Clinic</h3>
          <p>Specialized Dental Care for Women, Children & Families</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/treatments">Treatments</Link><Link to="/privacy-policy">Privacy Policy</Link>
        </div>
        <div>
          <h4>Key Treatments</h4>
          <span>Tooth Extraction</span><span>Tooth Filling</span><span>Teeth Cleaning & Scaling</span><span>Orthodontic Braces</span>
        </div>
        <div>
          <h4>Contact</h4>
          <p><MapPin size={16}/>{contact.address}</p>
          <p><Mail size={16}/>{contact.email}</p>
          <p><Phone size={16}/>{contact.phones}</p>
          <div className="socials"><span><Instagram/></span><span><Facebook/></span><span><Youtube/></span></div>
        </div>
      </div>
      <div className="footer-bottom">© Sakthi Dental Clinic</div>
    </footer>
  );
}