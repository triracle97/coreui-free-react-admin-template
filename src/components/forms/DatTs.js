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
  const [so_thua, setSo_thua] = useState(1)
  const [ma_lo, setMa_lo] = useState('')
  const [tai_san_gan_lien, setTai_san_gan_lien] = useState('')
  const [dong_tien, setDong_tien] = useState('')

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
  const [hien_trang, setHien_trang] = useState([]);

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
    data.current.hien_trang = []
    for (let i = 0; i < so_thua; i++) {
      data.current.hien_trang.push({
        dat_o: 0,
        CLN: 0,
        BHK: 0,
        LUC: 0,
        RSX: 0,
        NTS: 0,
        TMD: 0,
        cong_cong: 0,
        qh_giao_thong: 0,
      })
    }
    hien_trang.forEach(item => {
      if (!item.thua || item.thua >= so_thua) return;
      data.current.hien_trang[item.thua][item.loaiDat] = item.dienTich
    })
  }, [
    tong_dien_tich,
    phap_ly,
    khac,
    so_to,
    so_thua,
    ma_lo,
    tai_san_gan_lien,
    dong_tien,
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
    hien_trang
  ])

  const themHienTrang = () => {
    setHien_trang([...hien_trang, {}]);
  }

  const thayDoiSoThua = (soThuaMoi) => {
    try {
      soThuaMoi = parseInt(soThuaMoi)
      if (!isNaN(soThuaMoi)) {
        setSo_thua(soThuaMoi)
      } else {
        setSo_thua(1)
      }
    } catch {
      setSo_thua(1)
    }
  }

  const thayDoiThuaHienTrang = (thuaMoi, index) => {
    setHien_trang(oldValue => {
      oldValue[index].thua = thuaMoi
      return [...oldValue]
    })
  }

  const thayDoiLoaiDatHienTrang = (loaiDat, index) => {
    setHien_trang(oldValue => {
      oldValue[index].loaiDat = loaiDat
      return [...oldValue]
    })
  }

  const thayDoiDienTich = (dienTich, index) => {
    setHien_trang(oldValue => {
      oldValue[index].dienTich = dienTich
      return [...oldValue]
    })
  }

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
            onChange={(e) => thayDoiSoThua(e.target.value)}
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
        {hien_trang.map((item, index) => {
          return (
            <CInputGroup key={index} className="mb-3">
              <CFormSelect
                onChange={(e) => thayDoiThuaHienTrang(e.target.value, index)}>
                <option>Thửa số</option>
                {Array.from(Array(so_thua).keys()).map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {index + 1}
                    </option>
                  )
                })}
              </CFormSelect>
              <CFormSelect
                onChange={(e) => thayDoiLoaiDatHienTrang(e.target.value, index)}>
                <option>Hiện trạng</option>
                <option value={'dat_o'}>Đất ở(m2)</option>
                <option>CLN(m2)</option>
                <option>BHK(m2)</option>
                <option>LUC(m2)</option>
                <option>RSX(m2)</option>
                <option>NTS(m2)</option>
                <option>TMD(m2)</option>
                <option>Công cộng(m2)</option>
                <option>QH giao thông(m2)</option>
              </CFormSelect>
              <CFormInput
                onChange={(e) => thayDoiDienTich(e.target.value, index)}
                placeholder="Nhập số"
              />
            </CInputGroup>
          )
        })}
        <CButton
          onClick={themHienTrang}
          color="warning">
          Thêm
        </CButton>
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
