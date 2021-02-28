import { useLocation } from "react-router-dom";
import { useEffect, useState} from "react";


const Favorite = () => {

    const [myFavorite, setMyFavorite] = useState([]);

    
    //fetch data in localstorage
    useEffect(() => {
        const data = window.localStorage.getItem('myFavorite');
        //didn't had time to implement it correctcly
        data ? setMyFavorite(data) : setMyFavorite([]);
    },[])



    console.log("erarze", window.localStorage.getItem('myFavorite'))
    return(
        <div>
        <h1>Favorite breeds</h1>
        {
            myFavorite.map((e, index) => {
                return(
                    <h3 key={index}>{e}</h3>
                );
            })
        }
        </div>

    );
}

export default Favorite;