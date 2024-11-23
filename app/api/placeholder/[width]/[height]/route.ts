import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { width: string; height: string } }
) {
  const width = params.width
  const height = params.height
  
  // إنشاء صورة عشوائية من خدمة خارجية
  const imageUrl = `https://picsum.photos/${width}/${height}`
  
  return NextResponse.redirect(imageUrl)
}