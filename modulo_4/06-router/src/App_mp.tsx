import { Routes, Route } from 'react-router-dom'
import RootLayout_mp from './layouts/My_project/RootLayout_mp'
import DashboardLayout_mp from './layouts/My_project/DashboardLayout_mp'
import HomePage_mp from './pages/My_project/HomePage_mp'
import ServiciosPage_mp from './pages/My_project/ServiciosPage_mp'
import ServicioDetailPage_mp from './pages/My_project/ServicioDetailPage_mp'
import AboutPage_mp from './pages/My_project/AboutPage_mp'
import LoginPage_mp from './pages/My_project/LoginPage_mp'
import NotFoundPage_mp from './pages/My_project/NotFoundPage_mp'
import ZodRegistrationForm_mp from './pages/My_project/ZodRegistrationForm_mp'

function Resumen_mp() { return <h2>Resumen del dia</h2> }
function Pacientes_mp() { return <h2>Pacientes internados</h2> }
function Configuracion_mp() { return <h2>Configuracion de la clinica</h2> }

export default function App_mp() {
  return (
    <Routes>
      <Route element={<RootLayout_mp />}>
        <Route index element={<HomePage_mp />} />
        <Route path="servicios" element={<ServiciosPage_mp />} />
        <Route path="servicios/:id" element={<ServicioDetailPage_mp />} />
        <Route path="nosotros" element={<AboutPage_mp />} />
        <Route path="login" element={<LoginPage_mp />} />
        <Route path="registro" element={<ZodRegistrationForm_mp />} />

        <Route path="panel" element={<DashboardLayout_mp />}>
          <Route index element={<Resumen_mp />} />
          <Route path="pacientes" element={<Pacientes_mp />} />
          <Route path="configuracion" element={<Configuracion_mp />} />
        </Route>

        <Route path="*" element={<NotFoundPage_mp />} />
      </Route>
    </Routes>
  )
}
