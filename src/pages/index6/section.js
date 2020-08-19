import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";

//Import Image
import heroBgImg from "../../assets/images/hero-6-bottom-img.png";

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
        <section className="hero-6-bg position-relative" id="home">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="text-center hero-6-content">
                  <i className="pe-7s-rocket h1 text-purple hero-6-title-icon" />
                  <h1 className="text-dark hero-6-title font-weight-medium mb-4 mt-5 line-height-1_4">
                    We help startups launch their products with awesome website
                  </h1>
                  <p className="text-muted w-75 mx-auto mb-5">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias.
                  </p>
                  <button type="button" className="btn btn-purple">
                    Get Started
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="container-fluid">
            <Row>
              <div className="home-bottom-shape">
                <img
                  src={heroBgImg}
                  alt="heroBgImg"
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
