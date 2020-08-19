import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

class NavbarPage extends Component {
  prevScrollpos = 0;

  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "service", navheading: "Services" },
        { id: 3, idnm: "features", navheading: "Features" },
        { id: 4, idnm: "client", navheading: "Client" },
        { id: 5, idnm: "pricing", navheading: "Pricing" },
      ],
      isOpen: false,
      topPos: "0",
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.handleScrollMenu = this.handleScrollMenu.bind(this);
  }

  handleScrollMenu() {
    let currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > currentScrollPos) {
      this.setState({ topPos: "0" });
    } else {
      this.setState({ topPos: "-420px" });
    }
    this.prevScrollpos = currentScrollPos;
  }

  componentDidMount() {
    this.prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", this.handleScrollMenu);
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <header
          className={`navbar navbar-expand-lg fixed-top navbar-custom ${
            this.props.isStickyNav === true
              ? `sticky sticky-light`
              : ` navbar-light`
          }`}
          id="navbar"
          style={{ top: this.state.topPos }}
        >
          <Container>
            <Link to="/" className="logo">
              <img
                src={this.props.imglight ? logolight : logodark}
                alt=""
                className="logo-light"
                height={32}
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleLine}
            >
              <i className="remixicon-menu-fill" />
            </button>

            <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="150"
              headerBackground="false"
              activeNavClass="active"
            >
              <div
                className="collapse navbar-collapse"
                id="navbarCollapse"
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul className="navbar-nav mx-auto navbar-center" id="mySidenav">
                  {this.state.navItems.map((item, key) => (
                    <li
                      key={key}
                      className={
                        item.navheading === "Home"
                          ? "nav-item active"
                          : "nav-item"
                      }
                    >
                      <a href={"#" + item.idnm} className="nav-link">
                        {" "}
                        {item.navheading}
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="remixicon-facebook-line f-16" />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="remixicon-twitter-line f-16" />
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="#" className="nav-link">
                      <i className="remixicon-instagram-line f-16" />
                    </Link>
                  </li>
                </ul>
              </div>
            </ScrollspyNav>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
