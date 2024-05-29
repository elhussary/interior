import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ScrollTop from "@/components/scroll-top";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

import { CircleAlert } from "lucide-react";

const ourServices = [
  [
    "تصميم داخلي",
    "التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين يستخدمون المساحة",
  ],
  [
    "تزيين المنزل",
    "التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين يستخدمون المساحة",
  ],
  [
    "تصميم المطبخ",
    "التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين يستخدمون المساحة",
  ],
];

export default function Index() {
  return (
    <>
      <Navbar />

      <main>
        <section className="container py-24">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="relative img-dots">
              <img src="/assets/images/img7-1.jpg" alt="غرف نوم" />
            </div>
            <div className="py-10">
              <h2>غرف نوم رائعة</h2>
              <p className="py-8 text-muted-foreground">
                المصمم الداخلي هو الشخص الذي يخطط ويبحث وينسق ويدير مثل هذه المشاريع. التصميم الداخلي هو مهنة متعددة
                الأوجه تشمل التطوير المفاهيمي ، وتخطيط المساحات ، والتفتيش على الموقع ، والبرمجة ، والبحث ، والتواصل مع
                أصحاب المصلحة في المشروع ، وإدارة البناء ، وتنفيذ التصميم.
              </p>
              <a href="/" className="bg-black text-white py-2.5 px-8">
                اقرأ أكثر
              </a>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2>مطابخ حديثة</h2>
              <p className="py-8 text-muted-foreground">
                التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين
                يستخدمون المساحة. المصمم الداخلي هو الشخص الذي يخطط ويبحث وينسق ويدير مثل هذه المشاريع. التصميم الداخلي
                هو مهنة متعددة الأوجه تشمل التطوير المفاهيمي وتخطيط المساحات وتفتيش الموقع.
              </p>
              <a href="/" className="bg-black text-white py-2.5 px-8">
                اقرأ أكثر
              </a>
            </div>
            <div className="relative img-dots">
              <img src="/assets/images/img3-1.jpg" alt="مطابخ حديثة" />
            </div>
          </div>
        </section>

        <section className="container py-24">
          <h2>خدماتنا</h2>
          <div className="grid md:grid-cols-3 gap-10 py-6">
            {ourServices.map(([title, description], index) => (
              <div key={index} className="bg-zinc-950">
                <img src="/assets/images/img5-1.jpg" alt={title} />
                <div className="py-6 text-center">
                  <h3 className="text-3xl font-semibold text-yellow-400">{title}</h3>
                  <p className="py-5 text-secondary">{description}</p>
                  <a href="/" className="bg-yellow-500 text-black py-2.5 px-6 text-sm">
                    اقرأ أكثر
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-black text-secondary">
          <div className="container">
            <h2>أعمالنا</h2>
            <div className="grid grid-cols-2 gap-10 py-12">
              <div>
                <img src="/assets/images/img5-1.jpg" alt="" />
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <img src="/assets/images/img4-1.jpg" alt="" />
                  <img src="/assets/images/img8-1.jpg" alt="" />
                  <img src="/assets/images/img7-1.jpg" alt="" />
                </div>
              </div>
              <div>
                <div className="grid grid-cols-3 gap-4 pb-6">
                  <img src="/assets/images/img6-1.jpg" alt="" />
                  <img src="/assets/images/img3-1.jpg" alt="" />
                  <img src="/assets/images/img1-1.jpg" alt="" />
                </div>
                <img src="/assets/images/img2-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-center pb-20">محل ديكور</h2>
          <div className="md:container relative img-dots">
            <img src="/assets/images/slide1.jpg" alt="غرف نوم" />
            <HoverCard>
              <HoverCardTrigger className="bg-black text-white p-1 rounded-full absolute top-44 left-64 animate-pulse cursor-pointer">
                <CircleAlert className="bg-yellow-400 text-black rounded-full" size={25} />
              </HoverCardTrigger>
              <HoverCardContent className="p-5 space-y-4 bg-black border-none bg-opacity-40 text-secondary">
                <h3>لوح تزلج</h3>
                <p>٢٠درهم</p>
                <button className="bg-yellow-400 text-primary p-2 w-full">أشتري الان</button>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        <section className="container pb-20 space-y-4">
          <h2>معلومات عنا</h2>
          <p className="text-balance text-muted-foreground pb-8">
            التصميم الداخلي هو فن وعلم تحسين المناطق الداخلية للمبنى لتحقيق بيئة أكثر صحة وجمالية للأشخاص الذين يستخدمون
            المساحة. المصمم الداخلي هو الشخص الذي يخطط ويبحث وينسق ويدير مثل هذه المشاريع. التصميم الداخلي هو مهنة
            متعددة الأوجه تشمل التطوير المفاهيمي ، وتخطيط المساحات ، والتفتيش على الموقع ، والبرمجة ، والبحث ، والتواصل
            مع أصحاب المصلحة في المشروع ، وإدارة البناء ، وتنفيذ التصميم.
          </p>
          <a href="/" className="bg-black text-white py-2.5 px-8">
            اقرأ أكثر
          </a>
        </section>
        <ScrollTop />
      </main>

      <Footer />
    </>
  );
}
