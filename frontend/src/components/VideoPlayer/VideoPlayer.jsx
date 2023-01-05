import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';

const VideoPlayer = (props) => {
    const [relatedVideos, setRelatedVideos]= useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [id, setId] = useState([location.state.id]);

    useEffect(()=>{
        getRelatedVideos(); 
        console.log(location.state.id);
        }, [])

    async function getRelatedVideos(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=AIzaSyAvHw-cboU1RCitkpS2LT0DSBhUtujePK0&part=snippet`);
        setRelatedVideos(response.data.items);
        console.log(response.data.items)
        }
    
    function handleClick(video){
        console.log(video.id.videoId)
        setId(video.id.videoId)
        navigate("/videoplayer", { state: {id:video.id.videoId}})
    }   

    function handleReturnToHomePage(){
        navigate("/")
    }      
    
    return ( 
        <div>
            <div>
                <iframe id="ytplayer" 
                type="text/html" 
                width="640" 
                height="360"
                src={`https://www.youtube.com/embed/${location.state.id}?autoplay=1&origin=http://example.com`}
                frameBorder="0">
                </iframe>
            </div>
            <div>           
            {relatedVideos.map((video, index) =>{
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
            <button onClick={handleReturnToHomePage}>Return To Home Page</button>
        </div>
        );
}
 
export default VideoPlayer;