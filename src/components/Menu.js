import {TweenMax, Power4} from "gsap/TweenMax"
import React, { Component } from 'react'

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrolled: false
    }
    this.falseMenu = React.createRef();

  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    var bounding = this.falseMenu.current.getBoundingClientRect()
    console.log(bounding.top);
    if(bounding.top < 0) {
      this.setState({
        scrolled:true
      })
    } else {
      this.setState({
        scrolled:false
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="menuFixed">
          <div className="container-fluid mainNav" >
            <div className={'row ' + (this.state.scrolled ? 'scrollingMenu' : '')}>
              {this.props.children}
            </div>
          </div>
        </div>
        <div className="falseMenu" ref={this.falseMenu}></div>
      </React.Fragment>
    );
  }
}

export default Menu;
