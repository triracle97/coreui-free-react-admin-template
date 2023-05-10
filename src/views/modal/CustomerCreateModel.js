/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { useState, useImperativeHandle, useEffect } from 'react'
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
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilLockLocked,
  cilUser,
  cilText,
  cilPhone,
  cilFactory,
  cilBriefcase,
  cilLocationPin,
  cilStar,
  cilMoney,
  cilArrowRight,
} from '@coreui/icons'
import axios from 'axios'
import { BACKEND_HOST } from '../../constant'
import provinces_item from './Provinces.json'

const CustomerCreateModel = ({}, ref) => {
  const [visible, setVisible] = useState(false)
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [job, setJob] = useState('')
  const [userArea, setUserArea] = useState('')
  const [goodwill, setGoodWill] = useState('')
  const [intimacy, setIntimacy] = useState('')
  const [minBudget, setMinBudget] = useState('')
  const [maxBudget, setMaxBudget] = useState('')
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
    console.log(value, checked)
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

  const handleSubmit = () => {
    axios
      .post(`${BACKEND_HOST}/customer/create`, {
        name,
        phone,
        age,
        job,
        userArea,
        goodwill,
        intimacy,
        minBudget,
        maxBudget,
        caringArea,
        caringProduct,
      })
      .then((res) => {
        setSuccess(true)
      })
      .catch((err) => {
        console.log('Error', err)
        setError(true)
      })
  }

  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Create Customer</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {error && <CAlert color="danger">{'Error'}</CAlert>}
        {success && <CAlert color="success">{'Done'}</CAlert>}
        <CForm>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilUser} />
            </CInputGroupText>
            <CFormInput
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              autoComplete="name"
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilPhone} />
            </CInputGroupText>
            <CFormInput
              placeholder="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilText} />
            </CInputGroupText>
            <CFormInput
              type="age"
              placeholder="Age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilBriefcase} />
            </CInputGroupText>
            <CFormInput
              type="job"
              placeholder="Job"
              value={job}
              onChange={(event) => setJob(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilLocationPin} />
            </CInputGroupText>
            <CFormSelect
              aria-label="Default select example"
              value={userArea}
              onChange={(e) => setUserArea(e.target.value)}
            >
              <option>Chọn thành phố</option>
              {provinces.map((p) => {
                return (
                  <option key={p.code} value={p.name}>
                    {p.name}
                  </option>
                )
              })}
            </CFormSelect>
          </CInputGroup>
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
                    value="da-nang"
                    onChange={handleArea}
                  />
                  <label>Đà Nẵng</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="khanh-hoa"
                    onChange={handleArea}
                  />
                  <label>Khánh Hòa</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="phu-quoc"
                    onChange={handleArea}
                  />
                  <label>Phú Quốc</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="sai-gon"
                    onChange={handleArea}
                  />
                  <label>Sài Gòn</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="dong-nai"
                    onChange={handleArea}
                  />
                  <label>Đồng Nai</label>
                </div>
                <div className="input-group align-items-center" style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="vung-tau"
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
                    value="dat_nen"
                    onChange={handleProduct}
                  />
                  <label>Đất nền</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="dat_lon"
                    onChange={handleProduct}
                  />
                  <label>Đất lớn</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="bds_trung_tam"
                    onChange={handleProduct}
                  />
                  <label>BĐS trung tâm</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="bds_dong_tien"
                    onChange={handleProduct}
                  />
                  <label>BĐS dòng tiền</label>
                </div>
                <div className="input-group align-items-center  " style={{ maxWidth: '150px' }}>
                  <input
                    style={{ width: '16px', height: '16px' }}
                    className="mx-1"
                    type="checkbox"
                    value="du_an"
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
        <CButton color="primary" onClick={handleSubmit}>
          Create
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.forwardRef(CustomerCreateModel)
