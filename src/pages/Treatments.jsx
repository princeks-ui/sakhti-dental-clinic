import React from "react";
import SectionTitle from "../components/SectionTitle";
import { treatments } from "../data/content";

export default function Treatments() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">Treatments</span><h1>Our Dental Treatments</h1></div></section>
    <section className="section"><div className="container"><div className="treatment-detail-list">
      {treatments.map((t,i)=><article className="treatment-detail" key={t.name}><div className="detail-image"><img src={t.image} alt={t.name} onError={(e)=>{e.currentTarget.style.display="none"}} /></div><div><span className="treatment-number">{String(i+1).padStart(2,"0")}</span><h2>{t.name}</h2><p>{t.description}</p></div></article>)}
    </div></div></section>
  </>;
}