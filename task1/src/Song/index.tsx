import React from "react"

interface SongProps {
    imagePath: string
    title: string
}

const SongCard: React.FC<SongProps>  = ({imagePath, title}) => {


    return (
        <div>
            <text>{title}</text>
            <img src={imagePath} alt="Cover Not Found"  style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <button >Select</button>
        </div>
    )
} 


export default SongCard