import Router from './Routes';
import './App.css';
import defineBackendURL from './adress';
function App() {
  defineBackendURL()
  return (
    <div className="App">
    <Router/>
    </div>
  );
}

export default App;
