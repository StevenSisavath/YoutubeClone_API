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