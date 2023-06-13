import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function SingleBeer({ beers }) {
  const { _id } = useParams();
  const beer = beers.find((beer) => beer._id === _id);
  if (!beer) {
    return <div>Beer not found!</div>;
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div class="details card m-3">
        <img src={beer.image_url} alt={beer.name} className="card-img-top" />
        <h2>{beer.name}</h2>
        <p>Tagline {beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation Level: {beer.attenuation_level}</p>
        <p>Description: {beer.description}</p>
        <p>Contributed_by: {beer.contributed_by}</p>
        <Link to="/" className="btn btn-info mb-3 ">
          Go Back
        </Link>
      </div>
    </div>
  );
}
