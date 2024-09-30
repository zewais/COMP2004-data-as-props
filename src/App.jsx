import "./App.css";
import ListingContainer from "./Components/ListingContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ListingContainer items={data} />
    </>
  );
}

export default App;
