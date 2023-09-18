import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar';
import AppRoutes from "./components/AppRoutes";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <div className="app">
          <h1>React On Rails Blog</h1>
          <p>Find this application layout in client/src/App.jsx</p>
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </>
  )
}

export default App;
