import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { motion } from "framer-motion";
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          BeerDream
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/beers" className="nav-link">
                Beers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/new-beer" className="nav-link">
                Add New Beer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="randomBeer_contianer d-flex justify-content-center align-items-center"
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
            <motion.div
              className="container"
              whileHover={{ scale: 1.2, rotate: -8 }}
              whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to="/beers" className="btn btn-info mb-3">
                Go Back
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
