/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { CButton, CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import React, { useEffect, useState } from 'react'

export default function DatTs({ data }) {
  const [tong_dien_tich, setTong_dien_tich] = useState('')
  const [phap_ly, setPhap_ly] = useState('')
  const [khac, setKhac] = useState('')
  const [so_to, setSo_to] = useState('')
  const [so_thua, setSo_thua] = useState('')
  const [ma_lo, setMa_lo] = useState('')
  const [tai_san_gan_lien, setTai_san_gan_lien] = useState('')
  const [dong_tien, setDong_tien] = useState('')

  const [ht_dat_o, setHt_dat_o] = useState('')
  const [ht_cln, setHt_cln] = useState('')
  const [ht_bhk, setHt_bhk] = useState('')
  const [ht_luc, setHt_luc] = useState('')
  const [ht_rsx, setHt_rsx] = useState('')
  const [ht_nts, setHt_nts] = useState('')
  const [ht_tmd, setHt_tmd] = useState('')
  const [ht_cong_cong, setHt_cong_cong] = useState('')
  const [ht_qh_giao_thong, setHt_qh_giao_thong] = useState('')
  const [dat_o, setDat_o] = useState('')
  const [cln, setCln] = useState('')
  const [bhk, setBhk] = useState('')
  const [luc, setLuc] = useState('')
  const [rsx, setRsx] = useState('')
  const [nts, setNts] = useState('')
  const [tmd, setTmd] = useState('')
  const [cong_cong, setCong_cong] = useState('')
  const [qh_giao_thong, setQh_giao_thong] = useState('')
  const [dinh_vi, setDinh_vi] = useState('')
  const [gia_ban, setGia_ban] = useState('')
  const [hoa_hong, setHoa_hong] = useState('')
  const [nguon, setNguon] = useState('')
  const [note, setNote] = useState('')
  const [file_media_raw, setFile_media_raw] = useState('')

  useEffect(() => {
    data.current = {
      tong_dien_tich,
      phap_ly,
      khac,
      so_to,
      so_thua,
      ma_lo,
      tai_san_gan_lien,
      dong_tien,

      ht_dat_o,
      ht_cln,
      ht_bhk,
      ht_luc,
      ht_rsx,
      ht_nts,
      ht_tmd,
      ht_cong_cong,
      ht_qh_giao_thong,
      dat_o,
      cln,
      bhk,
      luc,
      rsx,
      nts,
      tmd,
      cong_cong,
      qh_giao_thong,
      dinh_vi,
      gia_ban,
      hoa_hong,
      nguon,
      note,
      file_media_raw,
    }
  }, [
    tong_dien_tich,
    phap_ly,
    khac,
    so_to,
    so_thua,
    ma_lo,
    tai_san_gan_lien,
    dong_tien,

    ht_dat_o,
    ht_cln,
    ht_bhk,
    ht_luc,
    ht_rsx,
    ht_nts,
    ht_tmd,
    ht_cong_cong,
    ht_qh_giao_thong,
    dat_o,
    cln,
    bhk,
    luc,
    rsx,
    nts,
    tmd,
    cong_cong,
    qh_giao_thong,
    dinh_vi,
    gia_ban,
    hoa_hong,
    nguon,
    note,
    file_media_raw,
  ])

  return (
    <>
      <CInputGroup className="mb-2">
        <CInputGroupText>Tổng diện tích</CInputGroupText>
        <CFormInput
          value={tong_dien_tich}
          placeholder="Nhập tổng diện tích"
          onChange={(e) => setTong_dien_tich(e.target.value)}
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
            placeholder="Nhập loại giấy tờ"
            value={khac}
            onChange={(e) => setKhac(e.target.value)}
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
          <CInputGroupText value={so_to} onChange={(e) => setSo_to(e.target.value)}>
            Số tờ
          </CInputGroupText>
          <CFormInput placeholder="Nhập số tờ" />
          <CInputGroupText>Số thửa</CInputGroupText>
          <CFormInput
            value={so_thua}
            onChange={(e) => setSo_thua(e.target.value)}
            placeholder="Nhập số thửa"
          />
        </CInputGroup>
      ) : (
        <></>
      )}
      <CInputGroup className="mb-2">
        <CInputGroupText>Tài sản gắn liền</CInputGroupText>
        <CFormInput
          value={tai_san_gan_lien}
          onChange={(e) => setTai_san_gan_lien(e.target.value)}
          placeholder=""
        />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Dòng tiền</CInputGroupText>
        <CFormInput
          value={dong_tien}
          onChange={(e) => setDong_tien(e.target.value)}
          placeholder=""
        />
      </CInputGroup>
      <div className="border border-dark p-1 mb-1">
        <p className="d-block border-bottom border-dark" style={{ paddingLeft: '10px' }}>
          Hiện trạng
        </p>
        <CInputGroup className="mb-2">
          <CInputGroupText>Đất ở(m2)</CInputGroupText>
          <CFormInput
            value={ht_dat_o}
            onChange={(e) => setHt_dat_o(e.target.value)}
            placeholder="Nhập số"
          />
          <CInputGroupText>CLN(m2)</CInputGroupText>
          <CFormInput
            value={ht_cln}
            onChange={(e) => setHt_cln(e.target.value)}
            placeholder="Nhập số"
          />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>BHK(m2)</CInputGroupText>
          <CFormInput
            value={ht_bhk}
            onChange={(e) => setHt_bhk(e.target.value)}
            placeholder="Nhập số"
          />
          <CInputGroupText>LUC(m2)</CInputGroupText>
          <CFormInput
            value={ht_luc}
            onChange={(e) => setHt_luc(e.target.value)}
            placeholder="Nhập số"
          />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>RSX(m2)</CInputGroupText>
          <CFormInput
            value={ht_rsx}
            onChange={(e) => setHt_rsx(e.target.value)}
            placeholder="Nhập số"
          />
          <CInputGroupText>NTS(m2)</CInputGroupText>
          <CFormInput
            value={ht_nts}
            onChange={(e) => setHt_nts(e.target.value)}
            placeholder="Nhập số"
          />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>TMD(m2)</CInputGroupText>
          <CFormInput
            value={ht_tmd}
            onChange={(e) => setHt_tmd(e.target.value)}
            placeholder="Nhập số"
          />
          <CInputGroupText>Công cộng(m2)</CInputGroupText>
          <CFormInput
            value={ht_cong_cong}
            onChange={(e) => setHt_cong_cong(e.target.value)}
            placeholder="Nhập số"
          />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>QH giao thông(m2)</CInputGroupText>
          <CFormInput
            value={ht_qh_giao_thong}
            onChange={(e) => setHt_qh_giao_thong(e.target.value)}
            placeholder="Nhập số"
          />
        </CInputGroup>
      </div>
      <div className="border border-dark p-1 mb-1">
        <p className="d-block border-bottom border-dark" style={{ paddingLeft: '10px' }}>
          QH Sử dụng đất
        </p>
        <CInputGroup className="mb-2">
          <CInputGroupText>Đất ở(m2)</CInputGroupText>
          <CFormInput
            value={dat_o}
            onChange={(e) => setDat_o(e.target.value)}
            placeholder="Nhập số"
          />
          <CInputGroupText>CLN(m2)</CInputGroupText>
          <CFormInput value={cln} onChange={(e) => setCln(e.target.value)} placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>BHK(m2)</CInputGroupText>
          <CFormInput value={bhk} onChange={(e) => setBhk(e.target.value)} placeholder="Nhập số" />
          <CInputGroupText>LUC(m2)</CInputGroupText>
          <CFormInput value={luc} onChange={(e) => setLuc(e.target.value)} placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>RSX(m2)</CInputGroupText>
          <CFormInput value={rsx} onChange={(e) => setRsx(e.target.value)} placeholder="Nhập số" />
          <CInputGroupText>NTS(m2)</CInputGroupText>
          <CFormInput value={nts} onChange={(e) => setNts(e.target.value)} placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>TMD(m2)</CInputGroupText>
          <CFormInput value={tmd} onChange={(e) => setTmd(e.target.value)} placeholder="Nhập số" />
          <CInputGroupText>Công cộng(m2)</CInputGroupText>
          <CFormInput
            value={cong_cong}
            onChange={(e) => setCong_cong(e.target.value)}
            placeholder="Nhập số"
          />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>QH giao thông(m2)</CInputGroupText>
          <CFormInput
            value={qh_giao_thong}
            onChange={(e) => setQh_giao_thong(e.target.value)}
            placeholder="Nhập số"
          />
        </CInputGroup>
      </div>
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
        <CFormInput value={gia_ban} onChange={(e) => setGia_ban(e.target.value)} placeholder="" />
        <CInputGroupText>Hoa hồng(%)</CInputGroupText>
        <CFormInput value={hoa_hong} onChange={(e) => setHoa_hong(e.target.value)} placeholder="" />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Nguồn</CInputGroupText>
        <CFormInput value={nguon} onChange={(e) => setNguon(e.target.value)} placeholder="" />
        <CInputGroupText>Note</CInputGroupText>
        <CFormInput value={note} onChange={(e) => setNote(e.target.value)} placeholder="" />
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
