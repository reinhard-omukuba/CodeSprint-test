import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import LiveTournaments from './routes/LiveTournaments';
import HostTournament from './routes/HostTournament';
import HomePage from './routes/HomePage';

function App() {

  return (

    <Router>
    <div className="App">
      <Navbar/>

      <Switch>

        <Route path="/" exact component={HomePage}/>
        <Route path="/tournaments" component={LiveTournaments}/>
        <Route path="/hosttournaments" component={HostTournament}/>

      </Switch>
      
    </div>

    </Router>
  );
}

export default App;
