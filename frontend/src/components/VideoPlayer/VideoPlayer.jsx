import React from 'react';

const VideoPlayer = (props) => {
    return ( 
        <div>
            <iframe id="ytplayer" 
            type="text/html" 
            width="640" 
            height="360"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
            frameBorder="0">
            </iframe>
            <div>  
                {props.relatedVideos.map((video, index) =>{
                    return (
                    <div key={index}>
                        <div>
                            <img src={video.snippet.thumbnails.default.url}></img>
                            <div><h9>{video.snippet.title}</h9></div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default VideoPlayer;