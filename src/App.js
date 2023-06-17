import { BeersPage } from "./pages/BeersPage";
import { RandomBeer } from "./pages/RandomBeer";
import { NewBeer } from "./pages/NewBeer";
import { HomePage } from "./pages/HomePage";
import { SingleBeer } from "./pages/SingleBeer";
import { Routes, Route } from "react-router-dom";

import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
const apiURL = " https://ih-beers-api2.herokuapp.com/beers";

function App() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setBeers(response.data);
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/beers/random" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/:_id" element={<SingleBeer beers={beers} />} />
      </Routes>
    </div>
  );
}

export default App;
