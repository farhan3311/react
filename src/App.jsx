import Nav from './Nav'
import { useState, useEffect } from 'react'
import './App.css'
import { Colors, Color, AddColor } from './Pages'
import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
import colorData from './config/data.json'
import { ColorsProvider } from './contexts'

function App() {

  let [ allColors, setAllColors ] = useState([])
  const navigate = useNavigate()

  return (
    <div className="App">
      <ColorsProvider>
        <Routes>
            <Route  path='/'>
              <Route index element={<Colors />} />
              <Route path=':name' element={<Color />} />
              <Route path='add' element={<AddColor />}/>
            </Route>
        </Routes>
      </ColorsProvider>
      
    </div>
  )
}

export default App
