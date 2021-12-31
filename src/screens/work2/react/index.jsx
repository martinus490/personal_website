import React from "react"
import { Container, Image, Header, Modal, Grid, List } from "semantic-ui-react"
import tokopediaPic from "../../../assets/images/tokopedia.png";
import bcaPic from "../../../assets/images/BCA.png";
import workData from "../../../constant/work";
import _ from "lodash";

import "./index.css"

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokopediaActive: false,
      bcaActive: false
    }
  }

  renderJobDescription = (flag) => {
    let data = [];
    if (flag === 1) data = [...workData.BCA_INTERN];
    else if (flag === 2) data = [...workData.BCA_FULL_TIME];
    else if (flag === 3) data = [...workData.TOKOPEDIA];

    return (
      <List as='ul'>
        {
          _.map(data, desc => {
            return (
              <List.Item as='li' className='job-description' key={desc}>
                <List.Content>{desc}</List.Content>
              </List.Item>
            )
          })
        }
      </List>
    );
  }

  render() {
    return (
      <Container className="work-container">
        <div className="working-group">
          <div className="working-card" id="tokopedia-card"
            onClick={() => this.setState({ tokopediaActive: true })}
          >
            <Modal
              size="large"
              onClose={() => this.setState({ tokopediaActive: false })}
              open={this.state.tokopediaActive}
              className="work-modal"
            >
              <Modal.Header>TOKOPEDIA</Modal.Header>
              <Modal.Content scrolling>
                <Grid padded stackable verticalAlign='middle' className='grid-work' divided>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Header as='h5'>
                        TOKOPEDIA
                        <Header.Subheader> Jakarta </Header.Subheader>
                        <Header.Subheader> Mar 2021 - Present </Header.Subheader>
                      </Header>
                    </Grid.Column>
                    <Grid.Column width={13} className='check'>
                      <Header as='h5'>
                        Software Engineer - Backend
                        <Header.Subheader>
                          Part Of User & Account Team. <br />
                          Job description:
                          {this.renderJobDescription(3)}
                        </Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Modal.Content>
            </Modal>

            <div className="pic">
              <Image src={tokopediaPic} size="small" />
            </div>

            <div className="work-desc">
              <Header>
                Tokopedia
                <Header.Subheader>
                  Software Engineer - Backend
                </Header.Subheader>
              </Header>
            </div>
          </div>
          <div className="working-card" id="bca-card"
            onClick={() => this.setState({ bcaActive: true })}
          >
            <Modal
              size="large"
              onClose={() => this.setState({ bcaActive: false })}
              open={this.state.bcaActive}
              className="work-modal"
            >
              <Modal.Header>BANK CENTRAL ASIA</Modal.Header>
              <Modal.Content scrolling>
              <Grid padded stackable verticalAlign='middle' className='grid-work' divided>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header as='h5'>
                      PT. BANK CENTRAL ASIA TBK.
                      <Header.Subheader> Jakarta </Header.Subheader>
                      <Header.Subheader> Apr 2019 - Mar 2021 </Header.Subheader>
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={13} className='check'>
                    <Header as='h5'>
                      IT Specialist
                      <Header.Subheader>
                        Part Of Software Quality Improvement Team. <br />
                        Job description:
                        {this.renderJobDescription(2)}
                      </Header.Subheader>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header as='h5'>
                      PT. BANK CENTRAL ASIA TBK.
                      <Header.Subheader> Jakarta </Header.Subheader>
                      <Header.Subheader> Oct 2018  - Mar 2019 </Header.Subheader>
                    </Header>
                  </Grid.Column>
                  <Grid.Column width={13} className='check'>
                    <Header as='h5'>
                      IT Specialist Intern
                      <Header.Subheader>
                        Part Of Software Quality Improvement Team. <br />
                        Job description:
                        {this.renderJobDescription(1)}
                      </Header.Subheader>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              </Modal.Content>
            </Modal>

            <div className="pic">
              <Image src={bcaPic} size="small" />
            </div>

            <div className="work-desc">
              <Header>
                Bank Central Asia
                <Header.Subheader>
                  IT Specialist
                </Header.Subheader>
              </Header>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default Work;