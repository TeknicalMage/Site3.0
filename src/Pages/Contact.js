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
          Email: macro.llc.official@gmail.com
     
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/company/macrollc/?viewAsMember=true&original_referer="
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

        
    
        



      </header>
    </div>

    

    

  );
}

export default App;
