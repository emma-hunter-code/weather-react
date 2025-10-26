import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search</h1>
        <Search />
        <footer>
          Coded by Emma Hunter on{" "}
          <a
            href="https://github.com/emma-hunter-code/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://weathreact.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
