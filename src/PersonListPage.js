import { useState, useEffect } from "react";
import SetOutput from "./SetOutput";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function GetPerson() {
    const location = useLocation();
    const inputValue = location.state ? location.state.inputValue : ''; 
    const inputIndex = location.state.index?location.state.index : 0;
    console.log('inputValue in GetPerson:', inputValue);
    console.log('inputIndex in GetPerson:', inputIndex);
    const navigate = useNavigate(); // Get the navigate function

  const [users, setUsers] = useState([]);
  const myKey="ca73e20ca9988634ee1a49b12fb9f736";
  const url = "https://api.themoviedb.org/3/search/person?query="+inputValue+"&api_key="+myKey;
  
  console.log(url);
  useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data.results));
    }, 
    []);

    if(inputIndex>0 && inputIndex<=users.length){
        console.log(inputIndex);
        console.log(users.length);
        //const person=[];
        users.map((person,index) =>
            index+1===inputIndex ? (
                navigate('/personPage', { state: { person, inputValue, inputIndex, maxIndex:users.length } })
            ) : null)
    } 
else{
  return (
    <div>
        <h1>Person List</h1>
        <div>
            <button onClick={() => navigate('/')}>Back to Home</button>
        </div>
        {   
            users.map((u,index) =>
            u.profile_path ? (
                <SetOutput person={u} inputValue={inputValue} index={index+1} maxIndex={users.length} />
            ) : null
        )}
    </div> 
  );
}
}
export default GetPerson;