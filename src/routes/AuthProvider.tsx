import type { FC, ReactElement } from 'react'
import { useEffect } from 'react'

import { ACCESS_CODE } from '../core/config/access.config'
import { useAppDispatch } from '../core/store/store'

interface AuthProviderProps {
  children: ReactElement
}

// 598457

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (Number(accessToken) === ACCESS_CODE) {
      // eslint-disable-next-line no-console
      console.log('четко')
    }
  }, [])

  return children
}

export default AuthProvider
