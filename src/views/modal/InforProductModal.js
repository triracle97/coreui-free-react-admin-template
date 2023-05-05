/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
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
  CRow,
  CCol,
} from '@coreui/react'

import axios from 'axios'
import { BACKEND_HOST } from '../../constant'

const InforProductModal = ({}, ref) => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState({})

  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true)
    },
    passData: (item) => {
      setData(item)
    },
  }))
  console.log(data)
  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Product information</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {error && <CAlert color="danger">{'Error'}</CAlert>}
        {success && <CAlert color="success">{'Done'}</CAlert>}

        <p>
          <span className="px-2">Tên sản phẩm:</span> {data.ten_san_pham}
        </p>
        <p>
          <span className="px-2">Địa chỉ:</span> {data.dia_chi}
        </p>
        <p>
          <span className="px-2">Nguồn sản phẩm:</span>
          {data.nguon_sp}
        </p>
        <p>
          <span className="px-2">Khu vực:</span>
          {data.khu_vuc}
        </p>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Cancel
        </CButton>
        <CButton color="primary">Update</CButton>
      </CModalFooter>
    </CModal>
  )
}

export default React.forwardRef(InforProductModal)
