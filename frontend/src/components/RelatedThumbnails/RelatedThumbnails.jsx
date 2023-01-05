import React from 'react';

const RelatedThumbnails = (props) => {
    function handleClick(video){
        props.setRelatedVideoId(video.id.videoId)
        console.log(video.id.videoId)
      }     
        return( 
            <div>      
                {props.relatedVideos.map((video, index) =>{
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
        )  
    ;
}
 
export default RelatedThumbnails;