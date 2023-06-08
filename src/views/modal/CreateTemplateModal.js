/* eslint-disable react/prop-types */
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
  CFormTextarea,
  CFormInput,
  CInputGroup,
  CAlert
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import axios from 'axios'
import { BACKEND_HOST } from '../../constant'

const CreateTemplateModal = ({  }, ref) => {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true)
    },
  }))

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 2000)
  }, [error, success])

  const handleSubmit = () => {
    axios
      .post(`${BACKEND_HOST}/template/create`, {
        name,
        content
      })
      .then((res) => {
        setSuccess(true)
        setName('')
        setContent('')
      })
      .catch((err) => {
        console.log('Error', err)
        setError(true)
      })
  }

  return (
    <CModal size={'xl'} visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader closeButton>
        <CModalTitle>Create Template</CModalTitle>
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
              placeholder="Tên template"
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CFormTextarea
              style={{
                height: 200
              }}
              onChange={(event) => setContent(event.target.value)}
              placeholder={'Nội dung template'}/>
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

export default React.forwardRef(CreateTemplateModal)
