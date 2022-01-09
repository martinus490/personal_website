import React from "react";
import { StickyNav } from "react-js-stickynav";
import { Menu } from "semantic-ui-react";

import AboutScreen from "./screens/about/react/index";
import WorkScreen from "./screens/work2/react/index";
import ContactScreen from "./screens/contact/react/index";
import HomeScreen from "./screens/home/react/index";

import "./App.css";
import { scroller } from "react-scroll/modules";

console.log = function () {};

class MainScreen extends React.Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll);
  }

  onScroll = () => {
    var home = document.querySelector(".home");
    var homeRect = home.getBoundingClientRect();

    var aboutMe = document.querySelector(".about-me");
    var aboutMeRect = aboutMe.getBoundingClientRect();

    var work = document.querySelector(".work");
    var workRect = work.getBoundingClientRect();
    
    if (homeRect.top -1 < home.offsetHeight * 0.8) {
      this.setState({ activeItem: "home" })
    }
    if (homeRect.top * -1 >= home.offsetHeight * 0.8) {
      this.setState({ activeItem: "about-me" })
    }
    if (aboutMeRect.top * -1 >= aboutMe.offsetHeight * 0.8) {
      this.setState({ activeItem: "work" })
    }
    if (workRect.top * -1 >= work.offsetHeight * 0.8) {
      this.setState({ activeItem: "contact" })
    }
  }

  render() {
    const { activeItem } = this.state
    return (
      <div className="main-container"
        onScroll={this.onScroll}>
        {/* {style()} */}
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
      </div>
    )
  }
}

export default MainScreen;