import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, UserRound, HeartHandshake, Cpu, Car, Accessibility, Clock3, MapPin } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import TreatmentCard from "../components/TreatmentCard";
import { treatments, testimonials } from "../data/content";

export default function Home() {
  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Sakthi Dental Clinic • Hosur</span>
          <h1>Specialized Dental Care for Women, Children & Families</h1>
          <p>Experience compassionate, expert-led dental services tailored to your needs, all in a modern and welcoming environment.</p>
          <Link className="primary-btn" to="/contact">Fix an Appointment</Link>
        </div>
        <div className="hero-image"><img src="/images/hero.jpg" alt="Sakthi Dental Clinic" /></div>
      </div>
    </section>

    <section className="assurance"><div className="container"><ShieldCheck/><strong>You are always in safe hands. We are ready to help, anytime.</strong></div></section>

    <section className="section"><div className="container">
      <SectionTitle title="Why Choose Sakthi Dental Clinic?" text="At Sakthi Dental Clinic, we focus on comfort, care, modern treatment practices, and personalized dental care." />
      <div className="feature-grid">
        {[
          [ShieldCheck,"All-in-One Care","From general dentistry to specialized treatments, everything under one roof."],
          [UserRound,"Experienced Doctors","Our dentists are professionally trained and committed to personalized patient care."],
          [HeartHandshake,"Patient-Centric Approach","We prioritize comfort, safety, and transparency in every treatment we offer."],
          [Cpu,"Technology-Driven Services","Modern tools and equipment ensure precision and safety."]
        ].map(([Icon,t,p])=><div className="feature-card" key={t}><Icon/><h3>{t}</h3><p>{p}</p></div>)}
      </div>
    </div></section>

    <section className="section soft"><div className="container">
      <SectionTitle title="Explore Our Services" />
      <div className="treatment-grid home-treatments">{treatments.slice(0,6).map((x)=><TreatmentCard key={x.name} item={x}/>)}</div>
      <div className="center"><Link className="secondary-btn" to="/treatments">View Full List of Treatments</Link></div>
    </div></section>

    <section className="section"><div className="container">
      <SectionTitle title="What Our Patients Say" />
      <div className="testimonial-grid">{testimonials.map(([quote,name])=><article className="testimonial" key={name}><div className="stars">★★★★★</div><p>{quote}</p><strong>- {name}</strong></article>)}</div>
    </div></section>

    <section className="section soft"><div className="container">
      <SectionTitle title="Clinic Facilities" />
      <div className="amenity-grid">
        <div><MapPin/><span>Convenient central location</span></div>
        <div><Car/><span>Hassle-free parking</span></div>
        <div><Clock3/><span>Doctors available daily (9 AM - 9 PM)</span></div>
        <div><Car/><span>Pickup & drop-off support</span></div>
        <div><Accessibility/><span>Wheelchair access</span></div>
      </div>
    </div></section>
  </>;
}