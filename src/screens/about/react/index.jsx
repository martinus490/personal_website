import React from "react";
import {Container, Grid, Image} from "semantic-ui-react";
import picture from "../../../assets/images/mail.jpg";

import "./index.css";

class About extends React.Component {
  render() {
    return(
      <Container className='about-container'>
        <Grid padded stackable textAlign='center' verticalAlign='middle' id="about-body">
          <Grid.Row columns={15}>
            <Grid.Column width={5}>
              <Image src={picture} style={{'font-size':150}} avatar/>
            </Grid.Column>

            <Grid.Column width={10} textAlign='left'>
              <h2>
                Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit.
                Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo.
              </h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default About