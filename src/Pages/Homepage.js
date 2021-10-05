import logo from './logo.svg';
import mylogo from './68020_Teknical Mage_Logo_RD_02.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mylogo} className="My-logo" alt="logo" />
        <p>
          Can't you tell? This is the homepage
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test1234567
        </a>
      </header>
    </div>
  );
}

export default App;
