import React from "react";
import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
import Spacer from "../components/Spacer";
import projectData from "../projectsData";
import Message from "../components/Message"
const ProjectsScreen = ({projects}) => {
  return (
    <div>
      <Container>
         
        <Row>
          {projects.map((data) => (
            <Col sm={12} xs={6} lg={4}>
              <Card style={{ width: "20rem" }}>
                <Card.Img variant="top" src={data.image} />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>

                  <h5 class="card-text" style={{color:"teal"}}>Technology Used</h5>

                  <Row>
                    {data.technologyUsed.map((tech) => (
                      <Col sm={12} md={6} lg={6} className="text-center">
                        {tech}
                      </Col>
                    ))}
                  </Row>
                  <Spacer/>
                  <a style={{color:"blue"}} href={data.demoSite} target="_blank" class="card-link">
                    Demo Link
                  </a>
                  <a style={{color:"red"}} href={data.gitHubRepo} target="_blank" class="card-link">
                    Github Link
                  </a>
                </Card.Body>
                
              </Card>
              <Spacer/>
            </Col>
          ))}
        </Row>
        
      </Container>
    </div>
  );
};

export default ProjectsScreen;
