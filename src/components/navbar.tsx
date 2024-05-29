const navItems = [
  ["الصفحة الرئيسية", "/"],
  ["خدمات", "/"],
  ["المشاريع", "/"],
  ["أسئلة مكررة", "/"],
  ["مقالات", "/"],
  ["اتصال بنا", "/"],
];

export default function Navbar() {
  return (
    <header className="hero-img">
      <div>
        <h1 className="text-7xl sm:text-8xl font-bold border-b-2 pb-4 mb-3">غرفة المعيشة</h1>
        <p className="text-xl">تصميم حديث وبسيط</p>
      </div>
      <nav className="container py-6 flex items-center justify-between">
        <a href="/">
          <img src={"/assets/images/logo.png"} alt="logo" width={80} height={80} />
        </a>
        <ul className="hidden sm:flex gap-11 text-secondary font-semibold">
          {navItems.map(([title, url], index) => (
            <li key={index}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
