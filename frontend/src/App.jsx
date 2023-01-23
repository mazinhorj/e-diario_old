
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="App">
      <h1>e-Diário</h1>
      {/*<h2>Frontend</h2>
      <h3>Conteúdo</h3>
      <p>Página de login...</p> */}
      <Outlet />
    </div>
  )
}

export default App
