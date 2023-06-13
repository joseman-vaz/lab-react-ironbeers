import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

export function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState({});

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      const beersArray = response.data;
      const randomIndex = Math.floor(Math.random() * beersArray.length);
      const randomBeerData = beersArray[randomIndex];
      console.log("Random Beer:", randomBeerData);
      setRandomBeer(randomBeerData);
    });
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn-info mb-3">
        Home
      </Link>
      <div className="card">
        <img src={randomBeer.image_url} alt="beer" />
        <h1>{randomBeer.name}</h1>
        <h3>{randomBeer.tagline}</h3>
        <p>First brewed: {randomBeer.first_brewed}</p>
        <p>Attenuation Level: {randomBeer.attenuation_level}</p>
        <p>Description: {randomBeer.description}</p>
        <p>Contributed by: {randomBeer.contributed_by}</p>
      </div>
    </div>
  );
}
