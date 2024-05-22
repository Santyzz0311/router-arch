// Manejo de conjunto de rutas con pagina 404 para evitar tener
// que repetir la pagina 404 por cada guard creado

import { Route, Routes } from "react-router-dom"

function RoutesWithNotFound({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>NotFound</div>} />
    </Routes>
  )
}
export default RoutesWithNotFound