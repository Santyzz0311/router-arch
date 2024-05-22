import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../utils/routes"
import { useDispatch } from "react-redux"
import { resetUser } from "../../redux/states/user"

function LogOut() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }

  return (
    <button onClick={logOut}>
      Log Out
    </button>
  )
}
export default LogOut