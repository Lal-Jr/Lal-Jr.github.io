import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/Portfolio-Website/' exact component={Home} />
        <Route path='/' exact component={About} />
      </Switch>
    </Router>
  );
}

export default App;
