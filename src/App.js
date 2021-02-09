import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homepage.component.jsx'

import './App.css';
const Hats = () =>{
  return(
    <div>
    <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hats}/>
      <HomePage />
      </Switch>
    </div>
  );
}

export default App;
