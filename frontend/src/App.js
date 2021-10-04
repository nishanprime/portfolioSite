import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProjectEditScreen from "./screens/ProjectEditScreen";
import SkillEditScreen from "./screens/SkillEditScreen";

const App = () => {
  return (
    <Router>
      <Container style={{ minHeight: "10px" }}></Container>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/projects/:id/edit" component={ProjectEditScreen} exact/>
          <Route path="/skills/:id/edit" component={SkillEditScreen} exact/>
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
