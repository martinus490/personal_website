import React from "react";
import {Container, Grid, Image} from "semantic-ui-react";
import picture from "../../../assets/images/martin2.jpg";

import "./index.css";

class About extends React.Component {
  render() {
    return(
      <Container className='about-container'>
        <Grid padded stackable textAlign='center' verticalAlign='middle' id="about-body">
          <Grid.Row columns={15}>
            <Grid.Column width={5}>
              <Image src={picture} fluid avatar id="profile-pic" />
            </Grid.Column>

            <Grid.Column width={10} textAlign='left' id="about-desc">
            I've graduated with a bachelor of computer science from Bina Nusantara University (PPTI BCA 4th Batch), 
            a passionate software developer who wants to learn new things related to technology. 
            I'm currently working at Tokopedia as a backend engineer and part of User & Account team.
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default About