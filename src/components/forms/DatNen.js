/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { CButton, CFormInput, CFormSelect, CInputGroup, CInputGroupText, CListGroup } from '@coreui/react'
import React, { useEffect, useState } from 'react'

export default function DatNen({ data }) {
  const [tong_dien_tich, setTong_dien_tich] = useState('')
  const [phap_ly, setPhap_ly] = useState('')
  const [khac, setKhac] = useState('')
  const [so_to, setSo_to] = useState('')
  const [so_thua, setSo_thua] = useState('')
  const [ma_lo, setMa_lo] = useState('')

  const [dinh_vi, setDinh_vi] = useState('')
  const [gia_ban, setGia_ban] = useState('')
  const [hoa_hong, setHoa_hong] = useState('')
  const [nguon, setNguon] = useState('')
  const [note, setNote] = useState('')
  const [file_media_raw, setFile_media_raw] = useState('')
  const [hien_trang, setHien_trang] = useState([])
  const [quy_hoach, setQuy_hoach] = useState([])

  useEffect(() => {
    data.current = {
      tong_dien_tich,
      phap_ly,
      khac,
      so_to,
      so_thua,
      ma_lo,
      dinh_vi,
      gia_ban,
      hoa_hong,
      nguon,
      note,
      file_media_raw,
    }
    data.current.hien_trang = []
    data.current.quy_hoach = []
    for (let i = 0; i < so_thua; i++) {
      const defaultObj = {
        dat_o: 0,
        CLN: 0,
        BHK: 0,
        LUC: 0,
        RSX: 0,
        NTS: 0,
        TMD: 0,
        cong_cong: 0,
        qh_giao_thong: 0,
      }
      data.current.hien_trang.push(defaultObj)
      data.current.quy_hoach.push(defaultObj)
    }
    hien_trang.forEach(item => {
      if (!item.thua || item.thua >= so_thua) return;
      data.current.hien_trang[item.thua][item.loaiDat] = item.dienTich
    })
    quy_hoach.forEach((item => {
      if (!item.thua || item.thua >= so_thua) return;
      data.current.quy_hoach[item.thua][item.loaiDat] = item.dienTich
    }))
  }, [
    tong_dien_tich,
    phap_ly,
    khac,
    so_to,
    so_thua,
    ma_lo,
    dinh_vi,
    gia_ban,
    hoa_hong,
    nguon,
    note,
    file_media_raw,
    hien_trang,
    quy_hoach
  ])

  const themHienTrang = () => {
    setHien_trang([...hien_trang, {}]);
  }

  const themQuyHoach = () => {
    setQuy_hoach([...quy_hoach, {}]);
  }

  const xoaHienTrang = (index) => {
    setTimeout(() => {
      setHien_trang(oldValue => {
        oldValue.splice(index, 1)
        return [...oldValue]
      })
    }, 100)
  }

  const xoaQuyHoach = (index) => {
    setTimeout(() => {
      setQuy_hoach(oldValue => {
        oldValue.splice(index, 1)
        return [...oldValue]
      })
    }, 100)
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

  const thayDoiSoThuaQHSDD = (thuaMoi, index) => {
    setQuy_hoach(oldValue => {
      oldValue[index].thua = thuaMoi
      return [...oldValue]
    })
  }

  const thayDoiLoaiDatQHSDD = (loaiDat, index) => {
    setQuy_hoach(oldValue => {
      oldValue[index].loaiDat = loaiDat
      return [...oldValue]
    })
  }

  const thayDoiDienTichQHSDD = (dienTich, index) => {
    setQuy_hoach(oldValue => {
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
            value={so_thua}
            onChange={(e) => thayDoiSoThua(e.target.value)}
            placeholder="Nhập số thửa"
          />
        </CInputGroup>
      ) : (
        <></>
      )}
      <CListGroup className="border border-dark p-1 mb-1">
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
                <option value={'cln'}>CLN(m2)</option>
                <option value={'bhk'}>BHK(m2)</option>
                <option value={'luc'}>LUC(m2)</option>
                <option value={'rsx'}>RSX(m2)</option>
                <option value={'nts'}>NTS(m2)</option>
                <option value={'tmd'}>TMD(m2)</option>
                <option value={'cong_cong'}>Công cộng(m2)</option>
                <option value={'qh_giao_thong'}>QH giao thông(m2)</option>
              </CFormSelect>
              <CFormInput
                onChange={(e) => thayDoiDienTich(e.target.value, index)}
                placeholder="Nhập số"
              />
              <CButton color={'danger'} onClick={() => xoaHienTrang(index)}>
                X
              </CButton>
            </CInputGroup>
          )
        })}
        <CButton
          onClick={themHienTrang}
          color="warning">
          Thêm
        </CButton>
      </CListGroup>
      <CListGroup className="border border-dark p-1 mb-1">
        <p className="d-block border-bottom border-dark" style={{ paddingLeft: '10px' }}>
          QH Sử dụng đất
        </p>
        {quy_hoach.map((item, index) => {
          return (
            <CInputGroup key={index} className="mb-3">
              <CFormSelect
                onChange={(e) => thayDoiSoThuaQHSDD(e.target.value, index)}>
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
                onChange={(e) => thayDoiLoaiDatQHSDD(e.target.value, index)}>
                <option>QHSDD</option>
                <option value={'dat_o'}>Đất ở(m2)</option>
                <option value={'cln'}>CLN(m2)</option>
                <option value={'bhk'}>BHK(m2)</option>
                <option value={'luc'}>LUC(m2)</option>
                <option value={'rsx'}>RSX(m2)</option>
                <option value={'nts'}>NTS(m2)</option>
                <option value={'tmd'}>TMD(m2)</option>
                <option value={'cong_cong'}>Công cộng(m2)</option>
                <option value={'qh_giao_thong'}>QH giao thông(m2)</option>
              </CFormSelect>
              <CFormInput
                onChange={(e) => thayDoiDienTichQHSDD(e.target.value, index)}
                placeholder="Nhập số"
              />
              <CButton color={'danger'} onClick={() => xoaQuyHoach(index)}>
                X
              </CButton>
            </CInputGroup>
          )
        })}
        <CButton
          onClick={themQuyHoach}
          color="warning">
          Thêm
        </CButton>
      </CListGroup>
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
