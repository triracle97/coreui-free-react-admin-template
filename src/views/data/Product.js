/* eslint-disable prettier/prettier */
import {
  CButton,
  CCol,
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

export default function Product() {
  const createProductModelRef = useRef()
  const openCreateProduct = () => {
    createProductModelRef.current?.show()
  }
  const [limit, setLimit] = useState(30)
  const [offset, setOffset] = useState(0)
  const [products, setProducts] = useState([])
  const [role, setRole] = useState(Cookies.get('role'))

  useEffect(() => {
    getProductsData()
  }, [])
  const getProductsData = () => {
    axios
      .get(`${BACKEND_HOST}/product`, {
        params: {
          limit,
          offset,
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
  }

  function getFormatTime(time) {
    const newTime = new Date(time)
    const date = newTime.getDate() < 10 ? `${newTime.getDate()}` : newTime.getDate()
    const month =
      newTime.getMonth() + 1 < 10 ? `0${newTime.getMonth() + 1}` : newTime.getMonth() + 1
    const year = newTime.getFullYear()
    const hour = newTime.getHours()
    const minute = newTime.getMinutes()
    return `${hour}:${minute} ${date}/${month}/${year}`
  }
  console.log(products)
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
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {products.map((p) => (
            <CTableRow key={p._id}>
              <CTableDataCell>
                {role === 'admin' ? (
                  <>
                    <CButton color="danger" className="mx-1">
                      {p.status}
                    </CButton>
                    <CButton color="success" className="mx-1">
                      Accept
                    </CButton>
                    <CButton color="secondary" className="mx-1">
                      Reject
                    </CButton>
                    <CButton color="danger" variant="outline" className="mx-1">
                      Delete
                    </CButton>
                    <CButton color="primary" className="mx-1">
                      Edit
                    </CButton>
                  </>
                ) : (
                  <CButton color="primary" className="mx-1">
                    Edit
                  </CButton>
                )}
              </CTableDataCell>
              <CTableDataCell>{p.ten_san_pham}</CTableDataCell>
              <CTableDataCell>{p.loai_sp}</CTableDataCell>
              <CTableDataCell>{p.khu_vuc}</CTableDataCell>
              <CTableDataCell>{getFormatTime(p.created_at)}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
      <ProductCreateModel ref={createProductModelRef} />
    </CRow>
  )
}
