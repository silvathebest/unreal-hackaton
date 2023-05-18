import {createSelector, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import axios, {AxiosResponse} from 'axios'
import {useQuery} from 'react-query'
import {useSelector} from 'react-redux'
import {deleteToken, setToken} from 'shared/lib'
import {ErrorResponsesType} from 'shared/types'


export type User = {
  id: number
  login: string
}

type InitialStateProps = User & {
  isAuthenticated: boolean,
}

const initialState: InitialStateProps = {
  id: 0,
  login: '',
  isAuthenticated: false
}

export const userModel = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, {payload}: PayloadAction<User | InitialStateProps>) =>
      ({...state, ...payload, isAuthenticated: true}),
    clearUser: () => {
      deleteToken()
      return initialState
    }
  }
})

export const {setUser, clearUser} = userModel.actions

export const UserAuth = (login: string, password: string, dispatch: Dispatch) =>
  useQuery<AxiosResponse<{token: string}>, ErrorResponsesType>(
    'getTranslators',
    () => axios.post('/user/login', {login, password}),
    {
      onSuccess: ({data}) => {
        // TODO: получать информацию об юзере из запроса
        dispatch(setUser({id: 1, login}))
        setToken(data.token)
      },
      enabled: false,
      refetchOnWindowFocus: false,
      retry: false,
    }
  )

export const useIsAuthenticated = () => useSelector(
  createSelector(
    (state: RootState) => state.user.isAuthenticated,
    (isAuthenticated) => isAuthenticated
  )
)
