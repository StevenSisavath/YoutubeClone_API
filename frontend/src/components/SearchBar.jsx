import React, { useState } from 'react';
import HomePage2 from '../pages/HomePage/HomePage2';

const SearchBar = (props) => {
    const[searchInput,setsearchInput]=useState('')
    const[change, setChange]=useState([])

    function videoBySearch(name){
        name.preventDefault();
         let search= {
            searchInput:searchInput};
       
        console.log(search)
        props.listofvideos(searchInput)
    }
    return ( 
        <form onSubmit ={videoBySearch}>
            <label style={{paddingBottom:'1rem' ,paddingRight:'1em'}}>Youtube Search</label>
            <input style={{color: 'black'}} type='string' value ={searchInput} onChange={(video)=>setsearchInput(video.target.value)}/>
            <button type='submit' >search</button>
    
        </form>
     );
}
 
export default SearchBar;



