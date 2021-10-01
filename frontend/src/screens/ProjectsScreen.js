import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Image, Card, Button } from "react-bootstrap";
import Spacer from "../components/Spacer";
import projectData from "../projectsData";
import Message from "../components/Message";
import { delProject } from "../actions/projectData";
import Loader from "../components/Lodaer";
const ProjectsScreen = ({ projects }) => {
  const dispatch = useDispatch();
  const projectDelete = useSelector((state) => state.projectDelete);
  const { error, loading, success } = projectDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    console.log("Deleted");
  }, [success]);

  return (
    <div>
      <Container>
        <Row>
          {projects && projects.length > 0 ? (
            projects.map((data) => (
              <Col sm={12} xs={6} lg={4}>
                {loading && <Loader />}
                {error && <Message>{error}</Message>}
                {userInfo && userInfo.token && (
                  <i
                    className="fas fa-trash"
                    style={{ color: "red", fontSize: "2rem" }}
                    onClick={() => {
                      if (window.confirm("Are you sure?")) {
                        dispatch(delProject(data._id));
                      }
                    }}
                  ></i>
                )}

                <Card style={{ width: "20rem" }}>
                  <Card.Img variant="top" src={data.image} />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.description}</Card.Text>

                    <h5 class="card-text" style={{ color: "teal" }}>
                      Technology Used
                    </h5>

                    <Row>
                      {data.technologyUsed.map((tech) => (
                        <Col sm={12} md={6} lg={6} className="text-center">
                          {tech}
                        </Col>
                      ))}
                    </Row>
                    <Spacer />
                    <a
                      style={{ color: "blue" }}
                      href={data.demoSite}
                      target="_blank"
                      class="card-link"
                    >
                      Demo Link
                    </a>
                    <a
                      style={{ color: "red" }}
                      href={data.gitHubRepo}
                      target="_blank"
                      class="card-link"
                    >
                      Github Link
                    </a>
                  </Card.Body>
                </Card>
                <Spacer />
              </Col>
            ))
          ) : (
            <Message>No Projects added yet</Message>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsScreen;
