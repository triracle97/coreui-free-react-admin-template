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
import CIcon from '@coreui/icons-react'
import { cilStar, cilMoney, cilArrowRight } from '@coreui/icons'
import provinces_item from './Provinces.json'

const FilterCustomerModal = ({ handleSubmit }, ref) => {
  const [visible, setVisible] = useState(false)
  const [goodwill, setGoodWill] = useState(null)
  const [intimacy, setIntimacy] = useState(null)
  const [minBudget, setMinBudget] = useState(null)
  const [maxBudget, setMaxBudget] = useState(null)
  const [caringArea, setCaringArea] = useState([])
  const [caringProduct, setCaringProduct] = useState([])

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const provinces = provinces_item

  function handleArea(e) {
    const { value, checked } = e.target

    if (checked) {
      setCaringArea((pre) => [...pre, value])
    } else {
      setCaringArea((pre) => {
        return [...pre.filter((v) => v === value)]
      })
    }
  }
  function handleProduct(e) {
    const { value, checked } = e.target

    if (checked) {
      setCaringProduct((pre) => [...pre, value])
    } else {
      setCaringProduct((pre) => {
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
    if (goodwill) filter.goodwill = goodwill
    if (intimacy) filter.intimacy = intimacy
    if (minBudget) filter.minBudget = minBudget
    if (maxBudget) filter.maxBudget = maxBudget
    if (caringArea.length) filter.caringArea = caringArea
    if (caringProduct.length) filter.caringProduct = caringProduct
    handleSubmit(filter)
    setVisible(false)
  }

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Create Customer</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {error && <CAlert color="danger">{'Error'}</CAlert>}
        {success && <CAlert color="success">{'Done'}</CAlert>}
        <CInputGroupText className={'mb-3'}>
          Trường nào không muốn filter có thể bỏ trống
        </CInputGroupText>
        <CForm>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilStar} />
            </CInputGroupText>
            <CFormSelect
              aria-label="Default select example"
              value={goodwill}
              onChange={(e) => setGoodWill(e.target.value)}
            >
              <option>Thiện chí</option>
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </CFormSelect>
            <CFormSelect
              aria-label="Default select example"
              value={intimacy}
              onChange={(e) => setIntimacy(e.target.value)}
            >
              <option>Thân thiết</option>
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </CFormSelect>
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilMoney} />
            </CInputGroupText>
            <CFormInput
              type="minBudget"
              placeholder="Min Budget(tỷ)"
              value={minBudget}
              onChange={(event) => setMinBudget(event.target.value)}
            />
            <CInputGroupText>
              <CIcon icon={cilArrowRight} color="light" />
            </CInputGroupText>
            <CFormInput
              type="maxBudget"
              placeholder="Max Budget(tỷ)"
              value={maxBudget}
              onChange={(event) => setMaxBudget(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
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
                Khu vực quan tâm
              </div>
              <CInputGroup>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Đà Nẵng"
                    onChange={handleArea}
                  />
                  <label>Đà Nẵng</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Khánh Hòa"
                    onChange={handleArea}
                  />
                  <label>Khánh Hòa</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Phú Quốc"
                    onChange={handleArea}
                  />
                  <label>Phú Quốc</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Sài Gòn"
                    onChange={handleArea}
                  />
                  <label>Sài Gòn</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Đồng Nai"
                    onChange={handleArea}
                  />
                  <label>Đồng Nai</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Vũng Tàu"
                    onChange={handleArea}
                  />
                  <label>Vũng Tàu</label>
                </div>
              </CInputGroup>
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
                Sản phẩm quan tâm
              </div>
              <CInputGroup>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Đất nền"
                    onChange={handleProduct}
                  />
                  <label>Đất nền</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Đất lớn"
                    onChange={handleProduct}
                  />
                  <label>Đất lớn</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="BĐS trung tâm"
                    onChange={handleProduct}
                  />
                  <label>BĐS trung tâm</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="BĐS dòng tiền"
                    onChange={handleProduct}
                  />
                  <label>BĐS dòng tiền</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="Dự án"
                    onChange={handleProduct}
                  />
                  <label>Dự án</label>
                </div>
              </CInputGroup>
            </CInputGroup>
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

export default React.forwardRef(FilterCustomerModal)
