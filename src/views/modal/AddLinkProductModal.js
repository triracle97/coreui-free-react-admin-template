/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
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
import axios from 'axios'
import { BACKEND_HOST } from '../../constant'

const AddLinkProductModal = ({ getProductsData }, ref) => {
  const [visible, setVisible] = useState(false)
  const [url, setUrl] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [value, setValue] = useState()

  const handleSubmit = () => {
    axios
      .patch(`${BACKEND_HOST}/product/${value._id}`, {
        values: {
          product_link: url,
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

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true)
    },
    passData: (item) => {
      setValue(item)
    },
  }))
  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Add link product</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CForm>
          <CInputGroup className="mb-3">
            <CInputGroupText>URL</CInputGroupText>
            <CFormInput
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="URL"
              autoComplete="URL"
            />
          </CInputGroup>
        </CForm>
        {error && <CAlert color="danger">{'Error'}</CAlert>}
        {success && <CAlert color="success">{'Done'}</CAlert>}
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={handleSubmit}>
            Create
          </CButton>
        </CModalFooter>
      </CModalBody>
    </CModal>
  )
}
export default React.forwardRef(AddLinkProductModal)
