import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const apiURL = " https://ih-beers-api2.herokuapp.com/beers";

export function BeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      <h1>All the beers</h1>
      <Link to="/" className="btn btn-info mb-3">
        Home
      </Link>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search beers"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="row">
        {beers.map((beer) => (
          <div key={beer.id} className="col-sm-4">
            <div className="card mb-4">
              <img src={beer.image_url} alt="beer" className="card-img-top" />
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
    </div>
  );
}
