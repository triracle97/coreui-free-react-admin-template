/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import {
  CButton,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CListGroup,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'

export default function DatNen({ data, value }) {
  const [tong_dien_tich, setTong_dien_tich] = useState(value?.tong_dien_tich ?? '')
  const [phap_ly, setPhap_ly] = useState(value?.phap_ly ?? '')
  const [khac, setKhac] = useState(value?.phap_ly_info?.khac ?? '')
  const [so_to, setSo_to] = useState(value?.phap_ly_info?.so_to ?? '')
  const [so_thua, setSo_thua] = useState(value?.phap_ly_info?.so_thua ?? '')
  const [ma_lo, setMa_lo] = useState(value?.phap_ly_info?.ma_lo ?? '')

  const [dinh_vi, setDinh_vi] = useState(value?.dinh_vi ?? '')
  const [gia_ban, setGia_ban] = useState(value?.gia_ban ?? '')
  const [hoa_hong, setHoa_hong] = useState(value?.hoahong ?? '')
  const [nguon, setNguon] = useState(value?.nguon ?? '')
  const [note, setNote] = useState(value?.note ?? '')
  const [file_media_raw, setFile_media_raw] = useState(value?.file_media_raw ?? '')
  const [du_lieu_thua, setDu_lieu_thua] = useState(value?.du_lieu_thua ?? [])
  console.log(value)

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
    data.current.du_lieu_thua = []

    for (let i = 0; i < du_lieu_thua.length; i++) {
      const defaultObj = {
        thua_dat_so: '',
        to_ban_do_so: '',
        hien_trang: {},
        quy_hoach: {},
      }
      data.current.du_lieu_thua.push(defaultObj)
    }

    // console.log(du_lieu_thua)
    du_lieu_thua.forEach((item, index) => {
      data.current.du_lieu_thua[index].hien_trang[item.htld] = item.dien_tichHt
    })
    du_lieu_thua.forEach((item, index) => {
      data.current.du_lieu_thua[index].quy_hoach[item.qhld] = item.dien_tichQh
    })
    du_lieu_thua.forEach((item, index) => {
      data.current.du_lieu_thua[index].thua_dat_so = item.thua_dat_so
    })
    du_lieu_thua.forEach((item, index) => {
      data.current.du_lieu_thua[index].to_ban_do_so = item.to_ban_do_so
    })
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
    data.current.du_lieu_thua,
    du_lieu_thua,
  ])

  const themDuLieuThua = () => {
    setDu_lieu_thua([
      ...du_lieu_thua,
      {
        thua_dat_so: '',
        to_ban_do_so: '',
        htld: '',
        qhld: '',
        dien_tichHt: '',
        dien_tichQh: '',
      },
    ])
  }

  const thayDoiThuaDat = (thuaso, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].thua_dat_so = thuaso
      return [...oldValue]
    })
  }

  const thayDoiToBanDo = (bando, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].to_ban_do_so = bando
      return [...oldValue]
    })
  }

  const thayDoiLoaiHienTrang = (ht, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].htld = ht

      return [...oldValue]
    })
  }

  const thayDoiLoaiQH = (qh, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].qhld = qh
      return [...oldValue]
    })
  }

  const thayDoiDienTichHt = (dientich, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].dien_tichHt = dientich
      return [...oldValue]
    })
  }

  const thayDoiDienTichQh = (dientich, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].dien_tichQh = dientich
      return [...oldValue]
    })
  }

  const boDuLieuThua = (index) => {
    setTimeout(() => {
      setDu_lieu_thua((oldValue) => {
        oldValue.splice(index, 1)
        return [...oldValue]
      })
    }, 100)
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
            onChange={(e) => setSo_thua(e.target.value)}
            placeholder="Nhập số thửa"
          />
        </CInputGroup>
      ) : (
        <></>
      )}
      <CListGroup className="border border-dark p-1 mb-1">
        <p className="d-block border-bottom border-dark" style={{ paddingLeft: '10px' }}>
          Dữ liệu các thửa đất
        </p>
        {du_lieu_thua.map((item, index) => {
          return (
            <CInputGroup key={index} className="mb-3">
              <CFormInput
                value={item.thua_dat_so}
                onChange={(e) => thayDoiThuaDat(e.target.value, index)}
                placeholder="Thửa đất số"
              />

              <CFormInput
                value={item.to_ban_do_so}
                onChange={(e) => thayDoiToBanDo(e.target.value, index)}
                placeholder="Tờ bản đồ số"
              />
              <CFormSelect
                value={item.htld}
                onChange={(e) => thayDoiLoaiHienTrang(e.target.value, index)}
              >
                <option>Hiện trạng</option>
                <option value={'dat_o'}>Đất ở(m2)</option>
                <option value={'CLN'}>CLN(m2)</option>
                <option value={'BHK'}>BHK(m2)</option>
                <option value={'LUC'}>LUC(m2)</option>
                <option value={'RSX'}>RSX(m2)</option>
                <option value={'NTS'}>NTS(m2)</option>
                <option value={'TMD'}>TMD(m2)</option>
                <option value={'cong_cong'}>Công cộng(m2)</option>
                <option value={'qh_giao_thong'}>QH giao thông(m2)</option>
              </CFormSelect>
              <CFormInput
                value={item.dien_tichHt}
                onChange={(e) => thayDoiDienTichHt(e.target.value, index)}
                placeholder="Nhập số"
              />
              <CFormSelect value={item.qhld} onChange={(e) => thayDoiLoaiQH(e.target.value, index)}>
                <option>Quy hoạch</option>
                <option value={'dat_o'}>Đất ở(m2)</option>
                <option value={'CLN'}>CLN(m2)</option>
                <option value={'BHK'}>BHK(m2)</option>
                <option value={'LUC'}>LUC(m2)</option>
                <option value={'RSX'}>RSX(m2)</option>
                <option value={'NTS'}>NTS(m2)</option>
                <option value={'TMD'}>TMD(m2)</option>
                <option value={'cong_cong'}>Công cộng(m2)</option>
                <option value={'qh_giao_thong'}>QH giao thông(m2)</option>
              </CFormSelect>
              <CFormInput
                value={item.dien_tichQh}
                onChange={(e) => thayDoiDienTichQh(e.target.value, index)}
                placeholder="Nhập số"
              />
              <CButton onClick={() => boDuLieuThua(index)} color={'danger'}>
                X
              </CButton>
            </CInputGroup>
          )
        })}
        <CButton onClick={themDuLieuThua} color="warning">
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
