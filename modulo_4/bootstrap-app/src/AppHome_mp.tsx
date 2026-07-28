import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RBNavbar_mp from './components/rb/My_project/RBNavbar_mp'
import RBFooter_mp from './components/rb/My_project/RBFooter_mp'
import HomeRB_mp from './pages/My_project/HomeRB_mp'
import AboutRB_mp from './pages/My_project/AboutRB_mp'

export default function AppHome_mp() {
  return (
    <BrowserRouter>
      <RBNavbar_mp />
      <Routes>
        <Route path="/" element={<HomeRB_mp />} />
        <Route path="/about" element={<AboutRB_mp />} />
      </Routes>
      <RBFooter_mp />
    </BrowserRouter>
  )
}
