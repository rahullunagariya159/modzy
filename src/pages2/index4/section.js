import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Image
import heroBgImg from "../../assets/images/hero-4-img.png";
import googleImg from "../../assets/images/google-img.png";
import bottomShap from "../../assets/images/home-4-bottom-shape.png";

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
        <section className="hero-4-bg position-relative bg-gradient" id="home">
          <Container className="container">
            <Row className="align-items-center hero-4-content">
              <Col lg={5}>
                <h1 className="text-white hero-4-title font-weight-medium mb-4 line-height-1_4">
                  Make your Site Amazing &amp; Unique
                </h1>
                <p className="text-white-50 mb-5">
                  Nam libero tempore cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod omnis maxime.
                </p>
                <div className="text-center subcribe-form mt-4">
                  <form action="#">
                    <input type="text" placeholder="Enter your email..." />
                    <button
                      type="submit"
                      className="btn rounded-pill btn-purple"
                    >
                      SubCribe
                    </button>
                  </form>
                </div>
                <div className="mt-4">
                  <div className="google-sign float-left mr-2">
                    <img
                      src={googleImg}
                      alt="googleImg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="pt-2">
                    <Link to="#" className="text-white f-15">
                      or sign up with google
                    </Link>
                  </div>
                </div>
              </Col>
              <div className="col-lg-6 offset-lg-1">
                <div className="hero-4-img mt-5 mt-lg-0">
                  <img
                    src={heroBgImg}
                    alt="hero-img"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </Row>
          </Container>
          <div className="container-fluid">
            <Row className="row">
              <div className="home-bottom-shape">
                <img
                  src={bottomShap}
                  alt="Shap"
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </Row>
          </div>
        </section>

        {/* HERO END  */}
      </React.Fragment>
    );
  }
}

export default Section;
