import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Thumbnails = (props) => {
    const navigate = useNavigate()
    const [videoId, setVideoId] = useState([])

    function handleClick(video){
        console.log(video.id.videoId)
        setVideoId(video.id.videoId)
        navigate("/videoplayer", { state: {id:video.id.videoId}})
    }  

    return( 
        <div>           
            {props.videos.map((video, index) =>{
                return (
                <div key={index}>
                    <div>
                        <img onClick={()=>handleClick(video) } src={video.snippet.thumbnails.default.url}></img>
                        <div><h9>{video.snippet.title}</h9></div>
                    </div>
                </div>
                )
            })}
        </div>
    );  
}
 
export default Thumbnails;
