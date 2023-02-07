import type { ComponentType, FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

import { baseBrowseRoutes } from '../core/config/routes.config'
import { selectIsAuth } from '../core/store/auth/selectors'

interface PrivateRouteProps {
  component: ComponentType
}

const PrivateRoute: FC<PrivateRouteProps> = ({ component: RouteComponent }) => {
  const isAuth = useSelector(selectIsAuth)

  if (isAuth) {
    return <RouteComponent />
  }

  return <Navigate to={baseBrowseRoutes.login()} />
}

export default PrivateRoute
