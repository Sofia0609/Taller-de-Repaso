import { Routes, Route } from 'react-router-dom'
import Dashboard from '../src/pages/dashboard/Dashboard' // 1. Asegúrate de que esté este import
import ProjectDetail from '../src/pages/projectDetail/ProjectDetail' // 2. ¡ESTA ES LA LÍNEA QUE TE FALTA!

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/proyecto/:id" element={<ProjectDetail />} />
    </Routes>
  )
}

export default App