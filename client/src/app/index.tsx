import React, {lazy, useEffect, useState} from 'react'
import {withProviders} from './providers'
import './index.scss'

const Routing = lazy(() => import('../pages'))

let isInitApi = false

function App() {
  const [isSetApi, setIsSetApi] = useState(false)

  useEffect(() => {
    if (isInitApi) return

    isInitApi = true


    // setApi(process.env.NODE_ENV === 'development' ? STAGE_API : window.location.origin + '/api')
    //   .finally(() => setIsSetApi(true))
  }, [setIsSetApi])

  if (!isSetApi) return <></>

  return (
    <Routing />
  )
}

export default withProviders(App)
