import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const links = [
    ["/", "Home"], ["/about", "About Us"], ["/treatments", "Treatments"],
    ["/faqs", "FAQs"], ["/contact", "Contact"]
  ];
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">S</span>
          <span>Sakthi Dental Clinic</span>
        </Link>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={close} className={({isActive}) => isActive ? "active" : ""}>{label}</NavLink>
          ))}
          <Link className="nav-cta" to="/contact" onClick={close}>Fix an Appointment</Link>
        </nav>
      </div>
    </header>
  );
}