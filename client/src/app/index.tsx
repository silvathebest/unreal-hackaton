import React, {lazy} from 'react'
import {withProviders} from './providers'
import './index.scss'

const Routing = lazy(() => import('../pages'))

function App() {
  return (
    <Routing />
  )
}

export default withProviders(App)
