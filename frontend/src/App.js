import './App.css';
import Game from './components/Game.js'
import Home from './components/Home.js'
import Rules from './components/Rules.js'
import Leaderboard from './components/Leaderboard.js'
import NavBar from './components/NavBar.js'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Route exact path="/Sinking-Squids/" component={Home} />
        <Route exact path="/Sinking-Squids/game" component={Game} />
        <Route exact path="/Sinking-Squids/rules" component={Rules} />
        <Route exact path="/Sinking-Squids/leaderboard" component={Leaderboard} />
      </header>
    </div>
    </Router>
  );
}

export default App;
 