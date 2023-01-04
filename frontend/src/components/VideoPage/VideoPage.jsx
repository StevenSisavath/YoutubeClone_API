import React from 'react';

const VideoPage = (props) => {
    return ( 
        <div>
            <iframe id="ytplayer" 
                type="text/html" 
                width="640" 
                height="360"
                src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
                frameborder="0">
            </iframe>
            <div>
                
            </div>   
        </div> 
     );
}
 
export default VideoPage;