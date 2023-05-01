/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import React, { useEffect, useState } from 'react'

export default function DuAn({ data }) {
  const [loai_hinh, setLoai_hinh] = useState('')
  const [ten_du_an, setTen_du_an] = useState('')
  const [tong_dien_tich, setTong_dien_tich] = useState('')
  const [chu_dau_tu, setChu_dau_tu] = useState('')
  const [hinh_thuc_chuyen_nhuong, setHinh_thuc_chuyen_nhuong] = useState('')
  const [phuong_an_thanh_toan, setPhuong_an_thanh_toan] = useState('')
  const [hien_trang_phap_ly, setHien_trang_phap_ly] = useState([])
  const [gia_ban, setGia_ban] = useState('')
  const [hoa_hong, setHoa_hong] = useState('')
  const [nguon, setNguon] = useState('')
  const [note, setNote] = useState('')
  const [file_media_raw, setFile_media_raw] = useState('')

  useEffect(() => {
    data.current = {
      loai_hinh,
      ten_du_an,
      tong_dien_tich,
      chu_dau_tu,
      hinh_thuc_chuyen_nhuong,
      phuong_an_thanh_toan,
      hien_trang_phap_ly,
      gia_ban,
      hoa_hong,
      nguon,
      note,
      file_media_raw,
    }
  }, [
    loai_hinh,
    ten_du_an,
    tong_dien_tich,
    chu_dau_tu,
    hinh_thuc_chuyen_nhuong,
    phuong_an_thanh_toan,
    hien_trang_phap_ly,
    gia_ban,
    hoa_hong,
    nguon,
    note,
    file_media_raw,
  ])

  function handle(e) {
    const { value, checked } = e.target

    if (checked) {
      setHien_trang_phap_ly((pre) => [...pre, value])
    } else {
      setHien_trang_phap_ly((pre) => {
        return [...pre.filter((v) => v !== value)]
      })
    }
  }

  return (
    <>
      <CInputGroup className="mb-2">
        <CInputGroupText>Loại hình</CInputGroupText>
        <CFormSelect
          value={loai_hinh}
          onChange={(e) => setLoai_hinh(e.target.value)}
          aria-label="Default select example"
        >
          <option>Chọn loại hình</option>
          <option value="nha_o_thuong_mai">Nhà ở thương mại</option>
          <option value="building">Building</option>
          <option value="chung_cu">Chung cư</option>
          <option value="du_lich_nghi_duong">Du lịch nghỉ dưỡng</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Tên dự án</CInputGroupText>
        <CFormInput
          value={ten_du_an}
          onChange={(e) => setTen_du_an(e.target.value)}
          placeholder="Nhập tên"
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Tổng diện tích(hectar)</CInputGroupText>
        <CFormInput
          value={tong_dien_tich}
          onChange={(e) => setTong_dien_tich(e.target.value)}
          placeholder=""
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Chủ đầu tư</CInputGroupText>
        <CFormInput
          value={chu_dau_tu}
          onChange={(e) => setChu_dau_tu(e.target.value)}
          placeholder="Nhập tên"
        />
      </CInputGroup>
      <CInputGroup>
        <div
          className="w-100 p-3 rounded"
          style={{
            backgroundColor: '#d8dbe0',
            border: '1px solid #b1b7c1',
            height: '38px',
            lineHeight: '2px',
          }}
        >
          Hiện trạng pháp lý dự án
        </div>
        <CInputGroup>
          <div className="input-group align-items-center" style={{ maxWidth: '300px' }}>
            <input
              style={{ width: '16px', height: '16px' }}
              className="mx-1"
              type="checkbox"
              value="Đất nền"
              onChange={handle}
            />
            <label>Chấp thuận chủ trương đầu tư</label>
          </div>
          <div className="input-group align-items-center  " style={{ maxWidth: '300px' }}>
            <input
              style={{ width: '16px', height: '16px' }}
              className="mx-1"
              type="checkbox"
              value="Đất lớn"
              onChange={handle}
            />
            <label>Quy hoạch 1/500</label>
          </div>
          <div className="input-group align-items-center  " style={{ maxWidth: '300px' }}>
            <input
              style={{ width: '16px', height: '16px' }}
              className="mx-1"
              type="checkbox"
              value="BĐS trung tâm"
              onChange={handle}
            />
            <label>Giao đất chuyển mục đích sdđ</label>
          </div>
          <div className="input-group align-items-center  " style={{ maxWidth: '300px' }}>
            <input
              style={{ width: '16px', height: '16px' }}
              className="mx-1"
              type="checkbox"
              value="BĐS dòng tiền"
              onChange={handle}
            />
            <label>Hoàn thành nghĩa vụ tài chính</label>
          </div>
          <div className="input-group align-items-center  " style={{ maxWidth: '300px' }}>
            <input
              style={{ width: '16px', height: '16px' }}
              className="mx-1"
              type="checkbox"
              value="Dự án"
              onChange={handle}
            />
            <label>Chấp thuận chủ trương đầu tư</label>
          </div>
          <div className="input-group align-items-center  " style={{ maxWidth: '300px' }}>
            <input
              style={{ width: '16px', height: '16px' }}
              className="mx-1"
              type="checkbox"
              value="Dự án"
              onChange={handle}
            />
            <label>Giấy phép xây dựng</label>
          </div>
        </CInputGroup>
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Hình thức chuyển nhượng</CInputGroupText>
        <CFormSelect
          value={hinh_thuc_chuyen_nhuong}
          onChange={(e) => setHinh_thuc_chuyen_nhuong(e.target.value)}
          aria-label="Default select example"
        >
          <option>Chọn hình thức </option>
          <option value="100_co_phan">100% cổ phần</option>
          <option value="mot_phan_co_phan">Một phần cổ phần</option>
          <option value="hop_tac_kinh_doanh">Hợp tác kinh doanh</option>
        </CFormSelect>
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Phương thức thanh toán</CInputGroupText>
        <CFormInput
          value={phuong_an_thanh_toan}
          onChange={(e) => setPhuong_an_thanh_toan(e.target.value)}
          placeholder=""
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Giá bán(tỷ)</CInputGroupText>
        <CFormInput placeholder="" value={gia_ban} onChange={(e) => setGia_ban(e.target.value)} />
        <CInputGroupText>Hoa hồng(%)</CInputGroupText>
        <CFormInput placeholder="" value={hoa_hong} onChange={(e) => setHoa_hong(e.target.value)} />
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
