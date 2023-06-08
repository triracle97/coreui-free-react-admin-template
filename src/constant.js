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

export const dien_tich_filter = [
  { value: '<1000m2', name: '<1000m2' },
  { value: '1000-10000m2', name: '1000-10000m2' },
  { value: '>10000m2', name: '>10000m2' },
]

export const phapLyDuAn = [
  { value: 'chap_thuan_chu_truong_dau_tu', name: 'Chấp thuận chủ trương đầu tư' },
  { value: 'qui_hoach_1/500', name: 'Quy hoạch 1/500' },
  { value: 'giao_dat&chuyen_muc_dich_sdd', name: 'Giao đất chuyển mục đích sdđ' },
  { value: 'hoan_thanh_nghia_vu_tai_chinh', name: 'Hoàn thành nghĩa vụ tài chính' },
  { value: 'giay_phep_xay_dung', name: 'Giấy phép xây dựng' },
]
