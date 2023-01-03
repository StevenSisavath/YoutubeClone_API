import React from 'react';

const Thumbnails = (props) => {

    function handleClick(video){
        props.setVideoId(video.id.videoId)
        console.log(video.id.videoId)
      }

    return ( 
        <div>
            {props.videos.map((video, index) =>{
                return (
                    <div key={index}>
                <img onClick={()=>handleClick(video)} src={video.snippet.thumbnails.default.url}></img>
                <div><h9>{video.snippet.title}</h9></div>
                </div>
                )
            })}
        </div>
     );
}
 
export default Thumbnails;