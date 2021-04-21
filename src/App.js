import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Switch>
        <Route path='/Portfolio-Website/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
