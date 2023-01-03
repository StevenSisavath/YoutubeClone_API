import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const Thumbnails = (props) => {
    

    function handleClick(video){
        props.setVideoId(video.id.videoId)
        console.log(video.id.videoId)
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
            )
        
    ;
    
}
 
export default Thumbnails;
// {playVideo ? <Thumbnails videos = {videos} setVideoId={setVideoId} videoId={videoId}/> : <VideoPlayer videoId={videoId}/>}