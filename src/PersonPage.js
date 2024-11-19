import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MovieList({ movies,inputValue, index, maxIndex }) {
    const navigate = useNavigate();
    index = index+1;
    console.log(index);
    return (
      <div>
        
        <ul>
          {movies.map((m) => m.title ? (
                    <li key={m.id}>
                    {m.title}
                    <p>Release Date: {m.release_date}</p>
                    <p>Overview: {m.overview}</p>
                    </li>
                ):null)}
        </ul>
        <button onClick={() => navigate('/')}>Back to Home</button>
        <button onClick={() => navigate('/personListPage', { state: { inputValue } })}>Back to Person List</button>
        { index > 2 &&
        <button onClick={() => navigate('/personListPage', { state: { inputValue , index:index-2 } })}>Previous Person</button>}
        { index < maxIndex+1 &&
        <button onClick={() => navigate('/personListPage', { state: { inputValue , index } })}>Next Person</button>}
        
      </div>
  
);
}
function PersonPage() {
  
    //const { movies } = useLocation().state;
    const location = useLocation() ;
    console.log('location.state in MovieListPage:', location.state);
    const person = location.state ? location.state.person : [];
    const inputValue = location.state ? location.state.inputValue : '';
    const maxIndex = location.state.maxIndex ? location.state.maxIndex : 0;
    let index = location.state.index ? location.state.index : 0;
    if( location.state.inputIndex) index=location.state.inputIndex;
    console.log(maxIndex);
    console.log(index);
    const imgUrl = "https://image.tmdb.org/t/p/w200/"+person.profile_path;

    return (
        <div>
            <>
             <img src={imgUrl} alt="img" />
            </>
            <>
             <p>{person.name}</p>
            </>
            <>
            <p>Known For:</p>
            <MovieList movies={person.known_for} inputValue={inputValue} index={index} maxIndex={maxIndex}/>
            </>
            
        </div>
    );
}
    export default PersonPage;