import React from "react";
import {Container, Grid, Header, Icon, List} from "semantic-ui-react";
import "./index.css"
import workData from "../../../constant/work";

import _ from "lodash";

class Work extends React.Component {

  renderJobDescription = (flag) => {
    let data = [];
    if(flag === 1) data = [...workData.BCA_INTERN]
    else if(flag === 2) data = [...workData.BCA_FULL_TIME];

    return(
      <List as='ul'>
        {
          _.map(data, desc => {
            return(
              <List.Item as='li' className='job-description'>
                <List.Content>{desc}</List.Content>
              </List.Item>
            )
          })
        }
      </List>
    );
  }

  render() {
    return(
      <Container className='work-container'>
        <Grid padded stackable verticalAlign='middle' className='grid-work'>
          <Grid.Row>
            <Grid.Column width={3} textAlign='center'>
              <Icon name='suitcase' size='massive'/>
            </Grid.Column>

            <Grid.Column width={12} textAlign='left'>
              <Grid stackable>
                <Grid.Row divided className='row'>
                  <Grid.Column width={4}>
                    <Header as='h5'>
                      PT. BANK CENTRAL ASIA TBK.
                      <Header.Subheader> Jakarta </Header.Subheader>
                      <Header.Subheader> Apr 2019 - Mrc 2021 </Header.Subheader>
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={12} className='check'>
                    <Header as='h5'>
                      IT Specialist
                      <Header.Subheader>
                        Part Of Software Quality Improvement Team. <br/>
                        Job description:
                        {this.renderJobDescription(2)}
                      </Header.Subheader>
                    </Header>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row divided className='row'>
                  <Grid.Column width={4}>
                    <Header as='h5'>
                      PT. BANK CENTRAL ASIA TBK.
                      <Header.Subheader> Jakarta </Header.Subheader>
                      <Header.Subheader> Oct 2018 - Mrc 2019 </Header.Subheader>
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Header as='h5'>
                      IT Specialist Intern
                      <Header.Subheader>
                        Part Of Software Quality Improvement Team. <br/>
                        Job description:
                        {this.renderJobDescription(1)}
                      </Header.Subheader>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Work