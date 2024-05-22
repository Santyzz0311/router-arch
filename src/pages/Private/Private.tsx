import { Navigate, Route } from "react-router-dom"
import { PrivateRoutes } from "../../utils/routes"
import { lazy } from "react"
import RoutesWithNotFound from "../../routes/RoutesWithNotFound"
import LogOut from "../../components/LogOut"
const Home = lazy(() => import('./Home'))
const Dashboard = lazy(() => import('./Dashboard'))

function Private() {
  return (
    <>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        <Route path={PrivateRoutes.HOME} element={<Home />} />
      </RoutesWithNotFound>
      <LogOut />
    </>
  )
}
export default Private