import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="erode" />
      </div>
      <footer>
        <p>
          This project is coded by Surekha and is
          <a
            href="https://github.com/SurekhaSath/reactweatherproject"
            target="blank"
          >
            open sourced in git hub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
