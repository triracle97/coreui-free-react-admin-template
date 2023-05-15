/* eslint-disable prettier/prettier */
import {
  CButton,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
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
import React, { useEffect, useRef, useState } from 'react'
import ProductCreateModel from '../modal/ProductCreateModel'
import axios from 'axios'
import { BACKEND_HOST } from 'src/constant'
import Cookies from 'js-cookie'
import { getFormatTime } from '../../utils/index'
import InforProductModal from '../modal/InforProductModal'
import EditProductModal from '../modal/EditProductModal'

export default function Product() {
  const createProductModelRef = useRef()
  const inforModalRef = useRef()
  const editProductModalRef = useRef()

  const openEditProductModal = (item) => {
    editProductModalRef.current?.show()
    editProductModalRef.current?.passData(item)
  }
  const openCreateProduct = () => {
    createProductModelRef.current?.show()
  }
  const openInforProduct = (item) => {
    inforModalRef.current?.show()
    inforModalRef.current?.passData(item)
  }
  const [limit, setLimit] = useState(20)
  const [products, setProducts] = useState([])
  const [role, setRole] = useState(Cookies.get('role'))
  const [update, setUpdate] = useState(false)
  const [visible, setVisible] = useState(false)
  const [maxPage, setMaxPage] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [deleteid, setDeleteId] = useState('')

  useEffect(() => {
    getProductsData()
  }, [update, currentPage])
  useEffect(() => {
    axios.get(`${BACKEND_HOST}/product/count`).then((res) => {
      const { countProducts } = res.data
      console.log(res)
      setMaxPage(Math.floor((countProducts + limit - 1) / limit))
    })
  }, [])
  const getProductsData = () => {
    axios
      .get(`${BACKEND_HOST}/product`, {
        params: {
          limit,
        },
      })
      .then((res) => {
        const newProduct = res.data.products

        setProducts(newProduct)
        console.log('success')
      })
      .catch((err) => {
        console.log('Error while getting Product', err)
      })
    setUpdate(false)
  }
  const changeStatus = (id, value) => {
    axios
      .patch(`${BACKEND_HOST}/product/${id}`, {
        values: {
          status: value,
        },
      })
      .then((res) => {
        console.log(res)
        console.log('Change Status', value)
      })
      .catch((err) => {
        console.log('Error Change Status', err)
      })
    setUpdate(true)
  }
  const handleDelete = (id) => {
    setVisible(!visible)
    setDeleteId(id)
  }
  const deleteProduct = (id) => {
    axios
      .delete(`${BACKEND_HOST}/product/${id}`, {
        method: 'DELETE',
      })
      .then((res) => {
        console.log('success')
        console.log(id)
      })
      .catch((err) => {
        console.log('Error', err)
      })
    setUpdate(true)
  }
  const goToNextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <CRow>
      <CCol>
        <CButton onClick={openCreateProduct} className="px-4 mb-3">
          Create Product
        </CButton>
      </CCol>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">Action</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tên sản phẩm</CTableHeaderCell>
            <CTableHeaderCell scope="col">Loại sản phẩm</CTableHeaderCell>
            <CTableHeaderCell scope="col">Khu vực</CTableHeaderCell>
            <CTableHeaderCell scope="col">Ngày tạo</CTableHeaderCell>
            {role === 'admin' ? <CTableHeaderCell scope="col">Status</CTableHeaderCell> : <></>}
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {products.map((p) => (
            <CTableRow key={p._id}>
              <CTableDataCell>
                {role === 'admin' ? (
                  <>
                    <CButton
                      color="success"
                      className="mx-1"
                      onClick={() => changeStatus(p._id, 'approved')}
                    >
                      Accept
                    </CButton>
                    <CButton
                      color="secondary"
                      className="mx-1"
                      onClick={() => changeStatus(p._id, 'rejected')}
                    >
                      Reject
                    </CButton>
                  </>
                ) : (
                  <></>
                )}
                <CButton
                  color="danger"
                  variant="outline"
                  className="mx-1"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </CButton>
                <CModal visible={visible} onClose={() => setVisible(false)}>
                  <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>Cảnh báo</CModalTitle>
                  </CModalHeader>
                  <CModalBody>Bạn thực sự muốn xóa sản phẩm</CModalBody>
                  <CModalFooter>
                    <CButton color="primary" onClick={() => deleteProduct(deleteid)}>
                      Đúng
                    </CButton>
                    <CButton color="secondary" onClick={() => setVisible(false)}>
                      Không
                    </CButton>
                  </CModalFooter>
                </CModal>
                <CButton color="primary" className="mx-1" onClick={() => openEditProductModal(p)}>
                  Edit
                </CButton>
                <CButton color="info" className="mx-1" onClick={() => openInforProduct(p)}>
                  Info
                </CButton>
              </CTableDataCell>
              <CTableDataCell>{p.ten_san_pham}</CTableDataCell>
              <CTableDataCell>{p.loai_sp}</CTableDataCell>
              <CTableDataCell>{p.khu_vuc}</CTableDataCell>
              <CTableDataCell>{getFormatTime(p.created_at)}</CTableDataCell>

              <CTableDataCell>
                {p.status === 'pending' ? (
                  <CButton color={'danger'} className="mx-1">
                    {p.status}
                  </CButton>
                ) : (
                  <></>
                )}
                {p.status === 'approved' ? (
                  <CButton color={'success'} className="mx-1">
                    {p.status}
                  </CButton>
                ) : (
                  <></>
                )}
                {p.status === 'rejected' ? (
                  <CButton color={'secondary  '} className="mx-1">
                    {p.status}
                  </CButton>
                ) : (
                  <></>
                )}
              </CTableDataCell>
            </CTableRow>
          ))}
          <EditProductModal ref={editProductModalRef} getProductsData={getProductsData} />
          <InforProductModal ref={inforModalRef}></InforProductModal>
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
      <ProductCreateModel ref={createProductModelRef} getProductsData={getProductsData} />
    </CRow>
  )
}
