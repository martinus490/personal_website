import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router-dom";
import {Container, Grid, Header, Icon, Menu} from "semantic-ui-react";

import "./App.css";

import AboutScreen from "./screens/about/react/index";
import EducationScreen from "./screens/education/react/index";

const PageSwitcher = () => (
  <Switch>
    <Route exact path="/" component={AboutScreen} />
    <Route exact path="/education" component={EducationScreen} />
  </Switch>
);

class MainScreen extends React.Component {
  state = {
    activeItem: 'about'
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    switch (name) {
      case 'about':
        this.redirectTo('/');
        break;
      case 'education':
        this.redirectTo('/education');
        break;
    }
  }

  redirectTo = (target) => {
    window.location = target;

    this.setState({
      loading: true
    })
  }

    render() {
    const { activeItem } = this.state

    return (
      <Container className='home-container'>
        <Header className="home-header">
          Martinus
        </Header>
        <Container className='main-menu-container'>
          <Menu pointing secondary compact className="main-menu">
            <Menu.Item
              name='about'
              active={activeItem === "about"}
              onClick={this.handleItemClick}
              class="main-menu-items"
            />
            <Menu.Item
              name='education'
              active={activeItem === "education"}
              onClick={this.handleItemClick}
              class="main-menu-items"
            />
            <Menu.Item
              name='work'
              active={activeItem === "work"}
              onClick={this.handleItemClick}
              class="main-menu-items"
            />
          </Menu>
        </Container>

        <PageSwitcher className='home-content'/>

        <Container className='home-footer'>
          <Container>
            <Icon name='github square' size='big'/>
            <Icon name='linkedin' size='big'/>
            <Icon name='instagram' size='big'/>
            <Icon name='facebook' size='big'/>
          </Container>
          <Container textAlign='right' className='copyright'>
            <h4>Copyright 2021 Martinus.</h4>
          </Container>
        </Container>
      </Container>
    )
  }
}

export default MainScreen;