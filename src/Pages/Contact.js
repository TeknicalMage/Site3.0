import logo from './logo.svg';
import mylogo from './68020_Teknical Mage_Logo_RD_02.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mylogo} className="My-logo" alt="logo" />
        <p>
          Email: t3kn1kalm3g3@gmail.com
     
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/julian-jordan-2804a0b9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedln
        </a>

        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCJX45kFidKwVbLgH25H_USw"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>

        <a
          className="App-link"
          href="https://www.fiverr.com/julian_jordan?up_rollout=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fiver
        </a>
      </header>
    </div>
  );
}

export default App;
