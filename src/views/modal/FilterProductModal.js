/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState, useImperativeHandle } from 'react'
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
import {
  productType,
  khuVuc,
  phapLy,
  dien_tich_filter,
  phapLyDuAn
} from '../../constant';

const FilterProductModal = ({ handleSubmit }, ref) => {
  const [visible, setVisible] = useState(false)
  const [ten_sp, set_ten_sp] = useState('');
  const [loai_sp, set_loai_sp] = useState([]);
  const [khu_vuc, set_khu_vuc] = useState([]);
  const [phap_ly, set_phap_ly] = useState([]);
  const [dien_tich, set_dien_tich] = useState([]);
  const [phap_ly_du_an, set_phap_ly_du_an] = useState([]);

  const handleProduct = (e) => {
    const { value, checked } = e.target

    if (checked) {
      set_loai_sp((pre) => [...pre, value])
    } else {
      set_loai_sp((pre) => {
        return [...pre.filter((v) => v !== value)]
      })
    }
  }

  const handleKhuVuc = (e) => {
    const { value, checked } = e.target
    if (checked) {
      set_khu_vuc((pre) => [...pre, value])
    } else {
      set_khu_vuc((pre) => {
        return [...pre.filter((v) => v !== value)]
      })
    }
  }

  const handlePhapLy = (e) => {
    const { value, checked } = e.target
    if (checked) {
      set_phap_ly((pre) => [...pre, value])
    } else {
      set_phap_ly((pre) => {
        return [...pre.filter((v) => v !== value)]
      })
    }
  }

  const handleAddToArray = (e, setFn) => {
    const { value, checked } = e.target;
    if (checked) {
      setFn((pre) => [...pre, value])
    } else {
      setFn((pre) => {
        return [...pre.filter((v) => v !== value)]
      })
    }
  }

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true)
    },
  }))

  const onPressFilter = () => {
    const filter = {}
    if (ten_sp.length) filter.ten_san_pham = ten_sp
    if (khu_vuc.length) filter.khu_vuc = khu_vuc
    if (loai_sp.length) filter.loai_sp = loai_sp
    if (phap_ly.length) filter.phap_ly = phap_ly
    if (dien_tich.length) filter.dien_tich = dien_tich
    if (phap_ly_du_an.length) filter.phap_ly_du_an = phap_ly_du_an
    handleSubmit(filter)
    setVisible(false)
  }

  return (
    <CModal size={'lg'} visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Filter Product</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CInputGroupText className={'mb-3'}>
          Trường nào không muốn filter có thể bỏ trống
        </CInputGroupText>
        <CForm>
          <CInputGroup className="mb-3">
            <CInputGroupText>Tên</CInputGroupText>
            <CFormInput
              placeholder="Nhập tên sản phẩm"
              value={ten_sp}
              onChange={(event) => set_ten_sp(event.target.value)}
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
              Loại đất
            </div>
            {productType.map((product, index) => {
              return (
                <div
                  key={index}
                  className="input-group align-items-center"
                  style={{ maxWidth: '150px' }}>
                  <input
                    checked={loai_sp.includes(product.value)}
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value={product.value}
                    onChange={handleProduct}
                  />
                  <label>{product.name}</label>
                </div>
              )
            })}
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
              Khu vực
            </div>
            {khuVuc.map((khuvuc, index) => {
              return (
                <div
                  key={index}
                  className="input-group align-items-center"
                  style={{ maxWidth: '150px' }}>
                  <input
                    checked={khu_vuc.includes(khuvuc.value)}
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value={khuvuc.value}
                    onChange={handleKhuVuc}
                  />
                  <label>{khuvuc.name}</label>
                </div>
              )
            })}
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
              Pháp lý
            </div>
            {phapLy.map((phapLy, index) => {
              return (
                <div
                  key={index}
                  className="input-group align-items-center"
                  style={{ maxWidth: '200px' }}>
                  <input
                    checked={phap_ly.includes(phapLy.value)}
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value={phapLy.value}
                    onChange={handlePhapLy}
                  />
                  <label>{phapLy.name}</label>
                </div>
              )
            })}
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
              Diện tích
            </div>
            {dien_tich_filter.map((dientich, index) => {
              return (
                <div
                  key={index}
                  className="input-group align-items-center"
                  style={{ maxWidth: '200px' }}>
                  <input
                    checked={dien_tich.includes(dientich.value)}
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value={dientich.value}
                    onChange={(e) => handleAddToArray(e, set_dien_tich)}
                  />
                  <label>{dientich.name}</label>
                </div>
              )
            })}
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
              Pháp lý dự án (chỉ cho dự án)
            </div>
            {phapLyDuAn.map((dienTich, index) => {
              return (
                <div
                  key={index}
                  className="input-group align-items-center"
                  style={{ maxWidth: '300px' }}>
                  <input
                    checked={phap_ly_du_an.includes(dienTich.value)}
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value={dienTich.value}
                    onChange={(e) => handleAddToArray(e, set_phap_ly_du_an)}
                  />
                  <label>{dienTich.name}</label>
                </div>
              )
            })}
          </CInputGroup>
        </CForm>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Cancel
        </CButton>
        <CButton color="primary" onClick={onPressFilter}>
          Filter
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.forwardRef(FilterProductModal)
