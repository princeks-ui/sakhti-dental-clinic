import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock3 } from "lucide-react";
import { contact } from "../data/content";

export default function Contact() {
  const [sent,setSent]=useState(false);
  const submit=(e)=>{e.preventDefault();setSent(true)};
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Contact Us</span><h1>We would love to hear from you</h1></div></section>
    <section className="section"><div className="container contact-grid">
      <form className="contact-form" onSubmit={submit}>
        <h2>We would love to hear from you</h2>
        <label>Name<input required type="text" name="name"/></label>
        <label>Email<input required type="email" name="email"/></label>
        <label>Phone Number<input required type="text" name="phone"/></label>
        <label>Your Message<textarea name="message" rows="6"></textarea></label>
        <button className="primary-btn" type="submit">Submit</button>
        {sent && <p className="form-note">Submitted.</p>}
      </form>
      <div className="reach">
        <h2>Reach us</h2>
        <div className="contact-item"><MapPin/><div><strong>Address</strong><p>{contact.address}</p></div></div>
        <div className="contact-item"><Mail/><div><strong>Email</strong><p>{contact.email}</p></div></div>
        <div className="contact-item"><Phone/><div><strong>Phone</strong><p>{contact.phones}</p></div></div>
        <div className="contact-item"><Clock3/><div><strong>Timings</strong><p><b>{contact.timings}</b></p></div></div>
      </div>
    </div></section>
  </>;
}