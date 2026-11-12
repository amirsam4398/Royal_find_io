import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false, message: "درخواست نامعتبر است." }, { status: 400 });
    }
    const businessName = String(body.businessName || "").trim();
    const phone = String(body.phone || "").trim();
    const area = String(body.area || "").trim();
    if (!businessName || !phone || !area) {
      return NextResponse.json({ success: false, message: "لطفاً همه‌ی فیلدها را کامل کنید." }, { status: 400 });
    }
    if (businessName.length > 120 || phone.length > 20 || area.length > 100) {
      return NextResponse.json({ success: false, message: "طول فیلدها بیش از حد مجاز است." }, { status: 400 });
    }
    console.log("MVP lead received:", { businessName, phone, area, at: new Date().toISOString() });
    return NextResponse.json({ success: true, message: "درخواست آزمایشی دریافت شد؛ هنوز در دیتابیس ذخیره نمی‌شود." });
  } catch {
    return NextResponse.json({ success: false, message: "خطای سرور. لطفاً دوباره تلاش کنید." }, { status: 500 });
  }
}
