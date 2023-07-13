import logo from './logo.svg';
import './App.css';

import Timer from './timer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Add a audio player here
        </p>
        <Timer/>

        {/* Add a audio player here */}
      </header>
    </div>
  );
}

export default App;
