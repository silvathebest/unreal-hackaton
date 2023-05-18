import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {useSelector} from 'react-redux'

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
    setUser: (state, {payload}: PayloadAction<User | InitialStateProps>) => {
      return {...state, ...payload, isAuthenticated: true}
    },
    clearUser: () => {
      // deleteUserLS()
      // deleteToken()
      return initialState
    }
  }
})

export const {setUser, clearUser} = userModel.actions

export const useIsAuthenticated = () => useSelector(
  createSelector(
    (state: RootState) => state.user.isAuthenticated,
    (isAuthenticated) => isAuthenticated
  )
)

export const useUser = () => useSelector(
  createSelector(
    (state: RootState) => state.user,
    (user) => user
  )
)