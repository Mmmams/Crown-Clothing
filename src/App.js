import {Route, Switch} from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SingInAndSingUp from './pages/sing-in-and-sing-up/sing-in-and-sing-up.component.jsx'

import './App.css';



function App() {
  return (
    <div >
    <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/singin' component={SingInAndSingUp}/>
      <HomePage />
      </Switch>
    </div>
  );
}

export default App;
