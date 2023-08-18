import { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import './App.css'

function App() {
  // useState bu şekilde tanımlanır
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1);
  }

  return (
    <ButtonGroup role="group"className='align-items-center btn-outline-primary'>

      {/* Inline Fonksiyon */}
      <Button type="button" class="btn btn-danger text-light fw-bold" onClick={() => { setValue(value - 1) }}>-</Button>

      <span className='btn btn-outline-secondary'>{value}</span>

      {/* Harici fonksiyon */}
      <Button type="button" class="btn btn-success text-light fw-bold" onClick={handleClick}>+</Button>

    </ButtonGroup>
  )
}

export default App
