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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilText } from '@coreui/icons'
import axios from 'axios'
import { BACKEND_HOST } from '../../constant'

const EditUserModel = ({}, ref) => {
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({})
  const [username, setUsername] = useState(null)
  const [name, setName] = useState(null)
  const [password, setPassword] = useState('')

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
      .patch(`${BACKEND_HOST}/user/${data.id}`, {
        values: { name, username, password },
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
        <CModalTitle>Edit User</CModalTitle>
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
              value={username ?? data.username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Username"
              autoComplete="username"
            />
          </CInputGroup>
          <CInputGroup className="mb-3">
            <CInputGroupText>
              <CIcon icon={cilLockLocked} />
            </CInputGroupText>
            <CFormInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </CInputGroup>
          <CInputGroup className="mb-4">
            <CInputGroupText>
              <CIcon icon={cilText} />
            </CInputGroupText>
            <CFormInput
              type="name"
              placeholder="Name"
              value={name ?? data.name}
              onChange={(event) => setName(event.target.value)}
            />
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

export default React.forwardRef(EditUserModel)
