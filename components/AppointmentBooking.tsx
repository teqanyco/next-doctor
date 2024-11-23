"use client"

import { useState } from 'react'
import { 
  Calendar, Clock, User, Search, ChevronRight, 
  ChevronLeft, MapPin, CreditCard, CheckCircle 
} from "lucide-react"

export default function AppointmentBooking() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const specialties = [
    'طب عام',
    'طب الأسنان',
    'طب العيون',
    'طب الأطفال',
    'طب النساء والتوليد',
    'طب القلب',
    'الطب النفسي',
    'جلدية'
  ]

  const availableTimes = [
    '09:00 ص',
    '09:30 ص',
    '10:00 ص',
    '10:30 ص',
    '11:00 ص',
    '11:30 ص',
    '12:00 م',
    '12:30 م',
    '01:00 م'
  ]

  const doctors = [
    {
      id: 1,
      name: 'د. أحمد محمد',
      specialty: 'طب عام',
      rating: 4.9,
      location: 'الرياض - العليا',
      price: 200,
      availability: '15 موعد متاح'
    },
    {
      id: 2,
      name: 'د. سارة عبدالله',
      specialty: 'طب عام',
      rating: 4.8,
      location: 'الرياض - النخيل',
      price: 180,
      availability: '8 مواعيد متاحة'
    }
  ]

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-1"></div>
        {[
          { step: 1, title: 'التخصص' },
          { step: 2, title: 'اختيار الطبيب' },
          { step: 3, title: 'تحديد الموعد' },
          { step: 4, title: 'تأكيد الحجز' }
        ].map(({ step, title }) => (
          <div 
            key={step}
            className={`flex flex-col items-center relative bg-gray-50 z-10
              ${step < currentStep ? 'text-green-600' : 
                step === currentStep ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                ${step < currentStep ? 'bg-green-100' : 
                  step === currentStep ? 'bg-blue-100' : 'bg-gray-100'}`}
            >
              {step < currentStep ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <span className="text-sm">{step}</span>
              )}
            </div>
            <span className="text-sm whitespace-nowrap">{title}</span>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSpecialtySelection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">اختر التخصص</h2>
      <div className="relative">
        <Search className="absolute right-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="ابحث عن التخصص"
          className="w-full p-3 pr-10 border rounded-lg"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {specialties.map((specialty) => (
          <button
            key={specialty}
            onClick={() => {
              setSelectedSpecialty(specialty)
              setCurrentStep(2)
            }}
            className={`p-4 rounded-lg border text-center hover:border-blue-500 hover:text-blue-600 transition-colors
              ${selectedSpecialty === specialty ? 'border-blue-500 text-blue-600' : 'border-gray-200'}`}
          >
            {specialty}
          </button>
        ))}
      </div>
    </div>
  )

  const renderDoctorSelection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">اختر الطبيب</h2>
      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => {
              setSelectedDoctor(doctor)
              setCurrentStep(3)
            }}
            className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
          >
            <div className="flex items-start space-x-4 space-x-reverse">
              <img
                src={`/api/placeholder/80/80`}
                alt={doctor.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <MapPin size={16} className="ml-1" />
                  {doctor.location}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-green-600">{doctor.availability}</span>
                  <span className="font-semibold">{doctor.price} دينار</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderDateSelection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">اختر الموعد</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg border">
            <div className="flex justify-between items-center mb-4">
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight size={20} />
              </button>
              <span className="font-semibold">نوفمبر 2024</span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft size={20} />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-2">
              {['أحد', 'اثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت'].map((day) => (
                <div key={day} className="text-gray-500 text-sm">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(`2024-11-${day}`)}
                  className={`p-2 rounded-full hover:bg-blue-50 hover:text-blue-600
                    ${selectedDate === `2024-11-${day}` ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white' : ''}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">المواعيد المتاحة</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 border rounded-lg text-center hover:border-blue-500 hover:text-blue-600 transition-colors
                  ${selectedTime === time ? 'border-blue-500 text-blue-600' : 'border-gray-200'}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderConfirmation = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-4">تأكيد الحجز</h2>
      <div className="bg-white p-6 rounded-lg border">
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img
                src={`/api/placeholder/60/60`}
                alt={selectedDoctor?.name}
                className="w-15 h-15 rounded-lg"
              />
              <div>
                <h3 className="font-semibold">{selectedDoctor?.name}</h3>
                <p className="text-gray-600">{selectedDoctor?.specialty}</p>
              </div>
            </div>
            <div className="text-left">
              <div className="font-semibold">{selectedDoctor?.price} دينار</div>
              <div className="text-sm text-gray-500">سعر الكشف</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse text-gray-600">
            <Calendar size={20} />
            <span>
              {selectedDate} - {selectedTime}
            </span>
          </div>

          <div className="flex items-center space-x-4 space-x-reverse text-gray-600">
            <MapPin size={20} />
            <span>{selectedDoctor?.location}</span>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 className="font-semibold mb-2">تعليمات هامة</h4>
            <ul className="text-sm text-gray-600 space-y-1 list-disc mr-5">
              <li>يرجى الوصول قبل الموعد بـ 15 دقيقة</li>
              <li>يرجى إحضار التقارير الطبية السابقة إن وجدت</li>
              <li>يمكنك إلغاء الموعد قبل 24 ساعة من وقت الحجز</li>
            </ul>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setCurrentStep(5)}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        تأكيد وإتمام الحجز
      </button>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="text-green-500" size={32} />
      </div>
      <h2 className="text-2xl font-semibold">تم تأكيد الحجز بنجاح</h2>
      <p className="text-gray-600">
        سيتم إرسال تفاصيل الحجز إلى بريدك الإلكتروني
      </p>
      <div className="bg-white p-4 rounded-lg border mt-6 text-right">
        <h3 className="font-semibold mb-2">تفاصيل الحجز</h3>
        <div className="space-y-2 text-gray-600">
          <p>الطبيب: {selectedDoctor?.name}</p>
          <p>التاريخ: {selectedDate}</p>
          <p>الوقت: {selectedTime}</p>
          <p>المكان: {selectedDoctor?.location}</p>
          <p>رقم الحجز: #123456</p>
        </div>
      </div>
      <button 
        onClick={() => window.location.href = '/'}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 mt-6"
      >
        العودة للرئيسية
      </button>
    </div>
  )

  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1:
        return renderSpecialtySelection()
      case 2:
        return renderDoctorSelection()
      case 3:
        return renderDateSelection()
      case 4:
        return renderConfirmation()
      case 5:
        return renderSuccess()
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto p-4">
        {currentStep < 5 && renderStepIndicator()}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  )
}