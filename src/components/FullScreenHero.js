import {TweenMax, Power4} from "gsap/TweenMax"
import React, { Component } from 'react'
import {assign} from 'lodash'

class Menu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scrolledTime: 0,
      heroStyle : {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${props.src})`
      },
      indicatorProgress: {
        backgroundImage: "url(./static/circle_red.svg)",
      }
    }
    this.heroPicture = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize)
    window.onmousewheel = this.handleScroll

    this.handleResize()
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize)
  }

  handleScroll = (e) => {

    if(this.state.scrolledTime >= 10) return true

    this.setState({
      scrolledTime: this.state.scrolledTime + 1,
      indicatorProgress: assign({}, this.state.indicatorProgress, {
        transform: `rotate(${Math.min((60*this.state.scrolledTime) + 180,360)}deg)`
      })
    })
    e.preventDefault()
  }

  handleResize = () => {
    console.log('resizing');
    this.setState({
      heroStyle: assign({}, this.state.heroStyle, {
        height: (window.innerHeight || document.documentElement.clientHeight) - 70
      })
    })
  }

  render() {
    const {heroStyle, indicatorProgress} = this.state
    return (
      <div ref={this.heroPicture} className="container-fluid" style={heroStyle}>
        {this.props.children}

        <div id="scrollIndicator" style={{
            backgroundImage: "url(./static/circle_white.svg)",
            opacity: this.state.scrolledTime >= 10 ? 0 : 1
          }}>
          <div className="progress" style={indicatorProgress}></div>
          <i style={{backgroundImage: "url(./static/arrowlet.svg)"}}></i>
        </div>
      </div>
    );
  }
}

export default Menu;
