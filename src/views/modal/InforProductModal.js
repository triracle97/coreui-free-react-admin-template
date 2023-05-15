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
    <CModal size="xl" visible={visible} onClose={() => setVisible(false)}>
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
        <p>
          <span className="px-2">Admin note:</span>
          {data.admin_note}
        </p>
        <p>
          <span className="px-2">Pháp lý:</span>
          {data.other_data?.phap_ly}
        </p>
        {data.other_data?.phap_ly_info?.khac ? (
          <p>
            <span className="px-2">Giấy tờ khác:</span>
            {data.other_data?.phap_ly_info?.khac}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.phap_ly_info?.so_thua ? (
          <p>
            <span className="px-2">Số thửa:</span>
            {data.other_data?.phap_ly_info?.so_thua}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.phap_ly_info?.so_to ? (
          <p>
            <span className="px-2">Số tờ:</span>
            {data.other_data?.phap_ly_info?.so_to}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.phap_ly_info?.ma_lo ? (
          <p>
            <span className="px-2">Mã lô:</span>
            {data.other_data?.phap_ly_info?.ma_lo}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.tong_dien_tich ? (
          <p>
            <span className="px-2">Tổng diện tích:</span>
            {data.other_data?.tong_dien_tich}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.dien_tich_san ? (
          <p>
            <span className="px-2">Diện tích sàn:</span>
            {data.other_data?.dien_tich_san}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.dong_tien ? (
          <p>
            <span className="px-2">Dòng tiền:</span>

            {data.other_data?.dong_tien}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.ten_khach_san ? (
          <p>
            <span className="px-2">Tên khách sạn:</span>

            {data.other_data?.ten_khach_san}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.so_sao ? (
          <p>
            <span className="px-2">Số sao:</span>
            {data.other_data?.so_sao}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.so_tang ? (
          <p>
            <span className="px-2">Số tầng:</span>
            {data.other_data?.so_tang}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.so_phong ? (
          <p>
            <span className="px-2">Số phòng:</span>
            {data.other_data?.so_phong}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.trang_thai ? (
          <p>
            <span className="px-2">Trạng thái khách sạn:</span>
            {data.other_data?.trang_thai}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.muc_dich_su_dung_dat_khach_san ? (
          <p>
            <span className="px-2">Mục đích sử dụng đất khách sạn:</span>
            {data.other_data?.muc_dich_su_dung_dat_khach_san}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.chu_so_huu ? (
          <p>
            <span className="px-2">Chủ sở hữu:</span>
            {data.other_data?.chu_so_huu}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.chu_dau_tu ? (
          <p>
            <span className="px-2">Chủ đầu tư:</span>
            {data.other_data?.chu_dau_tu}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.doanh_thu_thang ? (
          <p>
            <span className="px-2">Doanh thu tháng:</span>
            {data.other_data?.doanh_thu_thang}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.loi_nhuan_thang ? (
          <p>
            <span className="px-2">Lợi nhuận tháng:</span>
            {data.other_data?.loi_nhuan_thang}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.loai_hinh ? (
          <p>
            <span className="px-2">Loại hình:</span>
            {data.other_data?.loai_hinh}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.ten_du_an ? (
          <p>
            <span className="px-2">Tên dự án:</span>
            {data.other_data?.ten_du_an}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.hinh_thuc_chuyen_nhuong ? (
          <p>
            <span className="px-2">Hình thức chuyển nhượng:</span>
            {data.other_data?.hinh_thuc_chuyen_nhuong}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.du_lieu_thua ? (
          <div className="mb-3">
            <span className="px-2">Dữ liệu thửa:</span>
            {data.other_data?.du_lieu_thua.map((v) => (
              <div key={v._id} className="px-4">
                <span className="mx-2">Thửa đất số: {v.thua_dat_so},</span>
                <span className="mx-2">Tờ bản đồ số: {v.to_ban_do_so},</span>
                <span className="mx-2">Tài sản gắn liền:{v.tai_san_gan_lien},</span>
                <span className="mx-2">
                  Hiện trạng:
                  {v.hien_trang?.CLN ||
                    v.hien_trang?.dat_o ||
                    v.hien_trang?.BHK ||
                    v.hien_trang?.LUC ||
                    v.hien_trang?.RSX ||
                    v.hien_trang?.NTS ||
                    v.hien_trang?.TMD ||
                    v.hien_trang?.cong_cong ||
                    v.hien_trang?.qh_giao_thong}
                  ,
                </span>
                <span className="mx-2">
                  Quy hoạch:
                  {v.quy_hoach?.CLN ||
                    v.quy_hoach?.dat_o ||
                    v.quy_hoach?.BHK ||
                    v.quy_hoach?.LUC ||
                    v.quy_hoach?.RSX ||
                    v.quy_hoach?.NTS ||
                    v.quy_hoach?.TMD ||
                    v.quy_hoach?.cong_cong ||
                    v.quy_hoach?.qh_giao_thong}
                  ,
                </span>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
        {data.other_data?.hien_trang_phap_ly ? (
          <div className="mb-3">
            <span className="px-2">Hiện trạng pháp lý:</span>
            {data.other_data?.hien_trang_phap_ly.map((v, i) => (
              <span key={i}>{v},</span>
            ))}
          </div>
        ) : (
          <></>
        )}
        {data.other_data?.dinh_vi ? (
          <p>
            <span className="px-2">Định vị:</span>
            {data.other_data?.dinh_vi}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.gia_ban ? (
          <p>
            <span className="px-2">Giá bán:</span>
            {data.other_data?.gia_ban}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.hoa_hong ? (
          <p>
            <span className="px-2">Hoa hồng:</span>
            {data.other_data?.hoa_hong}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.nguon ? (
          <p>
            <span className="px-2">Nguồn:</span>
            {data.other_data?.nguon}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.phuong_an_thanh_toan ? (
          <p>
            <span className="px-2">Phương thức thanh toán:</span>
            {data.other_data?.phuong_an_thanh_toan}
          </p>
        ) : (
          <></>
        )}
        {data.other_data?.note ? (
          <p>
            <span className="px-2">Note:</span>
            {data.other_data?.note}
          </p>
        ) : (
          <></>
        )}
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
