import React from "react"

interface BookProps {
    imagePath: string
    title: string
    description: string
}

const BookCard: React.FC<BookProps>  = () => {


    return (
        <div>
            Hello World
        </div>
    )
} 


export default BookCard