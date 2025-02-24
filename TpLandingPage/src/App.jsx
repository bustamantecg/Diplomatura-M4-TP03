import { useState } from 'react'
import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import NavBar from './components/NavBar'
import Bienvenido from './components/Bienvenido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>         
      <Header />
      <Bienvenido />
        <NavBar />        
          <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
