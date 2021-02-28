import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import BreedCard from './component/BreedCard';
import Favorite from './component/Favorite';


function App() {
  //Routes for the app
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route path="/breed/:id" component={BreedCard} />
        <Route path="/favorite" component={Favorite} />
      </Switch> 
    </div>
  );
}

export default App;
