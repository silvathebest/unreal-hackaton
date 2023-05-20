import axios from 'axios'
import React, {lazy, useEffect} from 'react'
import {getToken, setBearer} from 'shared/lib'
import {withProviders} from './providers'
import './index.scss'

const Routing = lazy(() => import('../pages'))

const STAGE_API = 'http://localhost:8000/api'
const PROD_API = 'https://hackaton-qn2w.onrender.com/api'
let isInitApi = false

function App() {

  useEffect(() => {
    if (isInitApi) return
    isInitApi = true

    axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? STAGE_API : PROD_API
    const token = getToken()
    if (token) setBearer(token)
  }, [])

  return (
    <Routing />
  )
}

export default withProviders(App)
