import { useState, useEffect } from 'react';
import BreedList from './BreedList';



const Home = () => {

  const [breeds, setBreeds] = useState([]);// get all breeds

  useEffect( () => {
    async function getBreeds() {
        await fetch('https://api.thecatapi.com/v1/breeds', {
            method: 'GET',
            withCredentials: true,
            headers: { 'x-api-key': '02a792a7-be18-4dc1-8b86-b1837a3e08d1', 'content-type': 'application/json'}
        })
            .then( response => response.json())
            .then(data => setBreeds(data))
        }
        getBreeds()
    },[])
    
    return(
        <div>
            <h1>This is Homepage</h1>
            <BreedList list={breeds}/>
        </div>
    );
}

export default Home;