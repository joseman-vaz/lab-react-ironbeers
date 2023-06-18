import { useParams, Link } from "react-router-dom";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function SingleBeer({ beers }) {
  const { _id } = useParams();
  const beer = beers.find((beer) => beer._id === _id);

  if (!beer) {
    return <div>Beer not found!</div>;
  }

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
            <li className="nav-item">
              <Link to="/beers/random" className="nav-link">
                Random Beer
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className="singleBeer_Container d-flex justify-content-center align-items-center"
        style={{ height: "100vh", margin: "1rem" }}
      >
        <div className="details card m-3">
          <img
            src={beer.image_url}
            alt={beer.name}
            className="card-img-top m-3"
          />
          <div className="single_beer_info">
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <h4>First brewed:</h4>
            <p className="mb-2">
              <strong>{beer.first_brewed}</strong>
            </p>
            <p className="mb-2">
              <strong>Attenuation Level:</strong> {beer.attenuation_level}
            </p>
            <p className="mb-2">
              <strong> Description:</strong> {beer.description}
            </p>
            <p className="mb-2">
              <strong>Contributed by:</strong> {beer.contributed_by}
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
