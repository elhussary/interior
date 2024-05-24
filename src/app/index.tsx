import logo from "/assets/images/logo.png";

export default function Index() {
  return (
    <>
      <header id="hero-img">
        <nav className="py-8 flex items-center justify-between container">
          <a href="/">
            <img src={logo} alt="logo" width={100} height={100} />
          </a>
          <ul className="flex gap-10 text-white font-semibold text-sm flex-wrap">
            <li>
              <a href="/">الصفحة الرئيسية</a>
            </li>
            <li>
              <a href="/">خدمات</a>
            </li>
            <li>
              <a href="/">المشاريع</a>
            </li>
            <li>
              <a href="/">أسئلة مكررة</a>
            </li>
            <li>
              <a href="/">مقالات</a>
            </li>
            <li>
              <a href="/">اتصال بنا</a>
            </li>
          </ul>
        </nav>

        <div id="hero-text">
          <h1 className="text-8xl font-bold border-b-2 p-6">غرفة المعيشة</h1>
          <p className="text-xl mt-2">تصميم حديث وبسيط</p>
        </div>
      </header>

      <section className="container py-20 flex flex-wrap">
        <div className="bg-black text-white p-12 w-80 flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 bg-yellow-400 text-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <h2 className="text-2xl">تصميم داخلي</h2>
        </div>
        <div className="bg-yellow-300 p-12 w-80 flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 bg-yellow-400 text-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <h2 className="text-2xl">تصميم داخلي</h2>
        </div>
        <div className="bg-yellow-400 p-12 w-80 flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 bg-yellow-300 text-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <h2 className="text-2xl">تصميم داخلي</h2>
        </div>
        <div className="bg-yellow-300 p-12 w-80 flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 bg-yellow-400 text-black"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <h2 className="text-2xl">تصميم داخلي</h2>
        </div>
      </section>

      <section className="container py-20 flex">
        <div>
          <h1 className="text-4xl">معلومات عنا</h1>
          <p className=" text-balance text-foreground py-8">
            التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين يستخدمون
            المساحة. المصمم الداخلي هو الشخص الذي يخطط ويبحث وينسق ويدير مثل هذه المشاريع. التصميم الداخلي هو مهنة
            متعددة الأوجه تشمل التطوير المفاهيمي ، وتخطيط المساحات ، والتفتيش على الموقع ، والبرمجة ، والبحث ، والتواصل
            مع أصحاب المصلحة في المشروع ، وإدارة البناء ، وتنفيذ التصميم.
          </p>
          <a href="/" className="bg-black text-white py-2.5 px-8">
            اقرأ أكثر
          </a>
        </div>
        <h2 className="text-7xl">12 سنوات</h2>
      </section>

      <section className="bg-black text-white py-20">
        <div className="container">
          <h1 className="text-4xl font-semibold">أعمالنا</h1>

          <div className="grid grid-cols-2 gap-10 py-12">
            <div>
              <img src="/assets/images/img5-1.jpg" alt="" />
              <div className="grid grid-cols-3 gap-4 pt-6">
                <img src="/assets/images/img4-1.jpg" alt="" />
                <img src="/assets/images/img8-1.jpg" alt="" />
                <img src="/assets/images/img7-1.jpg" alt="" />
              </div>
            </div>

            <div className="">
              <div className="grid grid-cols-3 gap-4 pb-6">
                <img src="/assets/images/img6-1.jpg" alt="" />
                <img src="/assets/images/img3-1.jpg" alt="" />
                <img src="/assets/images/img1-1.jpg" alt="" />
              </div>
              <img src="/assets/images/img2-1.jpg" alt="" className="" />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-20 grid grid-cols-2 gap-24">
        <div className="relative">
          <div className="img-dots"></div>
          <img src="/assets/images/img7-1.jpg" alt="" />
        </div>

        <div className="py-10">
          <h2 className="text-4xl font-semibold">غرف نوم رائعة</h2>
          <p className="pt-8 pb-10 text-slate-500">
            المصمم الداخلي هو الشخص الذي يخطط ويبحث وينسق ويدير مثل هذه المشاريع. التصميم الداخلي هو مهنة متعددة الأوجه
            تشمل التطوير المفاهيمي ، وتخطيط المساحات ، والتفتيش على الموقع ، والبرمجة ، والبحث ، والتواصل مع أصحاب
            المصلحة في المشروع ، وإدارة البناء ، وتنفيذ التصميم.
          </p>
          <a href="/" className="bg-black text-white py-2.5 px-8">
            اقرأ أكثر
          </a>
        </div>
      </section>

      <section className="container py-20 grid grid-cols-2 gap-24">
        <div>
          <h2 className="text-4xl font-semibold">مطابخ حديثة</h2>
          <p className="pt-8 pb-10 text-slate-500">
            التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين يستخدمون
            المساحة. المصمم الداخلي هو الشخص الذي يخطط ويبحث وينسق ويدير مثل هذه المشاريع. التصميم الداخلي هو مهنة
            متعددة الأوجه تشمل التطوير المفاهيمي وتخطيط المساحات وتفتيش الموقع.
          </p>
          <a href="/" className="bg-black text-white py-2.5 px-8">
            اقرأ أكثر
          </a>
        </div>
        <div className="relative">
          <div className="img-dots before:-right-14"></div>
          <img src="/assets/images/img3-1.jpg" alt="" />
        </div>
      </section>

      <section className="container py-20">
        <h1 className="text-4xl font-semibold pb-4">خدماتنا</h1>
        <a href="/" className="bg-yellow-400 text-black py-3 px-3 text-sm">
          اتصل بنا وحقق حلمك!
        </a>

        <div className="grid grid-cols-3 gap-10 py-6">
          <div className="relative bg-black">
            <img src="/assets/images/img5-1.jpg" alt="" className=" opacity-30"/>
            <div className="absolute top-0 p-8 text-center">
              <h2 className="text-3xl font-semibold text-yellow-400">تصميم داخلي</h2>
              <p className="pt-8 pb-10 text-gray-300">
                التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين
                الداخلي هو مهنة متعددة الأوجه تشمل التطوير المفاهيمي وتخطيط المساحات وتفتيش الموقع.
              </p>
              <a href="/" className="bg-yellow-500 text-black py-2.5 px-6 text-sm">
                اقرأ أكثر
              </a>
            </div>
          </div>

          <div className="relative">
            <img src="/assets/images/img5-1.jpg" alt="" />
            <div className=" absolute top-0 p-8 text-center">
              <h2 className="text-4xl font-semibold">تصميم داخلي</h2>
              <p className="pt-8 pb-10 text-gray-300">
                التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين
                الداخلي هو مهنة متعددة الأوجه تشمل التطوير المفاهيمي وتخطيط المساحات وتفتيش الموقع.
              </p>
              <a href="/" className="bg-yellow-500 text-black py-2.5 px-6 text-sm">
                اقرأ أكثر
              </a>
            </div>
          </div>

          <div className="relative">
            <img src="/assets/images/img5-1.jpg" alt="" />
            <div className=" absolute top-0 p-8 text-center">
              <h2 className="text-4xl font-semibold">تصميم داخلي</h2>
              <p className="pt-8 pb-10 text-gray-300">
                التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين
                الداخلي هو مهنة متعددة الأوجه تشمل التطوير المفاهيمي وتخطيط المساحات وتفتيش الموقع.
              </p>
              <a href="/" className="bg-yellow-500 text-black py-2.5 px-6 text-sm">
                اقرأ أكثر
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
