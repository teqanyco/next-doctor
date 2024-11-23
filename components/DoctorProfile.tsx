"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Star, 
  ThumbsUp,
  MessageCircle,
  Share2,
  Phone,
  Mail,
  Globe,
  CheckCircle
} from 'lucide-react'

type Review = {
  id: number
  user: string
  rating: number
  date: string
  comment: string
  likes: number
  isVerified: boolean
}

const DOCTOR_DATA = {
  id: 1,
  name: "د. أحمد محمد",
  specialty: "استشاري طب عام",
  rating: 4.8,
  totalReviews: 128,
  yearsExperience: 15,
  consultationPrice: 200,
  location: "عمان - خلدا",
  workingHours: "9:00 ص - 9:00 م",
  about: `طبيب استشاري متخصص في الطب العام مع خبرة تمتد لأكثر من 15 عاماً في مجال الرعاية الصحية الأولية. 
    حاصل على زمالة الكلية الملكية للأطباء في بريطانيا ولديه اهتمام خاص بعلاج الأمراض المزمنة ورعاية كبار السن.`,
  specializations: [
    "طب الأسرة",
    "الرعاية الصحية الأولية",
    "الأمراض المزمنة",
    "طب الشيخوخة"
  ],
  education: [
    "بكالوريوس الطب والجراحة - جامعة الملك سعود",
    "زمالة الكلية الملكية للأطباء - بريطانيا",
    "ماجستير في الطب الباطني - جامعة القاهرة"
  ],
  image: "/images/doctor-placeholder.jpg",
  languages: ["العربية", "الإنجليزية"]
}

const REVIEWS: Review[] = [
  {
    id: 1,
    user: "محمد أحمد",
    rating: 5,
    date: "15 نوفمبر 2024",
    comment: "طبيب ممتاز ومتفهم جداً. شرح لي حالتي بالتفصيل وأعطاني العلاج المناسب.",
    likes: 12,
    isVerified: true
  },
  {
    id: 2,
    user: "سارة علي",
    rating: 4,
    date: "10 نوفمبر 2024",
    comment: "تجربة جيدة بشكل عام. العيادة مرتبة ونظيفة والانتظار لم يكن طويلاً.",
    likes: 8,
    isVerified: true
  },
  {
    id: 3,
    user: "خالد عمر",
    rating: 5,
    date: "5 نوفمبر 2024",
    comment: "دكتور متميز ويتابع الحالة باهتمام. أنصح بالحجز عنده.",
    likes: 15,
    isVerified: false
  }
]

export default function DoctorProfile({ doctorId }: { doctorId: string }) {
  const [activeTab, setActiveTab] = useState('about')

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
      <div className="max-w-5xl mx-auto p-4">
        {/* بطاقة معلومات الطبيب */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-4 md:mb-0">
              <Image
                src={DOCTOR_DATA.image}
                alt={DOCTOR_DATA.name}
                width={100}
                height={100}
                className="rounded-xl w-full object-cover"
              />
            </div>
            <div className="md:w-3/4 md:pr-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{DOCTOR_DATA.name}</h1>
                  <p className="text-gray-600 mb-3">{DOCTOR_DATA.specialty}</p>
                  <div className="flex items-center space-x-4 space-x-reverse mb-4">
                    {renderStars(DOCTOR_DATA.rating)}
                    <span className="text-gray-500 text-sm">
                      ({DOCTOR_DATA.totalReviews} تقييم)
                    </span>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-600">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-600 ml-2" />
                  <span>{DOCTOR_DATA.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 text-blue-600 ml-2" />
                  <span>{DOCTOR_DATA.workingHours}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/appointment?doctor=${doctorId}`}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  حجز موعد
                </Link>
                <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  استشارة عن بعد
                </button>
                <div className="text-gray-700">
                  <span className="font-bold text-xl">{DOCTOR_DATA.consultationPrice}</span>
                  <span className="text-sm mr-1">دينار</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* التبويبات */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="border-b">
            <div className="flex">
              {[
                { id: 'about', label: 'نبذة عامة' },
                { id: 'reviews', label: 'التقييمات' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 text-sm font-medium -mb-px ${
                    activeTab === tab.id
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {activeTab === 'about' ? (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-3">نبذة عن الطبيب</h2>
                  <p className="text-gray-600 leading-relaxed">{DOCTOR_DATA.about}</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">التخصصات</h2>
                  <div className="flex flex-wrap gap-2">
                    {DOCTOR_DATA.specializations.map((spec) => (
                      <span
                        key={spec}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold mb-3">المؤهلات العلمية</h2>
                  <ul className="space-y-2">
                    {DOCTOR_DATA.education.map((edu) => (
                      <li key={edu} className="flex items-center text-gray-600">
                        <CheckCircle className="w-5 h-5 text-green-500 ml-2" />
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {REVIEWS.map((review) => (
                  <div key={review.id} className="border-b last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center">
                          <span className="font-medium">{review.user}</span>
                          {review.isVerified && (
                            <span className="mr-2 text-green-500 text-sm flex items-center">
                              <CheckCircle className="w-4 h-4 ml-1" />
                              زيارة موثقة
                            </span>
                          )}
                        </div>
                        <div className="flex items-center mt-1">
                          {renderStars(review.rating)}
                          <span className="text-gray-500 text-sm mr-2">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{review.comment}</p>
                    <div className="flex items-center mt-4 text-gray-500">
                      <button className="flex items-center hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4 ml-1" />
                        {review.likes}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}