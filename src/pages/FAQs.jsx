import React from "react";
import SectionTitle from "../components/SectionTitle";
import FAQItem from "../components/FAQItem";
import { faqs } from "../data/content";

export default function FAQs() {
  return <>
    <section className="page-hero"><div className="container"><span className="eyebrow">FAQs</span><h1>Frequently Asked Questions</h1></div></section>
    <section className="section"><div className="container faq-list">{faqs.map(([q,a])=><FAQItem key={q} question={q} answer={a}/>)}</div></section>
  </>;
}