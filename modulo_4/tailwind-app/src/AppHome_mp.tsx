import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TwNavbar_mp from './components/tw/My_project/TwNavbar_mp'
import TwFooter_mp from './components/tw/My_project/TwFooter_mp'
import HomeTW_mp from './pages/My_project/HomeTW_mp'
import AboutTW_mp from './pages/My_project/AboutTW_mp'

export default function AppHome_mp() {
  return (
    <BrowserRouter>
      <TwNavbar_mp />
      <Routes>
        <Route path="/" element={<HomeTW_mp />} />
        <Route path="/about" element={<AboutTW_mp />} />
      </Routes>
      <TwFooter_mp />
    </BrowserRouter>
  )
}
