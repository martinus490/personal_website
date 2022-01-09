import React from "react"
import { Container } from "semantic-ui-react";
import Particles from "../components/particles.js"

import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <Container className="home-container">
        <Particles />

        <div id="home-title">
          Hi! I'm Martin.<br />
          I'm a software engineer.
        </div>
      </Container>
    )
  }
}

export default Home;