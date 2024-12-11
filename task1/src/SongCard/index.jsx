import React from "react";
import './index.css';

const SongCard  = ({imagePath, title, artist, album, released}) => {

    return (
        <div className="cardWrapper">
            <div className="title">{title}</div>
            <img src={imagePath} alt="Cover Not Found"  style={{ width: "150px", height: "150px", objectFit: "cover" }} />
            <div className="track-info"><b>Artist:</b> {artist}</div>
            <div className="track-info"><b>Album:</b> {album}</div>
            <div className="track-info"><b>Released:</b> {released}</div>
            <button className="buttonPrimary">SELECT SONG</button>
        </div>
    )
} 


export default SongCard