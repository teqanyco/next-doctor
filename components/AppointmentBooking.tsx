"use client"

import { useState } from 'react'
import { 
  Calendar, Clock, User, Search, ChevronRight, 
  ChevronLeft, MapPin, CreditCard, CheckCircle, Star 
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
      availability: '15 موعد متاح',
      image: '/api/placeholder/100/100'
    },
    {
      id: 2,
      name: 'د. سارة عبدالله',
      specialty: 'طب عام',
      rating: 4.8,
      location: 'الرياض - النخيل',
      price: 180,
      availability: '8 مواعيد متاحة',
      image: '/api/placeholder/100/100'
    }
  ]

  const renderStepIndicator = () => (
    <div className="mb-12">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200"></div>
        {[
          { step: 1, title: 'التخصص' },
          { step: 2, title: 'اختيار الطبيب' },
          { step: 3, title: 'تحديد الموعد' },
          { step: 4, title: 'تأكيد الحجز' }
        ].map(({ step, title }) => (
          <div 
            key={step}
            className={`flex flex-col items-center relative bg-white z-10
              ${step < currentStep ? 'text-green-600' : 
                step === currentStep ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2
                ${step < currentStep ? 'bg-green-100 border-2 border-green-500' : 
                  step === currentStep ? 'bg-blue-100 border-2 border-blue-500' : 
                  'bg-white border-2 border-gray-300'}`}
            >
              {step < currentStep ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <span className="text-sm font-semibold">{step}</span>
              )}
            </div>
            <span className="text-sm font-medium whitespace-nowrap">{title}</span>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSpecialtySelection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">اختر التخصص</h2>
        <p className="text-gray-500">اختر التخصص الطبي المناسب لحالتك</p>
      </div>
      
      <div className="relative">
        <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="ابحث عن التخصص"
          className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
            className={`p-6 rounded-xl text-center transition-all duration-200 hover:shadow-md
              ${selectedSpecialty === specialty 
                ? 'bg-blue-50 border-2 border-blue-500 text-blue-700' 
                : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50'
              }`}
          >
            {specialty}
          </button>
        ))}
      </div>
    </div>
  )

  const renderDoctorSelection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">اختر الطبيب</h2>
        <p className="text-gray-500">اختر الطبيب المناسب من القائمة التالية</p>
      </div>

      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => {
              setSelectedDoctor(doctor)
              setCurrentStep(3)
            }}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start space-x-4 space-x-reverse">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-20 h-20 rounded-lg object-cover border border-gray-100"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{doctor.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{doctor.specialty}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin size={16} className="ml-1" />
                  {doctor.location}
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="mr-1 text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-green-600 text-sm">{doctor.availability}</span>
                  <span className="mr-auto text-lg font-semibold text-blue-600">{doctor.price} دينار</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderDateSelection = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">اختر الموعد</h2>
        <p className="text-gray-500">حدد التاريخ والوقت المناسب للموعد</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight size={20} className="text-gray-500" />
              </button>
              <span className="font-semibold text-lg">نوفمبر 2024</span>
              <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft size={20} className="text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-4">
              {['أحد', 'اثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت'].map((day) => (
                <div key={day} className="text-gray-400 text-sm font-medium">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(`2024-11-${day}`)}
                  className={`p-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors
                    ${selectedDate === `2024-11-${day}` 
                      ? 'bg-blue-500 text-white hover:bg-blue-600 hover:text-white' 
                      : 'text-gray-700'}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">المواعيد المتاحة</h3>
          <div className="grid grid-cols-3 gap-3">
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-3 rounded-lg text-center transition-colors
                  ${selectedTime === time 
                    ? 'bg-blue-50 border-2 border-blue-500 text-blue-700' 
                    : 'border border-gray-200 text-gray-600 hover:border-blue-200 hover:bg-blue-50'
                  }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={() => selectedDate && selectedTime && setCurrentStep(4)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors
            disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={!selectedDate || !selectedTime}
        >
          التالي
        </button>
      </div>
    </div>
  )

  const renderConfirmation = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-2">تأكيد الحجز</h2>
        <p className="text-gray-500">راجع تفاصيل الحجز قبل التأكيد</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img
                src={selectedDoctor?.image}
                alt={selectedDoctor?.name}
                className="w-16 h-16 rounded-lg object-cover border border-gray-100"
              />
              <div>
                <h3 className="font-semibold text-lg">{selectedDoctor?.name}</h3>
                <p className="text-gray-600">{selectedDoctor?.specialty}</p>
              </div>
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-blue-600">{selectedDoctor?.price} دينار</div>
              <div className="text-sm text-gray-500">سعر الكشف</div>
            </div>
          </div>
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={20} className="ml-3" />
            <span>
              {selectedDate} - {selectedTime}
            </span>
          </div>

          <div className="flex items-center text-gray-600">
            <MapPin size={20} className="ml-3" />
            <span>{selectedDoctor?.location}</span>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mt-6">
            <h4 className="font-semibold mb-3 text-blue-900">تعليمات هامة</h4>
            <ul className="text-sm text-blue-800 space-y-2 list-disc mr-5">
              <li>يرجى الوصول قبل الموعد بـ 15 دقيقة</li>
              <li>يرجى إحضار التقارير الطبية السابقة إن وجدت</li>
              <li>يمكنك إلغاء الموعد قبل 24 ساعة من وقت الحجز</li>
            </ul>
          </div>
        </div>
      </div>

      <button 
        onClick={() => setCurrentStep(5)}
        className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors
          font-semibold text-lg"
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