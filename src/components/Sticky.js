import React, { Component } from 'react'
import stickybits from 'stickybits'

class Sticky extends Component {

  constructor(props) {
    super(props)
    this.state = {
      actualStyle: {},
      isFixed:false,
      isAbsolute:false
    }
    this.elementToStick = React.createRef();
  }

  componentDidMount = () => {
    stickybits(this.elementToStick.current, {
      useStickyClasses: true,
      stickyBitStickyOffset: this.props.offset || 0
    });
  }

  render() {

    return (
      <div ref={this.elementToStick} style={this.state.actualStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default Sticky;
