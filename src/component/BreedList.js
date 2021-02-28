import { useHistory, withRouter } from 'react-router-dom';


const BreedList = ({list}) => {
    const history = useHistory();
    const handleButtonClick = (pageURL) => {
        history.push(pageURL);
    };
    
    // render the list of breeds 
    return(
        <div>
        {
            list.map((cat, index) => {
                return(
                    <div key={index}>
                        <h3 onClick={() => handleButtonClick(`/breed/${cat.name}`)}>{cat.name}</h3>
                    </div>
                );
            })
        }
        </div>
    );
}




export default withRouter(BreedList);
