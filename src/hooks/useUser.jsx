import { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'

export const useUser = () => useContext(AuthContext)
