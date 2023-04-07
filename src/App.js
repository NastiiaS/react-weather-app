import "./App.css";
import Header from "./header";
import Body from "./body";

function App() {
  return (
    <div className="App">
      <Header />
      <Body defaultCity="New York" />
    </div>
  );
}

export default App;
