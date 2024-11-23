// app/doctors/page.tsx
"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Search, Filter } from 'lucide-react'

const DOCTORS_DATA = [
  {
    id: 1,
    name: "د. أحمد محمد",
    specialty: "استشاري طب عام",
    rating: 4.9,
    reviewsCount: 128,
    location: "عمان - خلدا",
    price: 200,
    availability: "15 موعد متاح",
    image: "/images/avatar.png",
    experience: "15 سنة خبرة"
  },
  {
    id: 2,
    name: "د. سارة عبدالله",
    specialty: "طب الأسنان",
    rating: 4.8,
    reviewsCount: 96,
    location: "عمان - العبدلي",
    price: 180,
    availability: "8 مواعيد متاحة",
    image: "/images/avatar.png",
    experience: "12 سنة خبرة"
  },
  {
    id: 3,
    name: "د. خالد العمري",
    specialty: "طب العيون",
    rating: 4.7,
    reviewsCount: 114,
    location: "عمان - طبربور",
    price: 220,
    availability: "10 مواعيد متاحة",
    image: "/images/avatar.png",
    experience: "18 سنة خبرة"
  }
]

const SPECIALTIES = [
  "الكل",
  "طب عام",
  "طب الأسنان",
  "طب العيون",
  "طب الأطفال",
  "طب النساء والتوليد"
]

export default function DoctorsPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("الكل")
  const [searchQuery, setSearchQuery] = useState("")

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating 
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">الأطباء المتاحون</h1>
          <p className="text-gray-600">اختر طبيبك المفضل واحجز موعدك بسهولة</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="ابحث عن طبيب..."
                className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {/* Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {SPECIALTIES.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors
                    ${selectedSpecialty === specialty
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors List */}
        <div className="grid gap-6">
          {DOCTORS_DATA.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-sm p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Doctor Image */}
                <div className="md:w-48 w-full">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={100}
                    height={100}
                    className="rounded-xl w-full aspect-square object-cover"
                  />
                </div>

                {/* Doctor Info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h2 className="text-xl font-bold mb-2">
                        {doctor.name}
                      </h2>
                      <p className="text-gray-600 mb-2">{doctor.specialty}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{doctor.experience}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <MapPin size={16} className="ml-1" />
                          {doctor.location}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-left">
                      <div className="text-2xl font-bold text-blue-600">{doctor.price} دينار</div>
                      <div className="text-sm text-gray-500">سعر الكشف</div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {renderStars(doctor.rating)}
                        <span className="text-gray-500 text-sm mr-2">
                          ({doctor.reviewsCount} تقييم)
                        </span>
                      </div>
                      <span className="text-green-600 text-sm">
                        {doctor.availability}
                      </span>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                      <Link
                        href={`/doctors/${doctor.id}`}
                        className="flex-1 md:flex-none text-center px-6 py-2 bg-white border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        عرض الملف الشخصي
                      </Link>
                      <Link
                        href={`/appointment?doctor=${doctor.id}`}
                        className="flex-1 md:flex-none text-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        حجز موعد
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}