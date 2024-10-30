import React from "react"

interface MovieProps {
    imagePath: string
    title: string
    description: string
}

const MovieCard: React.FC<MovieProps>  = () => {


    return (
        <div>
            Hello World
        </div>
    )
} 


export default MovieCard