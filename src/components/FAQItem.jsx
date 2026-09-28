import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
export default function FAQItem({question, answer}) {
  const [open,setOpen]=useState(false);
  return <div className="faq-item"><button onClick={()=>setOpen(!open)}><span>{question}</span>{open?<Minus/>:<Plus/>}</button>{open&&<div className="faq-answer"><p>{answer}</p></div>}</div>;
}