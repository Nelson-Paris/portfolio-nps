import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Scroll from './components/Scroll.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Logistique from './pages/Logistique.jsx' // si tu as la page dédiée

export default function App(){
  return (
    <div className="site">
      <Header/>
      <Scroll/>
      <main className="container site-main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/logistique" element={<Logistique/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}
