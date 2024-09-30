import "./App.css";
import ListingContainer from "./Components/ListingContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <ListingContainer items={data} />
    </>
  );
}

export default App;
