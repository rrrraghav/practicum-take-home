import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseCard from './Course'
import data from './data.ts'

function App() {

  return (
    <>
     <CourseCard name={data[0]["course-name"]}/>
    </>
  )
}

export default App
