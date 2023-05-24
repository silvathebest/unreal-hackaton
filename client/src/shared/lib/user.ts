import {User} from 'entities/user'

export const USER_KEY = 'user'

export const setUserLs = (user: object) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUserLs = (): User | null => {
  const user = localStorage.getItem(USER_KEY)
  if (!user) return null

  try {
    return JSON.parse(user)
  } catch {
    deleteUser()
  }

  return null
}

export const deleteUser = () => localStorage.removeItem(USER_KEY)