import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Importing Modal
import ModalSection from "../../components/Common/ModalSection";

//Import Image
import heroBgImg from "../../assets/images/hero-5-bg.jpg";
import heroVideoImg from "../../assets/images/hero-5-img.jpg";

import bottomShap from "../../assets/images/home-5-bottom-shape.png";

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
          className="hero-5-bg position-relative"
          id="home"
          style={{ background: `url(${heroBgImg}) center center` }}
        >
          <div className="bg-overlay" />
          <Container>
            <Row className=" justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h1 className="text-white hero-5-title font-weight-medium mb-4 line-height-1_4">
                    We Help Startups Launch Their Products
                  </h1>
                  <p className="text-white-50 w-75 mx-auto mb-5">
                    Nam libero tempore as cum soluta nobis est eligendi optio
                    cumque nihil impedit minus omnis maxime.
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <div className="position-relative">
                        <img
                          src={heroVideoImg}
                          alt="heroVideoImg"
                          className="img-fluid mx-auto d-block rounded shadow"
                        />
                        <div className="watch-video">
                          <div className="img-video">
                            <div className="border border-white w-100 h-100 rounded">
                              <div className="video-icon">
                                <Link
                                  to="#"
                                  onClick={this.callModal}
                                  className="video-play-icon text-white text-center"
                                >
                                  <i className="remixicon-play-fill play-icon play h2 mb-0 mx-auto" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/* Render ModalSection Component for Modal */}
              <ModalSection ref="child" channel="vimeo" videoId="99025203" />
            </Row>
          </Container>
          <div className="container-fluid">
            <Row>
              <div className="home-bottom-shape">
                <img
                  src={bottomShap}
                  alt="bottomShap"
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
