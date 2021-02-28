import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Header from './header/Header';

const BreedCard = (breedInfo) => {

    const urlParam = useParams(); //take breed's id from url parameter
    const id = urlParam.id;
    const [breedData, setBreedData] = useState({}); 

    useEffect(() => {
        //fetch data from the API
        async function getBreedInfo() {
            console.log("id" ,id)
            await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${id}`, {
                method: 'GET',
                withCredentials: true,
                headers: { 'x-api-key': '02a792a7-be18-4dc1-8b86-b1837a3e08d1', 'content-type': 'application/json'}
            })
            .then(response => response.json())
            .then(data => setBreedData(data[0]))
        }
        getBreedInfo()
    },[])


    //supposed to add the current item to the localStorage's item, but i had a problem with the process of updateing value in localStorage
    const addFav = (item) => { 
        const myStorage = window.localStorage.getItem('myFavorite');
        if(myStorage) {
            myStorage.concat(', ', item);
            window.localStorage.setItem('myFavorite', myStorage);
        }
        window.localStorage.setItem('myFavorite', item);
    }


    //didn't had time to test
    const removeFav = (item) => {
        const myStorage = localStorage.getItem('myFavorite');
        myStorage.forEach((element, index, object) => {
            if(element === item) {
                object.splice(index, 1);
            }
        });
        localStorage.setItem('myFavorite', myStorage);
    }

    return(
        <div>
            <h3>{breedData.name}</h3>
            <Header id={id}/>
            <h4>Description : {breedData.description}</h4>
            <p>Adaptability : {breedData.adaptability}</p>
            <p>Affection level : {breedData.level}</p>
            <p>Child Friendly : {breedData.child_friendly}</p>
            <div>
                <button onClick={() => {addFav(breedData.name)}}>Add</button>
                <button onClick={() => {removeFav(breedData.name)}}>Remove</button>
            </div>
        </div>
    );
}

export default BreedCard