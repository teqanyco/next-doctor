export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "طبيبي",
  description: "منصة للتواصل مع الأطباء وحجز المواعيد",
  mainNav: [
    {
      title: "الرئيسية",
      href: "/",
    },
    {
      title: "الأطباء",
      href: "/doctors",
    },
    {
      title: "التخصصات",
      href: "/specialties",
    },
    {
      title: "حجز موعد",
      href: "/appointment",
    },
  ],
  links: {
    twitter: "https://twitter.com/your-handle",
    github: "https://github.com/your-username/medical-platform",
  },
}