import React from "react"
import { Container, Image, Header } from "semantic-ui-react"
import tokopediaPic from "../../../assets/images/tokopedia.png";
import bcaPic from "../../../assets/images/BCA.png";

import "./index.css"

class Work extends React.Component {
    render() {
        return (
            <Container className="work-container">
                <div className="working-group">
                    <div className="working-card" id="tokopedia-card">
                        <div className="pic">
                            <Image src={tokopediaPic} size="small" />
                        </div>

                        <div className="work-desc">
                            <Header as='h1' inverted color='grey'>
                                Tokopedia
                                <Header.Subheader>
                                    Software Engineer - Backend 
                                </Header.Subheader>
                            </Header>
                        </div>
                    </div>
                    <div className="working-card" id="bca-card">
                        <div className="pic">
                            <Image src={bcaPic} size="large" />
                        </div>

                        <div className="work-desc">
                            <Header as='h1' inverted color='grey'>
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