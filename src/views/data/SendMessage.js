/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { cilArrowRight, cilMoney, cilStar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SendMessage(props) {
  const [goodwill, setGoodWill] = useState(null)
  const [intimacy, setIntimacy] = useState(null)
  const [minBudget, setMinBudget] = useState(null)
  const [maxBudget, setMaxBudget] = useState(null)
  const [caringArea, setCaringArea] = useState([])
  const [caringProduct, setCaringProduct] = useState([])

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
  return (
    <CContainer>
      <CRow>
        <CCol style={{ border: '1px solid black' }}>
          <div>
            <p>Name: {} </p>
          </div>
          <div></div>
          <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
            <option>Choose template</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
        <CCol style={{ border: '1px solid black' }}>
          <CForm>
            <CInputGroup className="mb-4 mt-2">
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
          <CButton color="primary" class="btn btn-primary mb-1">
            Filter
          </CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol style={{ border: '1px solid black' }}>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">
                  <CFormCheck inline id="inlineCheckbox1" value="" />
                </CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                <CTableHeaderCell scope="col">Job</CTableHeaderCell>
                <CTableHeaderCell scope="col">Location</CTableHeaderCell>
                <CTableHeaderCell scope="col">GoodWill</CTableHeaderCell>
                <CTableHeaderCell scope="col">Intimacy</CTableHeaderCell>
                <CTableHeaderCell scope="col">MinBudget</CTableHeaderCell>
                <CTableHeaderCell scope="col">MaxBudget</CTableHeaderCell>
                <CTableHeaderCell scope="col">Khu vực quan tâm</CTableHeaderCell>
                <CTableHeaderCell scope="col">Sản phẩm quan tâm</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableDataCell style={{ width: '200px' }}>
                  <CFormCheck inline id="inlineCheckbox1" value="" />
                </CTableDataCell>
                <CTableDataCell>Name</CTableDataCell>
                <CTableDataCell>phone</CTableDataCell>
                <CTableDataCell>age</CTableDataCell>
                <CTableDataCell>job</CTableDataCell>
                <CTableDataCell>user arena</CTableDataCell>
                <CTableDataCell>goodwill</CTableDataCell>
                <CTableDataCell>intimacy</CTableDataCell>
                <CTableDataCell>minBudget</CTableDataCell>
                <CTableDataCell>maxBudget</CTableDataCell>
                <CTableDataCell>caringArea</CTableDataCell>
                <CTableDataCell>caringProduct</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </CContainer>
  )
}
