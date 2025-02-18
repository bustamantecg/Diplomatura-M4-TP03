import { useState } from 'react'
import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
      <Header />
        <NavBar />        
          <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
