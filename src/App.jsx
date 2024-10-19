import { useState } from 'react'
import { Login } from './pages/login.jsx'
import { Historicos } from './pages/Historicos.jsx'
import { Registro } from './pages/Registro.jsx'
import { Home } from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Login />
    // <Registro/>
    <Home/>
    // <Historicos/>
    )
}

export default App
