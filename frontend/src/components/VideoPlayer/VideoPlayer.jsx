import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

import useAuth from '../../hooks/useAuth';


const VideoPlayer = (props) => {
    const [relatedVideos, setRelatedVideos]= useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const [id, setId] = useState(location.state.id);
    const[comments, setComments] = useState([]);
    const[comment,setComment]= useState('');
    const[user,token]= useAuth();
    
    

    useEffect(()=>{
        getRelatedVideos(); 
        console.log(location.state.id);
        getAllComments();
        

        }, [])

    async function getRelatedVideos(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${id}&type=video&key=AIzaSyC_f2CwD1SDLwIfT92jDWAzAu6fgqskjHA&part=snippet`);
        setRelatedVideos(response.data.items);
        console.log(response.data.items)
        }
    async function getAllComments(){
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/${id}/`);
            
            setComments(response.data)
            console.log(response.data)
        }
    async function addNewCard(newEntry){
        let response = await axios.post(`http://127.0.0.1:8000/api/comments/`,newEntry, {
            headers:{
                Authorization:'Bearer ' + token,
            },
            
            
        });
        if (response.status===201){
            await getAllComments()
          }
          
        
           
        }
    
        function handleSubmit(card){
            card.preventDefault();
            let newEntry={
                video_id: id,
                text:comment,
                likes:0,
                dislikes:0,
                user_id:user.id
                
            };
            debugger
            console.log(newEntry)
            addNewCard(newEntry)
        }
    
    function handleClick(video){
        console.log(video.id.videoId)
        navigate("/videoplayer", { state: {id:video.id.videoId}})
        setId(video.id.videoId)
        getRelatedVideos()
    }   

    function handleReturnToHomePage(){
        navigate("/")
    }      
    
    return ( 
        <div>
            <SearchBar/>
            <div>
                <iframe id="ytplayer" 
                type="text/html" 
                width="640" 
                height="360"
                src={`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
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


            <div>
                <h3>COMMENTS</h3>       
                {comments.map((comment)=>{
                    return(
                        <div>
                            <div>
                                {'User'} {comment.user_id}
                            </div>
                            <div>
                                {comment.text}
                            </div>
                        </div>
                    )
                })}            
            </div>
            
            <form onSubmit={handleSubmit}>
             <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Comment </label>
             <input type='string' value ={comment} onChange={(event)=>setComment(event.target.value )}/><br/>
             <button>Add</button>
            </form>

            

            <button onClick={handleReturnToHomePage}>Return To Home Page</button>
        </div>
        );
}
 
export default VideoPlayer;