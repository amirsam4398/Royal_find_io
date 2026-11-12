import SearchExperience from "@/components/SearchExperience";
import LeadForm from "@/components/LeadForm";

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="/">ROYAL <span>FIND AI</span></a>
        <nav>
          <a href="#categories">دسته‌بندی‌ها</a>
          <a href="#businesses">کسب‌وکارها</a>
          <a href="#register">ثبت کسب‌وکار</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">کشف هوشمند خدمات محلی</p>
          <h1>هر خدمتی،<br /><span>نزدیک‌تر از همیشه</span></h1>
          <p className="intro">کسب‌وکارها و متخصصان اطراف خودت را پیدا کن؛ ساده، سریع و هدفمند.</p>
        </div>
        <SearchExperience />
      </section>

      <section id="categories" className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">جستجو بر اساس نیاز</p>
            <h2>دسته‌بندی‌های محبوب</h2>
          </div>
        </div>
        <div className="category-grid">
          {["زیبایی و مراقبت","تعمیرات و خدمات منزل","رستوران و کافه","خودرو","آموزش و مهارت","فروشگاه‌ها"].map((c,i)=>(
            <a className="category" href="#businesses" key={c}>
              <span>{["✦","⌂","◈","◇","▤","▣"][i]}</span>{c}
            </a>
          ))}
        </div>
      </section>

      <section id="businesses" className="section muted">
        <p className="eyebrow">نمونه‌ی نسخه‌ی اولیه</p>
        <h2>کسب‌وکارهای پیشنهادی</h2>
        <p className="note">موارد زیر داده‌ی آزمایشی هستند و هنوز از منبع زنده تأیید نشده‌اند.</p>
        <div className="business-grid">
          {[
            ["استودیو زیبایی نمونه","زیبایی و مراقبت","تهران، سعادت‌آباد","★ ۴.۸"],
            ["تعمیرات نمونه","تعمیرات و خدمات منزل","تهران، صادقیه","★ ۴.۶"],
            ["کافه نمونه","رستوران و کافه","تهران، شهرک غرب","★ ۴.۷"]
          ].map((b)=>(
            <article className="business-card" key={b[0]}>
              <div className="business-art">RF</div>
              <div className="business-content">
                <span className="tag">{b[1]}</span>
                <h3>{b[0]}</h3>
                <p>{b[2]}</p>
                <div className="business-bottom">
                  <span>{b[3]}</span>
                  <a href="#register">درخواست اطلاعات</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="register" className="section register-section">
        <div>
          <p className="eyebrow">ویژه‌ی صاحبان کسب‌وکار</p>
          <h2>کسب‌وکارت را معرفی کن</h2>
          <p>در نسخه‌ی MVP، مسیر ثبت اولیه‌ی درخواست را آزمایش می‌کنیم. ثبت نهایی و انتشار پس از بررسی اطلاعات انجام خواهد شد.</p>
        </div>
        <LeadForm />
      </section>

      <div className="legal-warning">
        <strong>⚠ هشدار حقوقی</strong>
        <p>هرگونه کپی‌برداری، تقلید از ایده، طراحی، محتوا یا فکر معنوی مالک این سایت، پیگرد قضایی و قانونی دارد.</p>
      </div>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>ROYAL FIND AI</strong>
          <p>محصولی تحت انحصار <b>استارتاپ رویال فام</b><br />اولین استارتاپ وای‌کودینگ (AI Coding) در ایران</p>
        </div>
        <div className="footer-contact">
          <p><span>تلفن تماس:</span> <a href="tel:+989366891963" dir="ltr">۰۹۳۶ ۶۸ ۹۱ ۹۶۳</a></p>
          <p><span>ایمیل پشتیبانی:</span> <a href="mailto:amisam.yaghoubi62@gmail.com" dir="ltr">amisam.yaghoubi62@gmail.com</a></p>
        </div>
        <div className="footer-copy">
          <small>© {new Date().getFullYear()} Royal Fam — تمامی حقوق مادی و معنوی محفوظ است.</small>
        </div>
      </footer>
    </main>
  );
}
