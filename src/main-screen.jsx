import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router-dom";
import {Container, Grid, Header, Icon, Menu} from "semantic-ui-react";

import "./App.css";

import AboutScreen from "./screens/about/react/index";
import EducationScreen from "./screens/education/react/index";
import WorkScreen from "./screens/work/react/index";
import ContactScreen from "./screens/contact/react";

const PageSwitcher = () => (
  <Switch>
    <Route exact path="/" component={AboutScreen} />
    <Route exact path="/education" component={EducationScreen} />
    <Route exact path="/work" component={WorkScreen} />
    <Route exact path="/contact" component={ContactScreen} />
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
      case 'work':
        this.redirectTo('/work');
        break;
      case 'contact':
        this.redirectTo('/contact');
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
            <Menu.Item
              name='contact'
              active={activeItem === "contact"}
              onClick={this.handleItemClick}
              class="main-menu-items"
            >Contact Me</Menu.Item>
          </Menu>
        </Container>

        <PageSwitcher className='home-content'/>

        <Grid columns={2} className='home-footer'>
          <Grid.Row>
            <Grid.Column>
              <Icon name='mail square' size='big'/>
              <Icon name='github square' size='big'/>
              <Icon name='linkedin' size='big'/>
              <Icon name='instagram' size='big'/>
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <h4>Copyright 2021 Martinus.</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default MainScreen;