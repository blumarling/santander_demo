import {TweenMax, Power4} from "gsap/TweenMax"
import React, { Component } from 'react'

class Reveal extends Component {

  // props disponibili
  // speed
  // from [top, bottom, left , right]
  //

  constructor(props) {
    super(props)
    this.state = {
      animCompleted: false
    }
    this.elementToMove = React.createRef();
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  doAnimate = () => {
    if (this.state.animCompleted) return false
    var elementToMove = this.elementToMove.current

    var startingProps = {
      opacity:0,
      y:60
    }

    var arrivingProps = {
      y:0,
      opacity:1,
      ease: Power4.easeOut,
      onComplete: this.setState({animCompleted:true})
    }

    var speed = this.props.speed || 0.5

    TweenMax.fromTo(elementToMove, speed, startingProps, arrivingProps).play()
  }

  handleScroll = () => {
    var bounding = this.elementToMove.current.getBoundingClientRect()
    var offset = this.props.offset || 50

    if (
    	bounding.top >= 0 &&
    	bounding.left >= 0 &&
    	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
    	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) - offset
    ) {
    	console.log('In the viewport!');
      this.doAnimate()
    } else {
    	console.log('Not in the viewport... whomp whomp');
    }
  }

  render() {
    return (
      <div ref={this.elementToMove} style={{opacity: 0}}>
        {this.props.children}
      </div>
    );
  }
}

export default Reveal;
