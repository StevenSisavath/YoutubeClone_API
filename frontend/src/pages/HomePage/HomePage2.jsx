import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import SearchBar from "../../components/SearchBar/SearchBar"

const HomePage2 = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos]= useState([]);
  const [search, setSearch] = useState([]);
  const [playVideo, setPlayVideo]= useState([])


  async function getListOfVideos(search){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyAvHw-cboU1RCitkpS2LT0DSBhUtujePK0&part=snippet`);
    setVideos(response.data.items);
    console.log(response.data.items)
    setPlayVideo(!playVideo)
  }

  useEffect(()=>{
     getListOfVideos();
  },[])

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
        <SearchBar listofvideos={getListOfVideos}/>
      <Thumbnails videos={videos}/>
    </div>
  );
};

export default HomePage2;
