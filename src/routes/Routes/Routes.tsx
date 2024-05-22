// Manejo de Suspense y lazy para evitar carga de componentes
// innecesaria 

// Manejo de separadores de ruta entre privadas y publicas
// usando Guards y proponiendo rutas mas descriptivas de
// en que lugar te encuentras

import { Suspense, lazy } from 'react'
import AuthGuard from '../../guards/AuthGuard'
import RoleGuard from '../../guards/RoleGuard'
import RoutesWithNotFound from '../RoutesWithNotFound'
import { Navigate, Route, BrowserRouter as Router } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../utils/routes'
import { Roles } from '../../types'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Dashboard from '../../pages/Private/Dashboard'
const Login = lazy(() => import('../../pages/Login'))
const Private = lazy(() => import('../../pages/Private'))

function Routes() {
  return (
    <Provider store={store}>
      <Suspense fallback={<>Loading</>}>
          <Router>
            <RoutesWithNotFound>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard isPrivate />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </Router>
      </Suspense>
    </Provider>
  )
}
export default Routes