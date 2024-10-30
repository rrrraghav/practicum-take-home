import React from "react"

interface CourseProps {
    name: string
}

const CourseCard: React.FC<CourseProps>  = ({name}) => {


    return (
        <div>
            <text>{name}</text>
            <button>Select</button>
        </div>
    )
} 


export default CourseCard