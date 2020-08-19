import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Image
import heroBgImg from "../../assets/images/hero-two-img.png";

class Section extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.callModal.bind(this);
  }

  callModal = () => {
    this.refs.child.openModal();
  };

  render() {
    return (
      <React.Fragment>
        {/* HERO START */}

        <section
          className="hero-two-bg position-relative bg-gradient d-flex vh-100 mx-auto flex-column align-items-center justify-content-center "
          id="home"
        >
          <Container>
            <Row>
              <Col lg={12}>
                <div className="hero-two-content text-white">
                  <h1 className="hero-two-title line-height-1_4">
                    Create amazing landing page with Modzy
                  </h1>
                  <p className="pt-3 text-white-50">
                    It is a long established fact that a reader will be of a
                    page when established fact looking at its layout.
                  </p>
                  <Link to="#" className="btn btn-info mt-4">
                    Get started{" "}
                    <i className="remixicon-arrow-right-line pl-3" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="hero-two-img mt-5 mt-lg-0">
            <img
              src={heroBgImg}
              alt="heroBgImg"
              className="img-fluid d-block"
            />
          </div>
        </section>

        {/* HERO END  */}
      </React.Fragment>
    );
  }
}

export default Section;
