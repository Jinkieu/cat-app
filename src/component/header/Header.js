import { useEffect, useState} from "react";
import './Header.css';


const Header = (id) => {

    const [image, setImage] = useState();

    useEffect(() => {
        //fetch image with the breed's id
        async function getImage() {
            console.log("id" ,id)
            await fetch(`https://api.thecatapi.com/v1/images/search?q=${id}`, {
                method: 'GET',
                withCredentials: true,
                headers: { 'x-api-key': '02a792a7-be18-4dc1-8b86-b1837a3e08d1', 'content-type': 'application/json'}
            })
            .then(response => response.json())
            .then(data => setImage(data[0].url))
        }
        getImage()
    },[])
    console.log("iamge", image)
    return(
        <div>
            <img className="photo" src={image} alt='cat'/>
        </div>
    );
}

export default Header;