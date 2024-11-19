import { Link } from 'react-router-dom';
import React from 'react';

function SetOutput({person, inputValue, index, maxIndex}) 
{
    const imgUrl = "https://image.tmdb.org/t/p/w200/"+person.profile_path;
    //console.log(movies);
    console.log(inputValue);
    console.log(index);
    //const [movies, setMovies] = known_for;
    return (
        <>
        <img src={imgUrl} alt="img" />
        <>
        <Link to="/personPage" state={{ person, inputValue, index ,maxIndex}}> 
        {person.name}
        </Link>
        </>
        
        </>
    );
}
export default SetOutput;
// title, release_date, and overview of
 //a known_for entry. 