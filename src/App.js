import './App.css';

import { NavLink } from 'react-router-dom';
import Routes from './routes/routes';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/recipes">
          Recipes
        </NavLink>
      </div>
      <Routes />
    </div>
  );
}

export default App;
