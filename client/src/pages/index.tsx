import React, {lazy, Suspense, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Navigate, Route, Routes} from 'react-router-dom'
import {setUser, useIsAuthenticated} from 'entities/user'
import {getToken} from 'shared/lib'

const HomePage = lazy(() => import('./home'))
const LoginPage = lazy(() => import('./login'))

const Routing = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    const token = getToken()
    // TODO: Сделать получение User из LS и закидываение его в setUser
    if (token) dispatch(setUser({id: 1, login: 'Test'}))

    setIsLoading(false)
  }, [dispatch, setIsLoading])

  if (isLoading) return <></>

  if (!isAuthenticated) {
    return (
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    )
  }

  return (
    <Suspense fallback='Loading...'>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </Suspense>
  )
}

export default Routing