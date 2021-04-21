import './App.css';
import Board from './components/Board.js'
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
        <Route exact path="/board" component={Board} />
      </header>
    </div>
    </Router>
  );
}

export default App;
