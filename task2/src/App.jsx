import './App.css'
import CourseCard from './Course'
import data from './data.ts'

function App() {

  return (
    <>
    <div>Select A Course:</div>
     <CourseCard name={data[0]["course-name"]}/>
    </>
  )
}

export default App
