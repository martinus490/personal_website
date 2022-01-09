import React from "react";
import { Container, Icon } from "semantic-ui-react";

import "./index.css"

class Contact extends React.Component {
  handleOnClick(url) {
    const newWindow = window.open('https://' + url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  render() {
    return (
      <Container className="contact-container">
        <Container id="contact-body">
          <Container id="lets-connect">
            Let's Connect
          </Container>
          <Container id="social-media">
            <Icon name='github square' size='small' link onClick={() => this.handleOnClick("github.com/martinus-490")} />
            <Icon name='instagram' size='small' link onClick={() => this.handleOnClick("instagram.com/martinus490/")} />
            <Icon name='linkedin' size='small' link onClick={() => this.handleOnClick("linkedin.com/in/martinus490")} />
            <Icon name='mail' size='small' link onClick={() => window.open('mailto:martinus490@gmail.com')} />
          </Container>
        </Container>
        <Container id="contact-footer">
          <Icon fitted name="copyright" /> 2021 Martinus
        </Container>
      </Container>
    )
  }
}

export default Contact