import {TweenMax, Power4} from "gsap/TweenMax"
import React, { Component } from 'react'

class Find extends Component {

  constructor(props) {
    super(props)
    this.mainFrame = React.createRef();
  }

  render() {
    return (
      <React.Fragment>

        <div className="search__inner search__inner--up" style={{transform: 'translateY(' + (this.props.showFinder ? 0 : -100) +'%)'}}>
          <div className="closeClick" onClick={this.props.closeMe} style={{backgroundImage: "url(./static/close.svg)"}}></div>
  				<form className="search__form" >
  					<input className="search__input" name="search" type="search" placeholder="Search" />
            <img src='./static/lente.svg' className="magnifier" onClick={e => this.setState({showFinder:true})} />

  					<span className="search__info">Premi <b>INVIO</b> per cercare o <b>ESC</b> per uscire</span>
  				</form>
  			</div>

        <div className="search__inner search__inner--down" style={{transform: 'translateY(' + (this.props.showFinder ? 0 : 100) +'%)'}}>
  				<div className="search__related">

            <div className="search__suggestion">
              <span>Per il tuo domani</span>
              <span>Chi Siamo</span>
  						<span>Informazioni per il pubblico</span>
  					</div>

            <div className="search__suggestion">
              <span>Buono a sapersi</span>
              <span>Contatti</span>
  						<span>Trasparenza</span>
  					</div>

  				</div>
  			</div>

        <div className="greyOverflow" style={{opacity: (this.props.showFinder ? 0.45 : 0), zIndex: (this.props.showFinder ? 9 : -9)}}></div>

        <div className="mainFrame" ref={this.mainFrame} style={{transform: this.props.showFinder ? 'scale(0.96 )' : ''}}>
          {this.props.children}
        </div>




      </React.Fragment>
    );
  }
}

export default Find;
