import { useState } from 'react'
import './styles/App.css'
import Title from './components/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title>GIAOOOOO</Title>
    </div>
  )
}

export default App
