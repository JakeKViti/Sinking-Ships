import './App.css';
import Board from './components/Board.js'
import Home from './components/Home.js'
import Rules from './components/Rules.js'
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
        <Route exact path="/" component={Home} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/rules" component={Rules} />
      </header>
    </div>
    </Router>
  );
}

export default App;
