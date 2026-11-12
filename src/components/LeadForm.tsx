'use client';
import { useState } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("در حال ارسال...");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form)),
      });
      const data = await res.json();
      setStatus(data.message || "درخواست آزمایشی ثبت شد.");
      e.currentTarget.reset();
    } catch {
      setStatus("ارتباط برقرار نشد. دوباره تلاش کنید.");
    }
  }
  return (
    <form className="lead-form" onSubmit={submit}>
      <label>نام کسب‌وکار<input name="businessName" required placeholder="نام مجموعه" /></label>
      <label>شماره تماس<input name="phone" required inputMode="tel" placeholder="شماره تماس عمومی" /></label>
      <label>شهر / منطقه<input name="area" required placeholder="مثلاً تهران، سعادت‌آباد" /></label>
      <button className="primary-button" type="submit">ارسال درخواست</button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
