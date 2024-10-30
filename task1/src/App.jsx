import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BookCard from './Book'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BookCard />
    </>
  )
}

export default App
