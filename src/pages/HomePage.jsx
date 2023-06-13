import { Link } from "react-router-dom";
import beersImage from "../assets/beers.png";
import beersImage2 from "../assets/random-beer.png";
import beersImage3 from "../assets/new-beer.png";

export function HomePage() {
  return (
    <header>
      <h1>Welcome to my beer dream!</h1>
      <section className="home_menu">
        <Link to="/beers" className="">
          <div className="image-container">
            <img src={beersImage} alt="Beers" />
            <span className="image-text">Beers</span>
          </div>
        </Link>
        <Link to="/beers/random" className="">
          <div className="image-container">
            <img src={beersImage2} alt="Random Beer" />
            <span className="image-text">Random Beer</span>
          </div>
        </Link>
        <Link to="/new-beer" className="">
          <div className="image-container">
            <img src={beersImage3} alt="Add New Beer" />
            <span className="image-text">Add New Beer</span>
          </div>
        </Link>
      </section>
    </header>
  );
}
