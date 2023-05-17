/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React, { useState, useImperativeHandle, useRef, useEffect } from 'react'
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CInputGroupText,
  CFormInput,
  CInputGroup,
  CAlert,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilText } from '@coreui/icons'
import axios from 'axios'
import { BACKEND_HOST, productType } from '../../constant'
import DatNen from 'src/components/forms/DatNen'
import KhachSan from 'src/components/forms/KhachSan'
import DuAn from 'src/components/forms/DuAn'
import DatTs from 'src/components/forms/DatTs'

const EditProductModal = ({ getProductsData }, ref) => {
  const [visible, setVisible] = useState(false)
  const [ten_san_pham, setTen_san_pham] = useState(null)
  const [nguon_sp, setNguon_sp] = useState(null)
  const [khu_vuc, setKhu_vuc] = useState(null)
  const [dia_chi, setDia_chi] = useState(null)
  const [loai_sp, setLoai_sp] = useState('')
  const [khu_vuc_khac, setKhu_vuc_khac] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [value, setValue] = useState({})
  const data = useRef({})

  useEffect(() => {
    setLoai_sp(value.loai_sp)
  }, [value])
  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true)
    },
    passData: (item) => {
      setValue(item)
    },
  }))
  console.log(value)
  const handleSubmit = () => {
    axios
      .patch(`${BACKEND_HOST}/product/create`, {
        product: {
          nguon_sp,
          ten_san_pham,
          khu_vuc,
          dia_chi,
          khu_vuc_khac,
          loai_sp,
          created_at: Date.now(),
          other_data: {
            tong_dien_tich: data.current.tong_dien_tich,
            dien_tich_san: data.current.dien_tich_san,
            phap_ly: data.current.phap_ly,
            phap_ly_infor: {
              khac: data.current.khac,
              so_to: data.current.so_to,
              so_thua: data.current.so_thua,
              ma_lo: data.current.ma_lo,
            },
            muc_dich_su_dung_dat: {
              hien_trang: {
                dat_o: data.current.ht_dat_o,
                CLN: data.current.ht_cln,
                BHK: data.current.ht_bhk,
                LUC: data.current.ht_luc,
                RSX: data.current.ht_rsx,
                NTS: data.current.ht_nts,
                TMD: data.current.ht_tmd,
                cong_cong: data.current.ht_cong_cong,
                qh_giao_thong: data.current.ht_qh_giao_thong,
              },
              qui_hoach: {
                dat_o: data.current.dat_o,
                CLN: data.current.cln,
                BHK: data.current.bhk,
                LUC: data.current.luc,
                RSX: data.current.rsx,
                NTS: data.current.nts,
                TMD: data.current.tmd,
                cong_cong: data.current.cong_cong,
                qh_giao_thong: data.current.qh_giao_thong,
              },
            },
            dinh_vi: data.current.dinh_vi,
            gia_ban: data.current.gia_ban,
            hoa_hong: data.current.hoa_hong,
            nguon: data.current.nguon,
            file_media_raw: data.current.file_media_raw,
            note: data.current.note,
            tai_san_gan_lien: data.current.tai_san_gan_lien,
            dong_tien: data.current.dong_tien,
            ten_ks: data.current.ten_ks,
            so_sao: data.current.so_sao,
            trang_thai: data.current.trang_thai,
            hien_trang_phap_ly: data.current.hien_trang_phap_ly,
            so_tang: data.current.so_tang,
            so_phong: data.current.so_phong,
            muc_dich_su_dung_dat_khach_san: data.current.muc_dich_su_dung_dat_khach_san,
            chu_so_huu: data.current.chu_so_huu,
            chu_dau_tu: data.current.chu_dau_tu,
            doanh_thu_thang: data.current.doanh_thu_thang,
            loi_nhuan_thang: data.current.loi_nhuan_thang,
            loai_hinh: data.current.loai_hinh,
            ten_du_an: data.current.ten_du_an,
            hinh_thuc_chuyen_nhuong: data.current.hinh_thuc_chuyen_nhuong,
            phuong_an_thanh_toan: data.current.phuong_an_thanh_toan,
          },
        },
      })
      .then((res) => {
        console.log(res)
        setSuccess(true)
        getProductsData()
      })
      .catch((err) => {
        console.log('Error', err)
        setError(true)
      })
  }

  return (
    <CModal size="xl" visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Edit Product</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {error && <CAlert color="danger">{'Error'}</CAlert>}
        {success && <CAlert color="success">{'Done'}</CAlert>}
        <CForm>
          <CInputGroup className="mb-3">
            <CInputGroupText>Nguồn</CInputGroupText>
            <CFormSelect
              aria-label="Default select example"
              value={nguon_sp ?? value.nguon_sp}
              onChange={(e) => setNguon_sp(e.target.value)}
            >
              <option>Chọn nguồn</option>
              <option value="khanh">Khánh</option>
              <option value="dat">Đạt</option>
            </CFormSelect>
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>Tên sản phẩm</CInputGroupText>
            <CFormInput
              placeholder="Nhập tên sản phẩm"
              value={ten_san_pham ?? value.ten_san_pham}
              onChange={(event) => setTen_san_pham(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>Khu vực</CInputGroupText>
            <CFormSelect
              aria-label="Default select example"
              value={khu_vuc ?? value.khu_vuc}
              onChange={(e) => setKhu_vuc(e.target.value)}
            >
              <option>Chọn khu vực</option>
              <option value="da-nang">Đà Nẵng</option>
              <option value="quang-nam">Quảng Nam</option>
              <option value="khanh-hoa">Khánh Hòa</option>
              <option value="lam-dong">Lâm Đồng</option>
              <option value="tp-hcm">TP.Hồ CHí Minh</option>
              <option value="dong-nai">Đồng Nai</option>
              <option value="vung-tau">Vũng Tàu</option>
              <option value="kien-giang">Kiên Giang</option>
              <option value="">Khác</option>
            </CFormSelect>
            {/* {khu_vuc === '' ? (
              <CFormInput
                type="text"
                value={khu_vuc_khac}
                placeholder="nhập tỉnh"
                onChange={(e) => setKhu_vuc_khac(e.target.value)}
              />
            ) : (
              <></>
            )} */}
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>Địa chỉ</CInputGroupText>
            <CFormInput
              placeholder="Nhập địa chỉ"
              value={dia_chi ?? value.dia_chi}
              onChange={(event) => setDia_chi(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>Loại sản phẩm</CInputGroupText>
            <CFormSelect
              aria-label="Default select example"
              value={loai_sp}
              onChange={(e) => setLoai_sp(e.target.value)}
            >
              <option value="">Chọn loại sản phẩm</option>
              {productType.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </CFormSelect>
          </CInputGroup>

          {loai_sp?.includes('datNen') ? <DatNen data={data} value={value.other_data} /> : <></>}
          {loai_sp?.includes('khachSan') ? (
            <KhachSan data={data} value={value.other_data} />
          ) : (
            <></>
          )}
          {loai_sp?.includes('duAn') ? <DuAn data={data} value={value.other_data} /> : <></>}
          {loai_sp?.includes('datTs') ? <DatTs data={data} value={value.other_data} /> : <></>}
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Cancel
        </CButton>
        <CButton color="primary" onClick={handleSubmit}>
          Update
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.forwardRef(EditProductModal)