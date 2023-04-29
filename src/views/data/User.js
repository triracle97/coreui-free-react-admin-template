import {
  CButton,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_HOST } from '../../constant'
import UserCreateModal from '../modal/UserCreateModal'
import Actions from './Actions'
import EditUserModel from '../modal/EditUserModel'

const User = () => {
  const [users, setUsers] = useState([])
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)

  const createUserModalRef = useRef()
  const editUserModelRef = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    getUsersData()
  }, [])

  const getUsersData = () => {
    axios
      .get(`${BACKEND_HOST}/user`, {
        params: {
          limit,
          offset,
        },
      })
      .then((res) => {
        const newUsers = res.data.users
        setUsers(newUsers)
      })
      .catch((err) => {
        console.log('Error while getting user', err)
      })
  }
  const deleteUser = () => {}
  const openCreateUser = () => {
    createUserModalRef.current?.show()
  }
  const openEditUser = () => {
    editUserModelRef.current?.show()
  }
  console.log(users)

  return (
    <CRow className="overflow-scroll">
      <CCol>
        <CButton onClick={openCreateUser} className="px-4 mb-3">
          Create user
        </CButton>
      </CCol>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            <CTableHeaderCell scope="col">Username</CTableHeaderCell>
            <CTableHeaderCell scope="col">Role</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {users.map((item, index) => {
            return (
              <CTableRow key={index}>
                <CTableDataCell style={{ width: '200px' }}>
                  <Actions openEditUser={openEditUser} item={item} getUsersData={getUsersData} />
                </CTableDataCell>
                <CTableDataCell>{item.username}</CTableDataCell>
                <CTableDataCell>{item.role}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <EditUserModel
                  item={item}
                  id={item.id}
                  username={item.username}
                  name={item.name}
                  password={item.password}
                  ref={editUserModelRef}
                />
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
      <CPagination aria-label="Page navigation example">
        <CPaginationItem aria-label="Previous" disabled>
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem>1</CPaginationItem>
        <CPaginationItem aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
      <UserCreateModal ref={createUserModalRef} getUsersData={getUsersData} />
    </CRow>
  )
}

export default User
