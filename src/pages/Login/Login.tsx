import { useNavigate } from "react-router-dom"
import { createUser } from "../../redux/states/user"
import { getCharacterById } from "../../services/auth"
import { useDispatch } from 'react-redux'
import { PrivateRoutes } from "../../utils/routes"
import { Roles } from "../../types"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = async () => {
    try {
      const result = await getCharacterById({ characterId: 2 })
      dispatch(createUser({ ...result, role: Roles.USER }))
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div>
        <h2>
          Hola este es el login
        </h2>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login