export const BACKEND_HOST =
  process.env.NODE_ENV === 'development'
    ? 'http://51.79.147.198:3000'
    : 'https://api.namthanhdatholdings.com'

export const productType = [
  { value: 'datNen', name: 'Đất nền' },
  { value: 'datTs', name: 'Đất và tài sản' },
  { value: 'khachSan', name: 'Khách sạn' },
  { value: 'duAn', name: 'Dự án' },
]
