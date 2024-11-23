// app/specialties/page.tsx
"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search, Users, Clock, StarIcon } from 'lucide-react'

const SPECIALTIES_DATA = [
  {
    id: 1,
    name: "طب عام",
    icon: "🏥",
    doctorsCount: 45,
    waitTime: "15 دقيقة",
    rating: 4.8,
    description: "رعاية صحية شاملة للبالغين والأطفال",
    commonServices: [
      "الكشف الطبي الشامل",
      "متابعة الأمراض المزمنة",
      "التطعيمات الأساسية"
    ]
  },
  {
    id: 2,
    name: "طب الأسنان",
    icon: "🦷",
    doctorsCount: 32,
    waitTime: "20 دقيقة",
    rating: 4.9,
    description: "عناية كاملة بصحة الفم والأسنان",
    commonServices: [
      "علاج تسوس الأسنان",
      "تنظيف الأسنان",
      "تقويم الأسنان"
    ]
  },
  {
    id: 3,
    name: "طب العيون",
    icon: "👁",
    doctorsCount: 28,
    waitTime: "25 دقيقة",
    rating: 4.7,
    description: "رعاية متكاملة لصحة العين والرؤية",
    commonServices: [
      "فحص النظر",
      "علاج أمراض العين",
      "عمليات العيون"
    ]
  },
  {
    id: 4,
    name: "طب الأطفال",
    icon: "👶",
    doctorsCount: 38,
    waitTime: "10 دقيقة",
    rating: 4.9,
    description: "رعاية صحية متخصصة للأطفال من الولادة وحتى المراهقة",
    commonServices: [
      "متابعة النمو والتطور",
      "التطعيمات",
      "علاج أمراض الأطفال"
    ]
  },
  {
    id: 5,
    name: "طب النساء والتوليد",
    icon: "👩",
    doctorsCount: 25,
    waitTime: "20 دقيقة",
    rating: 4.8,
    description: "رعاية صحية شاملة للمرأة",
    commonServices: [
      "متابعة الحمل",
      "الولادة",
      "أمراض النساء"
    ]
  },
  {
    id: 6,
    name: "طب القلب",
    icon: "❤️",
    doctorsCount: 20,
    waitTime: "30 دقيقة",
    rating: 4.9,
    description: "رعاية متخصصة لصحة القلب والأوعية الدموية",
    commonServices: [
      "تشخيص أمراض القلب",
      "العلاج الدوائي",
      "متابعة ضغط الدم"
    ]
  },
  {
    id: 7,
    name: "الطب النفسي",
    icon: "🧠",
    doctorsCount: 15,
    waitTime: "40 دقيقة",
    rating: 4.7,
    description: "رعاية متخصصة للصحة النفسية",
    commonServices: [
      "العلاج النفسي",
      "الاستشارات النفسية",
      "العلاج السلوكي"
    ]
  },
  {
    id: 8,
    name: "جلدية",
    icon: "🔬",
    doctorsCount: 22,
    waitTime: "25 دقيقة",
    rating: 4.8,
    description: "رعاية متخصصة للجلد والشعر",
    commonServices: [
      "علاج الأمراض الجلدية",
      "العناية بالبشرة",
      "علاج مشاكل الشعر"
    ]
  }
]

export default function SpecialtiesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSpecialties = SPECIALTIES_DATA.filter(specialty =>
    specialty.name.includes(searchQuery)
  )

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">التخصصات الطبية</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            اختر التخصص المناسب لحالتك الصحية وتواصل مع أفضل الأطباء المتخصصين
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute right-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="ابحث عن التخصص..."
              className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredSpecialties.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl ml-3">{specialty.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{specialty.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {specialty.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center text-blue-600 mb-1">
                    <Users size={18} />
                  </div>
                  <div className="text-sm text-gray-500">
                    {specialty.doctorsCount} طبيب
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-blue-600 mb-1">
                    <Clock size={18} />
                  </div>
                  <div className="text-sm text-gray-500">
                    {specialty.waitTime}
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-yellow-400 mb-1">
                    <StarIcon size={18} className="fill-current" />
                  </div>
                  <div className="text-sm text-gray-500">
                    {specialty.rating}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">الخدمات الشائعة:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  {specialty.commonServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="ml-2">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Link
                  href={`/doctors?specialty=${specialty.id}`}
                  className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  عرض الأطباء
                </Link>
                <Link
                  href={`/appointment?specialty=${specialty.id}`}
                  className="flex-1 text-center px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  حجز موعد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}