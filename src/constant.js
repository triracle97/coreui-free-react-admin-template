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

export const khuVuc = [
  { value: 'da-nang', name: 'Đà Nẵng' },
  { value: 'quang-nam', name: 'Quảng Nam' },
  { value: 'khanh-hoa', name: 'Khánh Hòa' },
  { value: 'lam-dong', name: 'Lâm Đồng' },
  { value: 'tp-hcm', name: 'TP.Hồ CHí Minh' },
  { value: 'dong-nai', name: 'Đồng Nai' },
  { value: 'vung-tau', name: 'Vũng Tàu' },
  { value: 'kien-giang', name: 'Kiên Giang' },
  { value: 'khac', name: 'Khác' },
]

export const phapLy = [
  { value: 'so_hong_ca_nhan', name: 'Sổ hồng cá nhân' },
  { value: 'so_hong_cong_ty', name: 'Sổ hồng công ty' },
  { value: 'hop_dong_mua_ban', name: 'Hợp đồng mua bán' },
  { value: 'hop_dong_gop_von', name: 'Hợp đồng góp vốn' },
  { value: 'giay_tay', name: 'Giấy tay' },
  { value: 'others', name: 'Khác' },
]
