/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import React, { useEffect, useState } from 'react'

export default function KhachSan({ data, value }) {
  const [ten_ks, setTen_ks] = useState(value?.ten_ks ?? '')
  const [so_sao, setSo_sao] = useState(value?.so_sao ?? '')
  const [phap_ly, setPhap_ly] = useState(value?.phap_ly ?? '')
  const [khac, setKhac] = useState(value?.phap_ly_info?.khac ?? '')
  const [ma_lo, setMa_lo] = useState(value?.phap_ly_info?.ma_lo ?? '')
  const [so_to, setSo_to] = useState(value?.phap_ly_info?.so_to ?? '')
  const [so_thua, setSo_thua] = useState(value?.phap_ly_info?.so_thua ?? '')
  const [trang_thai, setTrang_thai] = useState(value?.trang_thai ?? '')
  const [tong_dien_tich, setTong_dien_tich] = useState(value?.tong_dien_tich ?? '')
  const [dien_tich_san, setDien_tich_san] = useState(value?.dien_tich_san ?? '')
  const [so_tang, setSo_tang] = useState(value?.so_tang ?? '')
  const [so_phong, setSo_phong] = useState(value?.so_phong ?? '')
  const [muc_dich_su_dung_dat_khach_san, setMuc_dich_su_dung_dat_khach_san] = useState(
    value?.muc_dich_su_dung_dat_khach_san ?? '',
  )
  const [chu_so_huu, setChu_so_huu] = useState(value?.chu_so_huu ?? '')
  const [doanh_thu_thang, setDoanh_thu_thang] = useState(value?.doanh_thu_thang ?? '')
  const [loi_nhuan_thang, setLoi_nhuan_thang] = useState(value?.loi_nhuan_thang ?? '')
  const [dinh_vi, setDinh_vi] = useState(value?.dinh_vi ?? '')
  const [gia_ban, setGia_ban] = useState(value?.gia_ban ?? '')
  const [hoa_hong, setHoa_hong] = useState(value?.hoa_hong ?? '')
  const [nguon, setNguon] = useState(value?.nguon ?? '')
  const [note, setNote] = useState(value?.note ?? '')
  const [file_media_raw, setFile_media_raw] = useState(value?.file_media_raw ?? '')

  useEffect(() => {
    data.current = {
      ten_ks,
      so_sao,
      phap_ly,
      khac,
      ma_lo,
      so_to,
      so_thua,
      trang_thai,
      tong_dien_tich,
      dien_tich_san,
      so_tang,
      so_phong,
      muc_dich_su_dung_dat_khach_san,
      chu_so_huu,
      loi_nhuan_thang,
      dinh_vi,
      gia_ban,
      hoa_hong,
      nguon,
      note,
      file_media_raw,
    }
  }, [
    ten_ks,
    so_sao,
    phap_ly,
    khac,
    ma_lo,
    so_to,
    so_thua,
    trang_thai,
    tong_dien_tich,
    dien_tich_san,
    so_tang,
    so_phong,
    muc_dich_su_dung_dat_khach_san,
    chu_so_huu,
    loi_nhuan_thang,
    dinh_vi,
    gia_ban,
    hoa_hong,
    nguon,
    note,
    file_media_raw,
    data,
  ])

  return (
    <>
      <CInputGroup className="mb-2">
        <CInputGroupText>Tên khách sạn</CInputGroupText>
        <CFormInput
          value={ten_ks}
          onChange={(e) => setTen_ks(e.target.value)}
          placeholder="Nhập tên"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Số sao</CInputGroupText>
        <CFormInput
          value={so_sao}
          onChange={(e) => setSo_sao(e.target.value)}
          placeholder="Nhập số sao"
          type="number"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Pháp lý</CInputGroupText>
        <CFormSelect
          aria-label="Default select example"
          value={phap_ly}
          onChange={(e) => setPhap_ly(e.target.value)}
        >
          <option>Chọn loại giấy tờ</option>
          <option value="so_hong_ca_nhan">Sổ hồng cá nhân</option>
          <option value="so_hong_cong_ty">Sổ hồng công ty</option>
          <option value="hop_dong_mua_ban">Hợp đồng mua bán</option>
          <option value="hop_dong_gop_von">Hợp đồng góp vốn</option>
          <option value="giay_tay">Giấy tay</option>
          <option value="others">Khác</option>
        </CFormSelect>
        {phap_ly === 'others' ? (
          <CFormInput
            value={khac}
            onChange={(e) => setKhac(e.target.value)}
            placeholder="Nhập loại giấy tờ"
          />
        ) : (
          <></>
        )}
        {phap_ly.includes('hop') ? (
          <CFormInput
            value={ma_lo}
            onChange={(e) => setMa_lo(e.target.value)}
            placeholder="Nhập mã lô"
          />
        ) : (
          <></>
        )}
      </CInputGroup>
      {phap_ly.includes('so') ? (
        <CInputGroup>
          <CInputGroupText>Số tờ</CInputGroupText>
          <CFormInput
            value={so_to}
            onChange={(e) => setSo_to(e.target.value)}
            placeholder="Nhập số tờ"
            type="number"
          />
          <CInputGroupText>Số thửa</CInputGroupText>
          <CFormInput
            value={so_thua}
            onChange={(e) => setSo_thua(e.target.value)}
            placeholder="Nhập số thửa"
            type="number"
          />
        </CInputGroup>
      ) : (
        <></>
      )}
      <CInputGroup className="mb-2">
        <CInputGroupText>Trạng thái</CInputGroupText>
        <CFormSelect
          value={trang_thai}
          onChange={(e) => setTrang_thai(e.target.value)}
          aria-label="Default select example"
        >
          <option>Chọn trạng thái</option>
          <option value="dang_van_hanh">Đang vận hành</option>
          <option value="cho_thue">Cho thuê</option>
          <option value="dong_cua">Đóng cửa</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Tổng diện tích(m2)</CInputGroupText>
        <CFormInput
          value={tong_dien_tich}
          onChange={(e) => setTong_dien_tich(e.target.value)}
          placeholder="Nhập diện tích"
          type="number"
        />
        <CInputGroupText>Diện tích sàn(m2)</CInputGroupText>
        <CFormInput
          value={dien_tich_san}
          onChange={(e) => setDien_tich_san(e.target.value)}
          placeholder="Nhập diện tích sàn"
          type="number"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Số tầng</CInputGroupText>
        <CFormInput
          value={so_tang}
          onChange={(e) => setSo_tang(e.target.value)}
          placeholder="Nhập số tầng"
          type="number"
        />
        <CInputGroupText>Số phòng</CInputGroupText>
        <CFormInput
          value={so_phong}
          onChange={(e) => setSo_phong(e.target.value)}
          placeholder="Nhập số phòng"
          type="number"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Mục đích SDĐ</CInputGroupText>
        <CFormSelect
          value={muc_dich_su_dung_dat_khach_san}
          onChange={(e) => setMuc_dich_su_dung_dat_khach_san(e.target.value)}
          aria-label="Default select example"
        >
          <option>Chọn mục đích</option>
          <option value="ODT">ODT</option>
          <option value="TMD">TMD</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Chủ sở hữu</CInputGroupText>
        <CFormSelect
          value={chu_so_huu}
          onChange={(e) => setChu_so_huu(e.target.value)}
          aria-label="Default select example"
        >
          <option>Chọn</option>
          <option value="ca_nhan">Cá nhân</option>
          <option value="doanh_nghiep">Doanh nghiệp</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Doanh thu tháng(triệu)</CInputGroupText>
        <CFormInput
          value={doanh_thu_thang}
          onChange={(e) => setDoanh_thu_thang(e.target.value)}
          placeholder=""
          type="number"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Lợi nhuận tháng(triệu)</CInputGroupText>
        <CFormInput
          value={loi_nhuan_thang}
          onChange={(e) => setLoi_nhuan_thang(e.target.value)}
          placeholder=""
          type="number"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Định vị</CInputGroupText>
        <CFormInput
          value={dinh_vi}
          onChange={(e) => setDinh_vi(e.target.value)}
          placeholder="Nhập link google map"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Giá bán(tỷ)</CInputGroupText>
        <CFormInput
          placeholder=""
          value={gia_ban}
          type="number"
          onChange={(e) => setGia_ban(e.target.value)}
        />
        <CInputGroupText>Hoa hồng(%)</CInputGroupText>
        <CFormInput
          placeholder=""
          value={hoa_hong}
          type="number"
          onChange={(e) => setHoa_hong(e.target.value)}
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Nguồn</CInputGroupText>
        <CFormInput placeholder="" value={nguon} onChange={(e) => setNguon(e.target.value)} />
        <CInputGroupText>Note</CInputGroupText>
        <CFormInput placeholder="" value={note} onChange={(e) => setNote(e.target.value)} />
      </CInputGroup>
      <CFormInput
        value={file_media_raw}
        onChange={(e) => setFile_media_raw(e.target.value)}
        placeholder=""
        type="file"
        multiple
        label="File media"
      />
    </>
  )
}
