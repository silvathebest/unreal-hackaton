import React, {lazy, Suspense, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Navigate, Route, Routes} from 'react-router-dom'
import {setUser, useIsAuthenticated} from 'entities/user'
import {getToken} from 'shared/lib'

const ReportsPage = lazy(() => import('./reports'))
const TasksPage = lazy(() => import('./tasks'))
const NotificationsPage = lazy(() => import('./notifications'))
const NotesPage = lazy(() => import('./notes'))
const MailPage = lazy(() => import('./mail'))
const EmployeesPage = lazy(() => import('./employees'))
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
        <Route path='/reports' element={<ReportsPage />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/notifications' element={<NotificationsPage />} />
        <Route path='/notes' element={<NotesPage />} />
        <Route path='/mail' element={<MailPage />} />
        <Route path='/employees' element={<EmployeesPage />} />
        <Route path='*' element={<Navigate to='/reports' />} />
      </Routes>
    </Suspense>
  )
}

export default Routing