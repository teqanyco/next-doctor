// medical-platform/components/MedicalPlatform.tsx
"use client"

import Link from "next/link"
import { 
  Calendar, Video, MessageCircle, Search,
  GraduationCap, Star, ArrowRight 
} from "lucide-react"

export default function MedicalPlatform() {
  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "استشارات عن بُعد",
      description: "تواصل مباشر مع الأطباء عبر مكالمات الفيديو"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "حجز المواعيد",
      description: "احجز موعدك مع الطبيب بكل سهولة"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "استشارات فورية",
      description: "احصل على إجابات سريعة لاستفساراتك الطبية"
    },
  ]

  const doctors = [
    {
      name: "د. أحمد محمد",
      specialty: "طب عام",
      rating: 4.9,
      reviews: 128,
      image: "https://avatar.iran.liara.run/public/35"
    },
    {
      name: "د. سارة خالد",
      specialty: "طب الأسنان",
      rating: 4.8,
      reviews: 96,
      image: "https://avatar.iran.liara.run/public/33"
    },
    {
      name: "د. محمد علي",
      specialty: "طب العيون",
      rating: 4.7,
      reviews: 84,
      image: "https://avatar.iran.liara.run/public/37"
    },
  ]

  return (
     <div className="flex flex-col min-h-screen">

      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="font-extrabold leading-tight tracking-wide text-4xl md:text-5xl space-y-2">
  رعاية صحية موثوقة 
  <br className="hidden sm:inline" />
  <span className="block mt-2">في متناول يديك</span>
</h1>
          <p className="max-w-[700px] text-lg text-gray-500">
            احصل على استشارات طبية فورية، احجز مواعيدك، وتواصل مع أفضل الأطباء
            في مكان واحد.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/appointment"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            احجز موعدك الآن
          </Link>
          <Link
            href="/doctors"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            تصفح الأطباء
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          خدماتنا المميزة
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-2 w-12 h-12 bg-blue-50 rounded-lg mb-4 flex items-center justify-center text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors Section */}
      <section className="container py-12 bg-slate-50">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            نخبة من أفضل الأطباء
          </h2>
          <Link
            href="/doctors"
            className="text-blue-600 hover:underline flex items-center"
          >
            عرض المزيد
            <ArrowRight className="mr-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4 space-x-reverse mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{doctor.name}</h3>
                  <p className="text-gray-500">{doctor.specialty}</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="mr-1 text-sm font-medium">
                      {doctor.rating}
                    </span>
                    <span className="mr-1 text-sm text-gray-500">
                      ({doctor.reviews} تقييم)
                    </span>
                  </div>
                </div>
              </div>
              <Link
                href={`/doctors/${index + 1}`}
                className="block w-full text-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                حجز موعد
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1000+", label: "طبيب معتمد" },
            { number: "50000+", label: "مريض مستفيد" },
            { number: "30+", label: "تخصص طبي" },
            { number: "4.8", label: "تقييم المستخدمين" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl font-bold text-blue-600">{stat.number}</h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}