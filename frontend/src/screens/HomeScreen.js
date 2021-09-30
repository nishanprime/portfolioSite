import React from "react";
import { Row, Col, Container, Image, Modal } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Spacer from "../components/Spacer";
import ContactScreen from "./ContactScreen";
import ProjectsScreen from "./ProjectsScreen";
import SkillsScreen from "./SkillsScreen";
const HomeScreen = () => {
  return (
    <div>
      <Container className="text-center">
        <h1>NISHAN THAPA</h1>
        <strong>Junior Web Developer / CS student / Finance Student</strong>
      </Container>

      <Container className="text-center">
        <Spacer />

        <Image width="300" src="/images/pp.png" roundedCircle fluid />
        <Spacer />
        <div
          className="card text-white bg-secondary text-center"
          style={{
            maxWidth: "100%",
            marginTop: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div class="card-header">
            <h4>About Me</h4>
          </div>
          <div class="card-body">
            <p class="card-text">
              I am currently a sophomore at Drexel Univeristy, USA. I am
              majoring in Computer Science and minoring in Finance. I have some
              experience working across the full-stack web development. I am
              more into backend than frontend; however, I still have quite good
              understanding of frontend development. I have also built a few
              projects by myself (and as a team) and am currently looking for an
              internship/role where I can grow and develop more as a web
              developer and an individual as well. You can check my area of
              experience by clicking on "Skills" from navigation menu above.
              Please let me know if I can be of your use through "Contact" link
              above.
            </p>
          </div>
        </div>
      </Container>
      <div id="projects">
        <Spacer t="50px" />
        <Container className="text-center">
          <h1>Projects</h1>
        </Container>
        <Spacer t="20px" />

        <ProjectsScreen />
        <Spacer t="20px" />

        <div id="skillsSection">
          <Container className="text-center">
            <h1>Skills / Experience</h1>
          </Container>
          <Spacer t="20px" />
          <SkillsScreen />
        </div>
        <Spacer t="20px" />

        <div>
        {/* <Modal show={true} onHide={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer></Modal.Footer>
                </Modal> */}
        </div>

        <div id="contactSection">
          <Container className="text-center">
            <h1>Contact</h1>
          </Container>
          <ContactScreen />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
