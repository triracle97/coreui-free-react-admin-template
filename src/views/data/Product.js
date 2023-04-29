/* eslint-disable prettier/prettier */
import { CButton, CCol, CRow } from '@coreui/react'
import React, { useRef } from 'react'
import ProductCreateModel from '../modal/ProductCreateModel'

export default function Product() {
  const createProductModelRef = useRef()
  const openCreateProduct = () => {
    createProductModelRef.current?.show()
  }

  return (
    <CRow>
      <CCol>
        <CButton onClick={openCreateProduct} className="px-4 mb-3">
          Create Product
        </CButton>
      </CCol>
      <ProductCreateModel ref={createProductModelRef} />
    </CRow>
  )
}
