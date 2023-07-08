/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { cilLoopCircular, cilPencil, cilX } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton, CCol, CContainer, CRow, CTable, CTableHeaderCell, CTableRow } from '@coreui/react'
import React, { useImperativeHandle, useState } from 'react'
import axios from 'axios'
import { BACKEND_HOST } from '../../constant'

export default function Actions({ openEdit, openDelete, item, getData, content }) {
  const open = openEdit
  const get = getData
  const id = item.id

  function edit() {
    open(item)
  }

  return (
    <div className="d-flex flex-row justify-content-around align-items-center ">
      <CIcon icon={cilPencil} width={16} height={16} title="edit" onClick={edit} className="mx-3" />
      <CIcon
        icon={cilX}
        width={16}
        height={16}
        title="delete"
        onClick={openDelete}
        className="mx-3"
      />
    </div>
  )
}
