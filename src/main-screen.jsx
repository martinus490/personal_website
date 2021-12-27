import React, { createRef } from "react";
import { StickyNav } from "react-js-stickynav";
import { Menu, Segment } from "semantic-ui-react";

import AboutScreen from "./screens/about/react/index";
import EducationScreen from "./screens/education/react/index";
import WorkScreen from "./screens/work2/react/index";
import ContactScreen from "./screens/contact/react/index";
import HomeScreen from "./screens/home/react/index";

import "./App.css";
import { scroller } from "react-scroll/modules";

const style = () => {
  return (
    <style jsx>{`
      .nav {
          background-color: white;
          transition: all 0.1s linear;
          position: fixed;
          z-index: 2000;
          padding: 10px 10px 0 10px;
          width: 100vw;
      }
      .scrollNav {
          z-index: 2000;
          background: white;
          width: 100vw;
      }
      .styl {
          padding-top: 80px;
      }
    `}</style>
  )
}

class MainScreen extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  render() {
    const { activeItem } = this.state
    return (
      <>
        {style()}
        <StickyNav>
          <Menu pointing secondary widths={4}>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='about-me'
              active={activeItem === 'about-me'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='work'
              active={activeItem === 'work'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </StickyNav>
        <div className="home"><HomeScreen /></div>
        <div className="about-me"><AboutScreen /></div>
        <div className="work"><WorkScreen /></div>
        <div className="contact"><ContactScreen /></div>
      </>
    )
  }
}

export default MainScreen;