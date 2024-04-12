import "./App.css";
import json from "./data/etsy.json";
import Listing from "./components/Listing";

function App() {
  const items = JSON.parse(JSON.stringify(json));
  const itemArray = items.filter(
    (item: { MainImage: undefined }) => item.MainImage !== undefined
  );
  return <Listing items={itemArray} />;
}

export default App;
