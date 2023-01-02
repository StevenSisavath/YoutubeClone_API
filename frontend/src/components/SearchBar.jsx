import React, { useState } from 'react';


const SearchBar = (props) => {
    const[searchInput,setsearchInput]=useState('')

    function videoBySearch(name){
        name.preventDefault();
         let search= {
            searchInput:searchInput};
       
        console.log(search)
        props.videoSearch(searchInput)
    }
    return ( 
        <form onSubmit ={videoBySearch}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Youtube Search</label>
            <input style={{color: 'black'}} type='string' value ={searchInput} onChange={(song)=>setsearchInput(song.target.value)}/>
            <button type='submit' >search</button>
    
        </form>
     );
}
 
export default SearchBar;



// async function getRelatedVideos(search){
//     let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=OKozUbsKqlo&type=video&key=AIzaSyCF0NtTZCEV3hdiTNPMddm9GqMsdw-f6M8&part=snippet`);
//     setRelatedVideos(response.data.items);
//     console.log(relatedVideos)
//   }


//   getRelatedVideos()