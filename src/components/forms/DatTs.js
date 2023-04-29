/* eslint-disable prettier/prettier */
import { CButton, CFormInput, CFormSelect, CInputGroup, CInputGroupText } from '@coreui/react'
import React, { useState } from 'react'

export default function DatTs() {
  const [phap_ly, setPhap_ly] = useState('')
  console.log(phap_ly)
  return (
    <>
      <CInputGroup className="mb-2">
        <CInputGroupText>Tổng diện tích</CInputGroupText>
        <CFormInput placeholder="Nhập tổng diện tích" />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Pháp lý</CInputGroupText>
        <CFormSelect
          aria-label="Default select example"
          value={phap_ly}
          onChange={(e) => setPhap_ly(e.target.value)}
        >
          <option>Chọn loại giấy tờ</option>
          <option value="so_hong_ca_nhan">Sổ hồng cá nhân</option>
          <option value="so_hong_cong_ty">Sổ hồng công ty</option>
          <option value="hop_dong_mua_ban">Hợp đồng mua bán</option>
          <option value="hop_dong_gop_von">Hợp đồng góp vốn</option>
          <option value="giay_tay">Giấy tay</option>
          <option value="others">Khác</option>
        </CFormSelect>
        {phap_ly === 'others' ? <CFormInput placeholder="Nhập loại giấy tờ" /> : <></>}
        {phap_ly.includes('hop') ? <CFormInput placeholder="Nhập mã lô" /> : <></>}
      </CInputGroup>
      {phap_ly.includes('so') ? (
        <CInputGroup>
          <CInputGroupText>Số tờ</CInputGroupText>
          <CFormInput placeholder="Nhập số tờ" />
          <CInputGroupText>Số thửa</CInputGroupText>
          <CFormInput placeholder="Nhập số thửa" />
        </CInputGroup>
      ) : (
        <></>
      )}
      <CInputGroup className="mb-2">
        <CInputGroupText>Tài sản gắn liền</CInputGroupText>
        <CFormInput placeholder="" />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Dòng tiền</CInputGroupText>
        <CFormInput placeholder="" />
      </CInputGroup>
      <div className="border border-dark p-1 mb-1">
        <p className="d-block border-bottom border-dark" style={{ paddingLeft: '10px' }}>
          Hiện trạng
        </p>
        <CInputGroup className="mb-2">
          <CInputGroupText>Đất ở(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>CLN(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>BHK(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>LUC(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>RSX(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>NTS(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>TMD(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>Công cộng(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>QH giao thông(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
      </div>
      <div className="border border-dark p-1 mb-1">
        <p className="d-block border-bottom border-dark" style={{ paddingLeft: '10px' }}>
          QH Sử dụng đất
        </p>
        <CInputGroup className="mb-2">
          <CInputGroupText>Đất ở(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>CLN(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>BHK(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>LUC(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>RSX(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>NTS(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>TMD(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
          <CInputGroupText>Công cộng(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>QH giao thông(m2)</CInputGroupText>
          <CFormInput placeholder="Nhập số" />
        </CInputGroup>
        <CInputGroup className="mb-2">
          <CInputGroupText>Note</CInputGroupText>
          <CFormInput placeholder="note" />
        </CInputGroup>
      </div>
      <CInputGroup className="mb-2">
        <CInputGroupText>Định vị</CInputGroupText>
        <CFormInput placeholder="Nhập link google map" />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Giá bán(tỷ)</CInputGroupText>
        <CFormInput placeholder="" />
        <CInputGroupText>Hoa hồng(%)</CInputGroupText>
        <CFormInput placeholder="" />
      </CInputGroup>
      <CInputGroup className="mb-2">
        <CInputGroupText>Nguồn</CInputGroupText>
        <CFormInput placeholder="" />
        <CInputGroupText>Note</CInputGroupText>
        <CFormInput placeholder="" />
      </CInputGroup>
      <CFormInput placeholder="" type="file" multiple label="File media" />
    </>
  )
}
