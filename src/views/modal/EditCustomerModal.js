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

const EditCustomerModal = ({}, ref) => {
  const [data, setData] = useState({})
  const [visible, setVisible] = useState(false)
  const [phone, setPhone] = useState(null)
  const [name, setName] = useState(null)
  const [age, setAge] = useState(null)
  const [job, setJob] = useState(null)
  const [userArea, setUserArea] = useState(null)
  const [goodwill, setGoodWill] = useState(null)
  const [intimacy, setIntimacy] = useState(null)
  const [minBudget, setMinBudget] = useState(null)
  const [maxBudget, setMaxBudget] = useState(null)
  const [caringArea, setCaringArea] = useState([])
  const [caringProduct, setCaringProduct] = useState([])

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const arena = data.caringArea
  const provinces = provinces_item

  useEffect(() => {
    if (data) {
      setPhone(data.phone);
      setName(data.name);
      setAge(data.age);
      setJob(data.job);
      setUserArea(data.userArea);
      setGoodWill(data.goodwill);
      setIntimacy(data.intimacy);
      setMaxBudget(data.maxBudget);
      setMinBudget(data.minBudget);
      setCaringArea(data.caringArea);
      setCaringProduct(data.caringProduct);
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 3000)
  }, [error, success])

  function handleArea(e) {
    const { value, checked } = e.target

    if (checked) {
      setCaringArea((pre) => [...pre, value])
    } else {
      setCaringArea((pre) => {
        return [...pre.filter((v) => v !== value)]
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
    passData: (item) => {
      setData(item)
    },
  }))
  const handleSubmit = () => {
    axios
      .patch(`${BACKEND_HOST}/customer/${data._id}`, {
        values: {
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
        }
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
        <CModalTitle>Update Customer</CModalTitle>
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
              value={name ?? data.name}
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
              value={phone ?? data.phone}
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
              value={age ?? data.age}
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
              value={job ?? data.job}
              onChange={(event) => setJob(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilLocationPin} />
            </CInputGroupText>
            <CFormSelect
              aria-label="Default select example"
              value={userArea ?? data.userArea}
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
              value={goodwill ?? data.goodwill}
              onChange={(e) => setGoodWill(e.target.value)}
            >
              <option>Thiện chí</option>
              <option value="S">S</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </CFormSelect>
            <CFormSelect
              aria-label="Default select example"
              value={intimacy ?? data.intimacy}
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
              value={minBudget ?? data.minBudget}
              onChange={(event) => setMinBudget(event.target.value)}
            />
            <CInputGroupText>
              <CIcon icon={cilArrowRight} color="light" />
            </CInputGroupText>
            <CFormInput
              type="maxBudget"
              placeholder="Max Budget(tỷ)"
              value={maxBudget ?? data.maxBudget}
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
                    checked={caringArea?.includes('da-nang')}
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
                    checked={caringArea?.includes('khanh-hoa')}
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
                    checked={caringArea?.includes('phu-quoc')}
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
                    checked={caringArea?.includes('sai-gon')}
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
                    checked={caringArea?.includes('dong-nai')}
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
                    checked={caringArea?.includes('vung-tau')}
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
                    checked={caringProduct?.includes('dat_nen')}
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
                    checked={caringProduct?.includes('dat_lon')}
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
                    checked={caringProduct?.includes('bds_trung_tam')}
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
                    checked={caringProduct?.includes('bds_dong_tien')}
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
                    checked={caringProduct?.includes('du_an')}
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
          Update
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.forwardRef(EditCustomerModal)
