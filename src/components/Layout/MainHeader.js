import "../../css/responsive.css";
import "../../css/bootstrap.min.css";
import "../../css/style.css";
import "../../css/meanmenu.css";

import logo from "../../images/logo.png";
import search_icon from "../../images/search_icon.png";
import shop_icon from "../../images/shop_icon.png";
import running_shoes from "../../images/running-shoes.png";
const MainHeader = () => {
  return (
    <div className="main-layout">
      <div className="header_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="logo">
                <a href="#">
                  <img src={logo} />
                </a>
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
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a className="nav-item nav-link" href="index.html">
                      Home
                    </a>
                    <a className="nav-item nav-link" href="collection.html">
                      Collection
                    </a>
                    <a className="nav-item nav-link" href="shoes.html">
                      Shoes
                    </a>
                    <a className="nav-item nav-link" href="racing boots.html">
                      Racing Boots
                    </a>
                    <a className="nav-item nav-link" href="contact.html">
                      Contact
                    </a>
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
        <div className="banner_section">
          <div className="container-fluid">
            <section className="slide-wrapper">
              <div className="container-fluid">
                <div
                  id="myCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-sm-2 padding_0">
                          <p className="mens_taital">Men Shoes</p>
                          <div className="page_no">0/2</div>
                          <p className="mens_taital_2">Men Shoes</p>
                        </div>
                        <div className="col-sm-5">
                          <div className="banner_taital">
                            <h1 className="banner_text">New Running Shoes </h1>
                            <h1 className="mens_text">
                              <strong>Men's Like Plex</strong>
                            </h1>
                            <p className="lorem_text">
                              ipsum dolor sit amet, consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et
                              dolore magna aliqua.
                            </p>
                            <button className="buy_bt">Buy Now</button>
                            <button className="more_bt">See More</button>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="shoes_img">
                            <img src={running_shoes} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
