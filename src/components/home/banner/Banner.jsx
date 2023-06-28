
import { Link } from "react-router-dom";
import { console } from "../../../assets/index";

const Banner = () => {

  return (
  <>
    <div className="banner-content">
      <div className="banner-badge">join streaming</div>
      <h1 className="banner-title">best online game to play</h1>
      <p className="lead-text">
        Live gaming with lots of other games Discover the world of popular games
        across various categories, handpicked for your enjoyment. From action
        and adventure to strategy and sports, we've got it all. Explore our
        extensive collection and find the perfect game that matches your
        preferences.
      </p>
      <button type="button" className="banner-btn">
        <span className="me-4">
          <img src={console} alt="" />
        </span>
        <Link to={'/game'}>play now</Link>
      </button>
    </div>

  </>
  );
};

export default Banner;
