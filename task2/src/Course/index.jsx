import React from "react"
import './index.css';


const CourseCard = ({ name }) => {
    return (
        <div className="courseWrapper">
            <div className="courseItem">
                <div className="courseTitle">{name}</div>
                <div className="courseSelect">
                    <button className="buttonPrimary">Select</button>
                </div>
            </div>
        </div>
    )
}


export default CourseCard