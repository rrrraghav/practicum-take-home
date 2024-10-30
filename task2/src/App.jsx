import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './Movies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <MovieCard />
    </>
  )
}

export default App
