import React, {lazy, Suspense} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

const HomePage = lazy(() => import('./home'))
const LoginPage = lazy(() => import('./login'))

const Routing = () => {
  return (
    <Suspense fallback='Loading...'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  )
}

export default Routing