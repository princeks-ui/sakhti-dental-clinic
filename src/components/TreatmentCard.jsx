import React from "react";
import { ArrowUpRight } from "lucide-react";
export default function TreatmentCard({item}) {
  return (
    <article className="treatment-card">
      <div className="treatment-image"><img src={item.image} alt={item.name} onError={(e)=>{e.currentTarget.style.display="none"}} /></div>
      <div className="card-body"><h3>{item.name}</h3><p>{item.short}</p><ArrowUpRight className="card-arrow" size={20}/></div>
    </article>
  );
}