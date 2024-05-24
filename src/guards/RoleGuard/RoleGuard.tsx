import { useSelector } from "react-redux"
import { AppStore } from "../../redux/store"
import { Roles } from '../../types'
import { Navigate, Outlet } from "react-router-dom"
import { PrivateRoutes } from "../../utils/routes"

interface Props {
  role: Roles
} 

function RoleGuard({ role }: Props) {
  // Guard que protege rutas dependiendo del rol que quieres
  // pasarle por props al guard para saber a que rutas tiene
  // acceso exclusivamente ese rol

  const userState = useSelector((store: AppStore) => store.user)


  return userState.role === role
  ? <Outlet />
  : <Navigate replace to={PrivateRoutes.PRIVATE} /> 
}

export default RoleGuard