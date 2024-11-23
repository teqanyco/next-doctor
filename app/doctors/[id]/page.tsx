"use client"

import { useParams } from 'next/navigation'
import DoctorProfile from '@/components/DoctorProfile'

export default function DoctorPage() {
  const params = useParams()
  return <DoctorProfile doctorId={Array.isArray(params.id) ? params.id[0] : params.id || ''} />
}