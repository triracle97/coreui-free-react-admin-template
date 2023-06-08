import React, {useEffect, useRef, useState} from 'react';
import {
  CButton,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import CreateTemplateModal from '../modal/CreateTemplateModal';
import axios from 'axios';
import { BACKEND_HOST } from '../../constant';
import Actions from './Actions';
import EditTemplateModal from '../modal/EditTemplateModal';

export default function Template() {
  const [templates, setTemplates] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const createModalRef = useRef()
  const editModalRef = useRef()

  const openCreateTemplate = () => {
    createModalRef.current.show();
  }

  useEffect(() => {
    getTemplate();
  }, []);

  const getTemplate = () => {
    axios
      .get(`${BACKEND_HOST}/template`)
      .then((res) => {
        const newTemplate = res.data.templates

        setTemplates(newTemplate)
      })
      .catch((err) => {
        console.log('Error while getting Product', err)
      })
  }

  const openEdit = (item) => {
    console.log('123123');
    setSelectedItem(item)
    editModalRef.current.show()
  }

  return (
    <CRow>
      <CCol>
        <CButton onClick={openCreateTemplate} className='px-4 mb-3'>
          Create Template
        </CButton>
      </CCol>
      <CreateTemplateModal
        ref={createModalRef}/>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope='col'>Action</CTableHeaderCell>
            <CTableHeaderCell scope='col'>Name</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {templates.map((item, index) => {
            return (
              <CTableRow key={index}>
                <CTableDataCell style={{ width: '200px' }}>
                  <Actions
                    openEdit={() => { openEdit(item) }}
                    item={item}
                    content='template'
                  />
                </CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
      <EditTemplateModal
        ref={editModalRef}
        item={selectedItem}/>
    </CRow>
  )
}
