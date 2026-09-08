import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Prices from './pages/Prices.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Events from './pages/Events.jsx'
import Team from './pages/Team.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
