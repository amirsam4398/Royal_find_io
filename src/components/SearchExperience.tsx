'use client';
import { useMemo, useState } from "react";
import { businesses } from "@/data/businesses";

export default function SearchExperience() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("همه");
  const [radius, setRadius] = useState("5");
  const categories = ["همه", "زیبایی و مراقبت", "تعمیرات و خدمات منزل", "رستوران و کافه", "خودرو"];
  const results = useMemo(() => businesses.filter((b) =>
    (category === "همه" || b.category === category) &&
    (`${b.name} ${b.category} ${b.area} ${b.services.join(" ")}`).includes(query.trim())
  ), [query, category]);

  return (
    <div className="search-panel">
      <div className="search-title">
        <span className="pulse"></span>
        <strong>چی لازم داری؟</strong>
        <small>جستجوی آزمایشی در داده‌های نمونه</small>
      </div>
      <label className="field-label" htmlFor="search">نام خدمت یا کسب‌وکار</label>
      <input id="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="مثلاً سالن زیبایی، تعمیرکار..." />
      <div className="filters">
        <div>
          <label className="field-label" htmlFor="category">دسته‌بندی</label>
          <select id="category" value={category} onChange={e=>setCategory(e.target.value)}>
            {categories.map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="radius">شعاع جستجو</label>
          <select id="radius" value={radius} onChange={e=>setRadius(e.target.value)}>
            <option value="1">۱ کیلومتر</option>
            <option value="3">۳ کیلومتر</option>
            <option value="5">۵ کیلومتر</option>
            <option value="10">۱۰ کیلومتر</option>
          </select>
        </div>
      </div>
      <button className="primary-button" onClick={()=>document.getElementById("search-results")?.scrollIntoView({behavior:"smooth"})}>
        جستجوی کسب‌وکارها <span>←</span>
      </button>
      <div id="search-results" className="search-results">
        <div className="results-heading">
          <b>{results.length} نتیجه‌ی نمونه</b>
          <span>شعاع انتخابی: {radius} کیلومتر</span>
        </div>
        {results.map(b=>(
          <div className="mini-result" key={b.id}>
            <span className="mini-icon">✦</span>
            <div><b>{b.name}</b><small>{b.category} · {b.area}</small></div>
          </div>
        ))}
        {results.length===0 && <p className="note">نتیجه‌ای در داده‌های آزمایشی پیدا نشد.</p>}
      </div>
      <p className="disclaimer">موقعیت‌یابی واقعی و فاصله‌ی جغرافیایی هنوز متصل نشده است.</p>
    </div>
  );
}
