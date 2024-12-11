import CourseCard from './Course'
import data from './data.js'

function App() {

  return (
    <div className="content">
      <div className='title'>Select A Course:</div>
      {data.map((d, index) => (
        <CourseCard key={index} name={d["course-name"]} />
      ))}
    </div>
  )
}

export default App
