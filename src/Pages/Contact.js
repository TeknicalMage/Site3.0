import logo from './logo.svg';
import mylogo from './Pics/TeknicalMage_OnHover_Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      <header className="App-header">
        <img src={mylogo} className="My-logo" alt="logo" />
        <p>
          Email: t3kn1kalm3g3@gmail.com
     
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/julian-jordan-2804a0b9/"
          rel="noopener noreferrer"
        >
          Linkedln
        </a>

        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCJX45kFidKwVbLgH25H_USw"
          rel="noopener noreferrer"
        >
          YouTube
        </a>

        <a
          className="App-link"
          href="https://www.fiverr.com/julian_jordan?up_rollout=true"
          rel="noopener noreferrer"
        >
          Fiver
        </a>
    
        



      </header>
    </div>

    

    

  );
}

export default App;
