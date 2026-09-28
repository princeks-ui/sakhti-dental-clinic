import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { doctors } from "../data/content";

export default function About() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">About Us</span><h1>Get to Know Dr. Anupriya</h1><p>Your Trusted Partner in Dental Care</p></div></section>
    <section className="section"><div className="container about-copy">
      <p>Bringing over 20 years of expertise, Dr. Anupriya stands as a leading figure in modern dentistry at Hosur. She began her professional journey after graduating in 2000. Her passion for delivering exceptional dental care was further nurtured during six impactful years at Mathura Clinic, where she refined her clinical skills and deepened her commitment to patient wellbeing.</p>
      <p>In 2004, Dr. Anupriya established Sakthi Dental Clinic in Hosur with a clear vision to make high-quality dental care accessible to all. Her dedication extends beyond private practice, reflected in her long-standing service with the Primary Health Center at Chandara Hospital, where she has been a trusted dental consultant for over a decade.</p>
      <p>At Sakthi Dental Clinic, we believe that a healthy smile is a gateway to confidence and wellbeing. Our clinic blends advanced dental technology with a warm, patient-friendly environment to ensure every visit is comfortable and stress-free. From routine check-ups to specialized treatments, we prioritize personalized care tailored to your unique dental needs.</p>
      <p>Whether you're looking for preventive care, cosmetic enhancements, or restorative solutions, Dr. Anupriya and her team are committed to delivering excellence at every step. Because here, your smile isn’t just treated it’s celebrated.</p>
    </div></section>
    <section className="section soft"><div className="container">
      <div className="mission-grid">
        <div><SectionTitle title="Our Vision & Mission"/><p>At Sakthi Dental Clinic, our mission is to redefine oral healthcare by delivering personalized, compassionate, and advanced dental services. We are committed to creating a welcoming environment where patients feel comfortable and confident in taking charge of their dental health. By integrating state-of-the-art technology with patient-centric care, we ensure that every treatment enhances not only your smile but also your overall well-being. Continuous learning and innovation drive us to provide comprehensive solutions, from preventive care to complex dental procedures, all designed to promote long-lasting oral health.</p></div>
        <div><p>Our vision is to be a leading force in modern dentistry, known for setting new standards in patient care, innovation, and community engagement. At Sakthi Dental Clinic, we believe that building trust, encouraging preventive practices, and fostering a culture of excellence are key to making a lasting impact. We aspire to not only deliver exceptional dental outcomes but also to contribute positively to the community through awareness initiatives and outreach programs. With a focus on holistic care and a passion for brightening lives, we are dedicated to ensuring that every smile we treat reflects confidence, health, and happiness.</p></div>
      </div>
    </div></section>
    <section className="section"><div className="container"><SectionTitle title="Our team of doctors:"/><div className="doctor-grid">{doctors.map(([name,role])=><article className="doctor-card" key={name}><div className="doctor-avatar">{name.replace("Dr. ","").split(" ").map(x=>x[0]).slice(0,2).join("")}</div><h3>{name}</h3><p>{role}</p></article>)}</div><div className="center"><Link className="primary-btn" to="/contact">Fix an Appointment</Link></div></div></section>
  </>;
}