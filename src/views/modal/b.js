const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  nguon_sp: { type: String, require: true, enum: ['khanh', 'dat'] },
  khu_vuc: { type: String },
  dia_chi: { type: String },
  loai_sp: { type: String },
  other_data: {
    tong_dien_tich: { type: Number },
    dien_tich_san: { type: String },
    phap_ly: {
      type: String,
      enum: [
        'so_hong_ca_nhan',
        'so_hong_cong_ty',
        'hop_dong_mua_ban',
        'hop_dong_gop_von',
        'giay_tay',
        'khac',
      ],
    },
    phap_ly_info: {
      khac: { type: String },
      so_to: { type: Number },
      so_thua: { type: Number },
      ma_lo: { type: String },
    },
    muc_dich_su_dung_dat: {
      hien_trang: {
        dat_o: { type: Number },
        CLN: { type: Number },
        BHK: { type: Number },
        LUC: { type: Number },
        RSX: { type: Number },
        NTS: { type: Number },
        TMD: { type: Number },
        cong_cong: { type: Number },
        qh_giao_thong: { type: Number },
      },
      quy_hoach: {
        dat_o: { type: Number },
        CLN: { type: Number },
        BHK: { type: Number },
        LUC: { type: Number },
        RSX: { type: Number },
        NTS: { type: Number },
        TMD: { type: Number },
        cong_cong: { type: Number },
        qh_giao_thong: { type: Number },
      },
    },
    dinh_vi: { type: String },
    gia_ban: { type: Number },
    hoa_hong: { type: Number },
    nguon: { type: String },
    file_media_raw: { type: String },
    note: { type: String },
    tai_san_gan_lien: { type: String },
    dong_tien: { type: String },
    ten_ks: { type: String },
    so_sao: { type: String },
    trang_thai: { type: String, enum: ['cho_thue', 'dong_cua'] },
    so_tang: { type: Number },
    so_phong: { type: Number },
    muc_dich_su_dung_dat_khach_san: { type: String, enum: ['ODT', 'TMD'] },
    chu_so_huu: { type: String, enum: ['ca_nhan', 'doanh_nghiep'] },
    chu_dau_tu: { type: String },
    doanh_thu_thang: { type: Number },
    loi_nhuan_thang: { type: Number },
    loai_hinh: {
      type: String,
      enum: ['nha_o_thuong', 'building', 'chung_cu', 'du_lich_nghi_duong'],
    },
    ten_du_an: { type: String },
    hinh_thuc_chuyen_nhuong: {
      type: String,
      enum: ['100_co_phan', 'mot_phan_co_phan', 'hop_tac_kinh_doanh'],
    },
    phuong_an_thanh_toan: { type: String },
  },
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product
