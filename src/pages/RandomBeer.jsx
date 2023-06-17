import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
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
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", margin: "1rem" }}
    >
      <div className="details card m-3">
        <img
          src={randomBeer.image_url}
          alt={randomBeer.name}
          className="card-img-top m-3"
        />
        <div className="single_beer_info">
          <h1>{randomBeer.name}</h1>
          <h3>{randomBeer.tagline}</h3>
          <h4>First brewed:</h4>
          <p className="mb-2">
            <strong>{randomBeer.first_brewed}</strong>
          </p>
          <p className="mb-2">
            <strong>Attenuation Level:</strong> {randomBeer.attenuation_level}
          </p>
          <p className="mb-2">
            <strong> Description:</strong> {randomBeer.description}
          </p>
          <p className="mb-2">
            <strong>Contributed by:</strong> {randomBeer.contributed_by}
          </p>
          <Link to="/" className="btn btn-info mb-3">
            Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
