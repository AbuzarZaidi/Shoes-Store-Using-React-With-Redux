import { Link } from "react-router-dom";
import "../../css/responsive.css";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../css/meanmenu.css";

import logo from "../../images/logo.png";
import search_icon from "../../images/search_icon.png";
import shop_icon from "../../images/shop_icon.png";

const MainHeader = () => {
  return (
    <div className="main-layout">
      <div className="header_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="logo">
                <Link to="#">
                  <img src={logo} />
                </Link>
              </div>
            </div>
            <div className="col-sm-9">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">
                      Home
                    </Link>
                    <Link to="/collection" className="nav-item nav-link">
                      Collection
                    </Link>
                    <Link to="/store" className="nav-item nav-link">
                      Shoes
                    </Link>
                    <a className="nav-item nav-link" href="racing boots.html">
                      Racing Boots
                    </a>
                    <Link to="/contact" className="nav-item nav-link">
                      Contact
                    </Link>
                    <a className="nav-item nav-link last" href="#">
                      <img src={search_icon} />
                    </a>
                    <a className="nav-item nav-link last" href="contact.html">
                      <img src={shop_icon} />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
