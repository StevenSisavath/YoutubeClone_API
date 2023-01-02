import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import SearchBar from "../../components/SearchBar";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [videos, setVideos]= useState([]);
  const [relatedVideos, setRelatedVideos]= useState([]);
  const [search, setSearch] = useState([]);


  async function getListOfVideos(search){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}i&key=AIzaSyCF0NtTZCEV3hdiTNPMddm9GqMsdw-f6M8&part=snippet`);
    setVideos(response.data.items);
    console.log(response.data.items)
  }


  async function getRelatedVideos(){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=OKozUbsKqlo&type=video&key=AIzaSyCF0NtTZCEV3hdiTNPMddm9GqMsdw-f6M8&part=snippet`);
    // setRelatedVideos(response.data.items);
    console.log(response.data.items)
  }


  useEffect(()=>{
     
    getRelatedVideos(); 
  },[])




  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <SearchBar listofvideos={getListOfVideos}/>

      
      
    </div>
  );
};

export default HomePage;
