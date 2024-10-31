import CourseCard from './Course'
import data from './data.ts'

function App() {

  return (
    <div className="content">
      <div className='title'>Select A Course:</div>
      <CourseCard name={data[0]["course-name"]} />
    </div>
  )
}

export default App
