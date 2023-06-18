import { Link } from "react-router-dom";
import beersImage from "../assets/brewDog1.jpg";
import beersImage2 from "../assets/brewDog2.jpg";
import beersImage3 from "../assets/brewDog3.webp";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <header>
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
      <div className="container">
        <h1 className="h1">Welcome to my beer dream!</h1>
        <section className="home_menu">
          <div className="image-container">
            <Link to="/beers" className="main_image">
              <img src={beersImage} alt="Beers" />
              <span className="image-text">Beers</span>
            </Link>
          </div>
          <div className="image-container">
            <Link to="/beers/random" className="main_image">
              <img src={beersImage2} alt="Random Beer" />
              <span className="image-text">Random Beer</span>
            </Link>
          </div>
          <div className="image-container">
            <Link to="/new-beer" className="main_image">
              <img src={beersImage3} alt="Add New Beer" />
              <span className="image-text">Add New Beer</span>
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </header>
  );
}
