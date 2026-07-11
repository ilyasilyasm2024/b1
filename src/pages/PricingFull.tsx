import { Link } from "react-router-dom";

export default function PricingFull() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/pricing" className="text-xs text-gray-400 hover:text-gray-600 hover:underline mb-4 inline-block">
            ← Student Plans
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">خطط الاشتراك الكاملة</h1>
          <p className="text-gray-500 text-sm">الطالب · الأستاذ · المركز</p>
        </div>

        {/* ===== STUDENT SECTION ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">1</span>
            الطالب (Student)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Silver */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Silver</h3>
              <p className="text-xs text-gray-500 mb-4">الوصول الكامل لنماذج الامتحانات + نظام حفظ الكلمات المحدود</p>
              <ul className="text-xs text-gray-700 space-y-1.5 mb-4">
                <li>✓ الوصول الكامل لنماذج الامتحانات (PDF + Audio)</li>
                <li>✓ نظام حفظ الكلمات المحدود</li>
              </ul>
              <div className="border-t border-gray-100 pt-3 space-y-1.5">
                <div className="flex justify-between text-xs"><span>شهري</span><span className="font-bold">30 MAD</span></div>
                <div className="flex justify-between text-xs"><span>3 أشهر</span><span className="font-bold">80 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>6 أشهر</span><span className="font-bold">150 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>سنوي</span><span className="font-bold">300 MAD <span className="text-emerald-600 text-[10px]">خصم قوي</span></span></div>
              </div>
            </div>

            {/* Gold */}
            <div className="border-2 border-blue-500 rounded-xl p-5 bg-white shadow-lg relative">
              <span className="absolute -top-2.5 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">الأكثر شعبية</span>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Gold</h3>
              <p className="text-xs text-gray-500 mb-4">Silver + نظام Vocabulary متطور + ترجمة AI + Timer</p>
              <ul className="text-xs text-gray-700 space-y-1.5 mb-4">
                <li>✓ جميع مميزات Silver</li>
                <li>✓ نظام Vocabulary متطور + ترجمة AI</li>
                <li>✓ مؤقت الامتحان (Timer)</li>
              </ul>
              <div className="border-t border-gray-100 pt-3 space-y-1.5">
                <div className="flex justify-between text-xs"><span>شهري</span><span className="font-bold">50 MAD</span></div>
                <div className="flex justify-between text-xs"><span>3 أشهر</span><span className="font-bold">135 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>6 أشهر</span><span className="font-bold">255 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>سنوي</span><span className="font-bold">500 MAD <span className="text-emerald-600 text-[10px]">خصم قوي</span></span></div>
              </div>
            </div>

            {/* Platinum */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Platinum</h3>
              <p className="text-xs text-gray-500 mb-4">Gold + مزامنة التقدم + أدوات تفاعلية</p>
              <ul className="text-xs text-gray-700 space-y-1.5 mb-4">
                <li>✓ جميع مميزات Gold</li>
                <li>✓ مزامنة التقدم (Sync) عبر الأجهزة</li>
                <li>✓ أدوات تفاعلية (Highlighting & Recording)</li>
              </ul>
              <div className="border-t border-gray-100 pt-3 space-y-1.5">
                <div className="flex justify-between text-xs"><span>شهري</span><span className="font-bold">70 MAD</span></div>
                <div className="flex justify-between text-xs"><span>3 أشهر</span><span className="font-bold">190 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>6 أشهر</span><span className="font-bold">355 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>سنوي</span><span className="font-bold">700 MAD <span className="text-emerald-600 text-[10px]">خصم قوي</span></span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== TEACHER SECTION ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">2</span>
            الأستاذ (Teacher)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Teacher Silver */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Silver</h3>
              <ul className="text-xs text-gray-700 space-y-1.5 mb-4">
                <li>✓ لوحة تحكم الأستاذ</li>
                <li>✓ تدبير 2 كلاسات (20 تلميذ لكل كلاس)</li>
                <li>✓ تقارير أداء مبسطة</li>
              </ul>
              <div className="border-t border-gray-100 pt-3 space-y-1.5">
                <div className="flex justify-between text-xs"><span>شهري</span><span className="font-bold">150 MAD</span></div>
                <div className="flex justify-between text-xs"><span>3 أشهر</span><span className="font-bold">400 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>6 أشهر</span><span className="font-bold">750 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>سنوي</span><span className="font-bold">1,500 MAD <span className="text-emerald-600 text-[10px]">خصم قوي</span></span></div>
              </div>
            </div>

            {/* Teacher Gold */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Gold</h3>
              <ul className="text-xs text-gray-700 space-y-1.5 mb-4">
                <li>✓ لوحة تحكم الأستاذ</li>
                <li>✓ تدبير 5 كلاسات (40 تلميذ لكل كلاس)</li>
                <li>✓ تقارير أداء مفصلة</li>
              </ul>
              <div className="border-t border-gray-100 pt-3 space-y-1.5">
                <div className="flex justify-between text-xs"><span>شهري</span><span className="font-bold">300 MAD</span></div>
                <div className="flex justify-between text-xs"><span>3 أشهر</span><span className="font-bold">800 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>6 أشهر</span><span className="font-bold">1,500 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>سنوي</span><span className="font-bold">3,000 MAD <span className="text-emerald-600 text-[10px]">خصم قوي</span></span></div>
              </div>
            </div>
          </div>

          {/* Add new class */}
          <div className="mt-4 border border-dashed border-purple-300 rounded-xl p-4 bg-purple-50/50">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-purple-900">➕ إضافة كلاس جديد</h4>
                <p className="text-[11px] text-purple-700 mt-0.5">أضف كلاسات إضافية لأي خطة أستاذ</p>
              </div>
              <span className="text-lg font-black text-purple-900">100 MAD<span className="text-xs font-normal text-purple-600"> / كلاس</span></span>
            </div>
          </div>
        </section>

        {/* ===== CENTER SECTION ===== */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="bg-amber-100 text-amber-700 text-sm px-3 py-1 rounded-full">3</span>
            المركز (Center)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pro */}
            <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Pro</h3>
              <ul className="text-xs text-gray-700 space-y-1.5 mb-4">
                <li>✓ لوحة تحكم المدير (Admin Dashboard)</li>
                <li>✓ إضافة أساتذة متعددين (Multi-Teacher Access)</li>
                <li>✓ تدبير 15 كلاس</li>
                <li>✓ تقارير إجمالية للمركز</li>
              </ul>
              <div className="border-t border-gray-100 pt-3 space-y-1.5">
                <div className="flex justify-between text-xs"><span>شهري</span><span className="font-bold">1,500 MAD</span></div>
                <div className="flex justify-between text-xs"><span>3 أشهر</span><span className="font-bold">4,000 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>6 أشهر</span><span className="font-bold">7,500 MAD <span className="text-emerald-600 text-[10px]">خصم</span></span></div>
                <div className="flex justify-between text-xs"><span>سنوي</span><span className="font-bold">15,000 MAD <span className="text-emerald-600 text-[10px]">خصم قوي</span></span></div>
              </div>
            </div>

            {/* Enterprise */}
            <div className="border-2 border-gray-900 rounded-xl p-5 bg-gray-900 text-white shadow-lg">
              <h3 className="text-lg font-bold mb-1">Enterprise</h3>
              <p className="text-xs text-gray-300 mb-4">حسب الطلب — للمؤسسات الكبيرة</p>
              <ul className="text-xs text-gray-200 space-y-1.5 mb-4">
                <li>✓ كلاسات غير محدودة</li>
                <li>✓ دعم فني خاص</li>
                <li>✓ تكامل مخصص (API Integration)</li>
                <li>✓ عقد سنوي</li>
              </ul>
              <div className="border-t border-gray-700 pt-3">
                <p className="text-center text-sm font-bold">تواصل معنا</p>
                <p className="text-center text-[10px] text-gray-400 mt-1">contact@b1zertifikat.me</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-gray-400">جميع الأسعار بالدرهم المغربي (MAD). Payment integration coming soon.</p>
          <Link to="/" className="text-xs text-blue-500 hover:underline mt-2 inline-block">
            ← العودة للتطبيق
          </Link>
        </div>
      </div>
    </div>
  );
}
