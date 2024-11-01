import React from "react";
import './index.css';

const SongCard  = ({imagePath, title}) => {

    return (
        <div className="cardWrapper">
            <div>{title}</div>
            <img src={imagePath} alt="Cover Not Found"  style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <button className="buttonPrimary">SELECT SONG</button>
        </div>
    )
} 


export default SongCard