import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function NewBeer() {
  const [beerData, setBeerData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBeerData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beerData)
      .then((response) => {
        console.log("New beer created:", response.data);
        navigate("/beers");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div>
      <Link to="/" className="btn btn-info mb-3">
        Home
      </Link>
      <h1>Create a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={beerData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            name="tagline"
            value={beerData.tagline}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={beerData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            name="first_brewed"
            value={beerData.first_brewed}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers Tips
          </label>
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            name="brewers_tips"
            value={beerData.brewers_tips}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level
          </label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            name="attenuation_level"
            value={beerData.attenuation_level}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            name="contributed_by"
            value={beerData.contributed_by}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Beer
        </button>
      </form>
    </div>
  );
}
