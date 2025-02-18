import { useState } from 'react'
import './index.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
<<<<<<< HEAD
=======
import NavBar from './components/NavBar'
>>>>>>> 375a548d868eef61c30f3401a930a37c8a6c038e

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
<<<<<<< HEAD
        <Header />
=======
      <Header />
        <NavBar />        
>>>>>>> 375a548d868eef61c30f3401a930a37c8a6c038e
          <Main />
        <Footer />
      </div>
    </>
  )
}

export default App
