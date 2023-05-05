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
  const [maxPage, setMaxPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const createUserModalRef = useRef()
  const editUserModelRef = useRef()

  const navigate = useNavigate()

  useEffect(() => {
    getUsersData()
  }, [currentPage])

  useEffect(() => {
    axios.get(`${BACKEND_HOST}/user/count`).then((res) => {
      const { countUsers } = res.data
      setMaxPage(Math.floor((countUsers + limit - 1) / limit))
    })
  }, [])

  const getUsersData = () => {
    const offset = (currentPage - 1) * limit
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

  const openCreateUser = () => {
    createUserModalRef.current?.show()
  }
  const openEditUser = (item) => {
    editUserModelRef.current?.show()
    editUserModelRef.current?.passData(item)
  }

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

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
          {users.map((item) => {
            return (
              <CTableRow key={item.id}>
                <CTableDataCell style={{ width: '200px' }}>
                  <Actions
                    openEditUser={() => openEditUser(item)}
                    item={item}
                    getUsersData={getUsersData}
                  />
                </CTableDataCell>
                <CTableDataCell>{item.username}</CTableDataCell>
                <CTableDataCell>{item.role}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
              </CTableRow>
            )
          })}
          <EditUserModel ref={editUserModelRef} />
        </CTableBody>
      </CTable>
      <CPagination pages={10} aria-label="Page navigation example">
        <CPaginationItem
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </CPaginationItem>
        <CPaginationItem>{currentPage}</CPaginationItem>
        <CPaginationItem
          disabled={currentPage === maxPage}
          onClick={goToNextPage}
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </CPaginationItem>
      </CPagination>
      <UserCreateModal ref={createUserModalRef} getUsersData={getUsersData} />
    </CRow>
  )
}

export default User
