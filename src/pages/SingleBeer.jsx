import { useParams, Link } from "react-router-dom";
import { Footer } from "./Footer";
export function SingleBeer({ beers }) {
  const { _id } = useParams();
  const beer = beers.find((beer) => beer._id === _id);
  if (!beer) {
    return <div>Beer not found!</div>;
  }
  return (
    <div
      className="d-flex justify-content-center align-items-center"
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
          <Link to="/beers" className="btn btn-info mb-3">
            Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
