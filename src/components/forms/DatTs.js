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

export default function DatTs({ data }) {
  const [tong_dien_tich, setTong_dien_tich] = useState('')
  const [phap_ly, setPhap_ly] = useState('')
  const [khac, setKhac] = useState('')
  const [so_to, setSo_to] = useState('')
  const [so_thua, setSo_thua] = useState(1)
  const [ma_lo, setMa_lo] = useState('')
  const [dong_tien, setDong_tien] = useState('')
  const [du_lieu_thua, setDu_lieu_thua] = useState([])

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
      du_lieu_thua,
      dong_tien,
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
        tai_san_gan_lien: '',
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
      data.current.du_lieu_thua[index].tai_san_gan_lien = item.tai_san_gan_lien
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
    du_lieu_thua,
    dong_tien,
    dinh_vi,
    gia_ban,
    hoa_hong,
    nguon,
    note,
    file_media_raw,
    data.current.du_lieu_thua,
  ])

  const themDuLieuThua = () => {
    setDu_lieu_thua([...du_lieu_thua, {
      thua_dat_so: '',
      tai_san_gan_lien: '',
      to_ban_do_so: '',
      htld: '',
      qhld: '',
      dien_tichHt: '',
      dien_tichQh: ''
    }])
  }

  const thayDoiThuaDat = (thuaso, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].thua_dat_so = thuaso
      return [...oldValue]
    })
  }

  const thayDoiTaiSanGanLien = (taisan, index) => {
    setDu_lieu_thua((oldValue) => {
      oldValue[index].tai_san_gan_lien = taisan
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

  // const themQuyHoach = () => {
  //   setQuy_hoach([...quy_hoach, {}])
  // }

  // const xoaHienTrang = (index) => {
  //   setTimeout(() => {
  //     setDu_lieu_thua((olddu_lieu_thua) => {
  //       oldValue.splice(index, 1)
  //       return [...oldValue]
  //     })
  //   }, 100)
  // }

  // const xoaQuyHoach = (index) => {
  //   setTimeout(() => {
  //     setQuy_hoach((oldValue) => {
  //       oldValue.splice(index, 1)
  //       return [...oldValue]
  //     })
  //   }, 100)
  // }

  // const thayDoiThuaHienTrang = (thuaMoi, index) => {
  //   setHien_trang((oldValue) => {
  //     oldValue[index].thua = thuaMoi
  //     return [...oldValue]
  //   })
  // }

  // const thayDoiLoaiDatHienTrang = (loaiDat, index) => {
  //   setHien_trang((oldValue) => {
  //     oldValue[index].loaiDat = loaiDat
  //     return [...oldValue]
  //   })
  // }

  // const thayDoiDienTich = (dienTich, index) => {
  //   setHien_trang((oldValue) => {
  //     oldValue[index].dienTich = dienTich
  //     return [...oldValue]
  //   })
  // }

  // const thayDoiSoThuaQHSDD = (thuaMoi, index) => {
  //   setQuy_hoach((oldValue) => {
  //     oldValue[index].thua = thuaMoi
  //     return [...oldValue]
  //   })
  // }

  // const thayDoiLoaiDatQHSDD = (loaiDat, index) => {
  //   setQuy_hoach((oldValue) => {
  //     oldValue[index].loaiDat = loaiDat
  //     return [...oldValue]
  //   })
  // }

  // const thayDoiDienTichQHSDD = (dienTich, index) => {
  //   setQuy_hoach((oldValue) => {
  //     oldValue[index].dienTich = dienTich
  //     return [...oldValue]
  //   })
  // }

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
            onChange={(e) => setSo_thua(e.target.value)}
            value={so_thua}
            placeholder="Nhập số thửa"
          />
        </CInputGroup>
      ) : (
        <></>
      )}

      <CInputGroup className="mb-2">
        <CInputGroupText>Dòng tiền</CInputGroupText>
        <CFormInput
          value={dong_tien}
          onChange={(e) => setDong_tien(e.target.value)}
          placeholder=""
        />
      </CInputGroup>
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
                value={item.tai_san_gan_lien}
                onChange={(e) => thayDoiTaiSanGanLien(e.target.value, index)}
                placeholder="nhập tài sản gắn liền"
              />
              <CFormInput
                value={item.to_ban_do_so}
                onChange={(e) => thayDoiToBanDo(e.target.value, index)}
                placeholder="Tờ bản đồ số"
              />
              <CFormSelect
                value={item.htld}
                onChange={(e) => thayDoiLoaiHienTrang(e.target.value, index)}>
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
                value={item.dien_tichHt}
                onChange={(e) => thayDoiDienTichHt(e.target.value, index)}
                placeholder="Nhập số"
              />
              <CFormSelect
                value={item.qhld}
                onChange={(e) => thayDoiLoaiQH(e.target.value, index)}>
                <option>Quy hoạch</option>
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
                value={item.dien_tichQh}
                onChange={(e) => thayDoiDienTichQh(e.target.value, index)}
                placeholder="Nhập số"
              />
              <CButton onClick={() => boDuLieuThua(index)} color={'danger'}>X</CButton>
            </CInputGroup>
          )
        })}
        <CButton onClick={themDuLieuThua} color="warning">
          Thêm
        </CButton>
      </CListGroup>
      {/* <CListGroup className="border border-dark p-1 mb-1">
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
      </CListGroup> */}
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
