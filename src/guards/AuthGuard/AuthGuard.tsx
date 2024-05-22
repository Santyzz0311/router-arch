import { useSelector } from "react-redux"
import { AppStore } from "../../redux/store"
import { Navigate, Outlet } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../../utils/routes"

interface Props {
  isPrivate: boolean
}

const AuthGuard = ({ isPrivate }: Props) => {
  // Guard que bloquea la entrada a rutas privasdas en caso
  // de que no estes autenticado

  const userState = useSelector((store: AppStore) => store.user)
  return userState.id !== 0 
    ? (
      isPrivate 
      ? <Outlet />
      : <Navigate replace to={PrivateRoutes.PRIVATE} />
    )
    : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard