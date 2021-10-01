import React from "react";
import { Image, Row, Col, Container } from "react-bootstrap";
import Spacer from "../components/Spacer";
import Message from "../components/Message";

const SkillsScreen = ({ skills }) => {
  return (
    <div>
      <Container>
        <Row>
          {(
            skills.map((skill) => (
              <Col lg={4} sm={6} md={4}>
                <div>
                  <Col sm={3} lg={6} md={6}>
                    <h4>{skill.techName}</h4>
                    <Image width="50" src={skill.image} roundedCircle />{" "}
                    <p>No. of year: {skill.experience}</p>
                  </Col>
                  <Col sm={9} lg={9} md={8}>
                    <div
                      class="progress"
                      style={{ position: "relative", top: "50%" }}
                    >
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.expertiseInPercent}` }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </Col>
                </div>
                <Spacer />
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default SkillsScreen;
