import ReactLogo from './react-logo.svg';
import NetlifyLogo from './netlify-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={ReactLogo} className="App-logo" alt="logo" />
          <img src={NetlifyLogo} className="App-logo" alt="logo" />
        </div>
        <h3>
          Deploy React Site On Netlify For <span className="free">FREE</span>!!!
        </h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HOW ??? Click HERE to Checkout My Medium Article
        </a>
      </header>
    </div>
  );
}

export default App;
