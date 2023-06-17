import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Footer } from "./Footer";
const apiURL = " https://ih-beers-api2.herokuapp.com/beers";

export function BeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = () => {
    axios.get(apiURL).then((response) => {
      setBeers(response.data);
    });
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    if (value.trim() !== "") {
      axios.get(`${apiURL}/search?q=${value}`).then((response) => {
        setBeers(response.data);
      });
    } else {
      fetchBeers();
    }
  };

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          BeerDream
        </Link>
        <div className="collapse navbar-collapse">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search beers"
              value={searchQuery}
              onChange={handleSearch}
            />
          </form>
        </div>
      </nav>
      <h1>All the beers</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {beers.map((beer) => (
          <div key={beer.id} className="col mb-4">
            <div className="card">
              <img
                src={beer.image_url}
                alt="beer"
                className="card-img-top mt-3"
              />
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {beer.tagline}
                </h6>
                <p>Contributed by {beer.contributed_by}</p>
              </div>
              <Link to={`/${beer._id}`} className="btn btn-info mb-3">
                See details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
