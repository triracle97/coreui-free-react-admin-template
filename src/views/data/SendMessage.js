/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { cilArrowRight, cilMoney, cilStar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAlert,
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CFormSelect,
  CFormTextarea,
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
import axios from 'axios'
import { BACKEND_HOST } from '../../constant'

export default function SendMessage(props) {
  const [productName, setProductName] = useState('')
  const [productLink, setProductLink] = useState('')
  const [productId, setProductId] = useState('')
  const [templates, setTemplates] = useState([])
  const [customers, setCustomers] = useState([])
  const [goodwill, setGoodWill] = useState(null)
  const [intimacy, setIntimacy] = useState(null)
  const [minBudget, setMinBudget] = useState(null)
  const [maxBudget, setMaxBudget] = useState(null)
  const [caringArea, setCaringArea] = useState([])
  const [caringProduct, setCaringProduct] = useState([])
  const [templateContent, setTemplateContent] = useState('')
  const [templateId, setTemplateId] = useState(null)
  const [selectedCustomers, setSelectedCustomers] = useState([])
  const [shouldSelectAll, setShouldSelectAll] = useState(false)
  const [isSent, setIsSent] = useState(false);

  const location = useLocation()

  useEffect(() => {
    setProductName(location?.state?.productProps?.productName)
    setProductLink(location?.state?.productProps?.productLink)
    setProductId(location?.state?.productProps?.productId)
    getTemplate()
  }, [])

  const getTemplate = () => {
    axios
      .get(`${BACKEND_HOST}/template`)
      .then((res) => {
        const newTemplate = res.data.templates

        setTemplates(newTemplate)
      })
      .catch((err) => {
        console.log('Error while getting Product', err)
      })
  }

  const selectTemplate = (template) => {
    const foundTemplate = templates.find(
      (_template) => _template._id.toString() === template.toString(),
    )
    setTemplateContent(foundTemplate.content)
    setTemplateId(foundTemplate._id)
  }

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

  const handleFilterSubmit = () => {
    const filter = {}
    if (goodwill) filter.goodwill = goodwill
    if (intimacy) filter.intimacy = intimacy
    if (minBudget) filter.minBudget = minBudget
    if (maxBudget) filter.maxBudget = maxBudget
    if (caringArea.length) filter.caringArea = caringArea
    if (caringProduct.length) filter.caringProduct = caringProduct
    axios
      .get(`${BACKEND_HOST}/customer/filter`, {
        params: {
          ...filter,
          limit: 10000,
        },
      })
      .then((res) => {
        if (res.data?.customers) {
          setCustomers(res.data?.customers)
        }
      })
  }

  const selectCustomer = (customer) => {
    const foundCustomer = selectedCustomers.findIndex((_customer) => _customer._id === customer._id)
    if (foundCustomer === -1) {
      setSelectedCustomers([...selectedCustomers, customer])
    } else {
      setSelectedCustomers((oldValue) => {
        oldValue.splice(foundCustomer, 1)
        return [...oldValue]
      })
    }
  }

  const toggleAll = () => {
    if (!shouldSelectAll) {
      setShouldSelectAll(true)
      setSelectedCustomers(customers)
    } else {
      setShouldSelectAll(false)
      setSelectedCustomers([])
    }
  }

  const handleSend = async () => {
    await axios.post(`${BACKEND_HOST}/sms/send`, {
      selectedCustomers: selectedCustomers.map(user => user._id),
      templateId,
      productId
    })
    setIsSent(true);
  }

  return (
    <CContainer>
      <CRow>
        <CCol style={{ border: '1px solid black' }}>
          <div>
            <p>Name: {productName} </p>
          </div>
          <div>
            <p>Link: {productLink} </p>
          </div>
          <CFormSelect
            onChange={(e) => selectTemplate(e.target.value)}
            size="sm"
            className="mb-3"
            aria-label="Small select example"
          >
            <option>Choose template</option>
            {templates.map((template, index) => (
              <option key={index} value={template._id}>
                {template.name}
              </option>
            ))}
          </CFormSelect>
          {templateContent.length > 0 && <CFormTextarea value={templateContent} />}
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
          <CButton onClick={handleFilterSubmit} color="primary" className="btn btn-primary mb-1">
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
                  <CFormCheck
                    onClick={toggleAll}
                    onChange={() => {}}
                    checked={shouldSelectAll}
                    inline
                    id="inlineCheckbox1"
                    value=""
                  />
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
              {customers.map((customer, index) => {
                const isChecked = !!selectedCustomers.find(
                  (_customer) => _customer._id === customer._id,
                )
                return (
                  <CTableRow key={index}>
                    <CTableDataCell style={{ width: '200px' }}>
                      <CFormCheck
                        checked={isChecked}
                        onClick={() => selectCustomer(customer)}
                        onChange={() => {}}
                      />
                    </CTableDataCell>
                    <CTableDataCell>{customer.name}</CTableDataCell>
                    <CTableDataCell>{customer.phone}</CTableDataCell>
                    <CTableDataCell>{customer.age}</CTableDataCell>
                    <CTableDataCell>{customer.job}</CTableDataCell>
                    <CTableDataCell>{customer.userArea}</CTableDataCell>
                    <CTableDataCell>{customer.goodwill}</CTableDataCell>
                    <CTableDataCell>{customer.intimacy}</CTableDataCell>
                    <CTableDataCell>{customer.minBudget}</CTableDataCell>
                    <CTableDataCell>{customer.maxBudget}</CTableDataCell>
                    <CTableDataCell>{customer.caringArea.toString()}</CTableDataCell>
                    <CTableDataCell>{customer.caringProduct.toString()}</CTableDataCell>
                  </CTableRow>
                )
              })}
              <CButton onClick={handleSend} color="primary" className="btn btn-primary mt-3">
                Send
              </CButton>
              {isSent &&
                <CAlert color="success">{'Done'}</CAlert>}
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </CContainer>
  )
}
