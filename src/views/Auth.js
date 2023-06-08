import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = Cookies.get('authToken')
    if (!token) {
      setTimeout(() => {
        navigate('/login')
      }, 100)
    }
  }, [])

  return null
}
