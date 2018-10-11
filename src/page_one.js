import React, { Component } from 'react'
import {Helmet} from "react-helmet"
import {Menu, Button, FullScreenHero, Find, Reveal} from "./components"

class PageOne extends Component {

  constructor() {
    super()
    this.state = {
      showFinder:false
    }
  }

  render() {
    return (
      <div className="App">

        <Helmet>
          <meta charSet="utf-8" />
          <title>Santander | Demo</title>
        </Helmet>

        <Find showFinder={this.state.showFinder} closeMe={e => this.setState({showFinder:false})}>

          <Menu>
            <div className="col-9 centered_menu">
              <div className="logo_container" style={{backgroundImage:'url(./static/logo.svg)'}}>
              </div>
              <a href="#">Per il tuo domani</a>
              <a href="#">Buono a sapersi</a>
              <a href="#">Prodotti</a>
              <a href="#">Chi siamo</a>
              <a href="#">Contatti</a>
            </div>
            <div className="col-3 dispFlex alignItemsCenter justContFlexEnd">
              <img src='./static/lente.svg' className="magnifier" onClick={e => this.setState({showFinder:true})} />
              <Button color="#1BB3BC">
                Area Riservata <img src='./static/user.svg' />
              </Button>
            </div>
          </Menu>

          <FullScreenHero src="'./static/img1.png'">
            <Reveal delay="1" speed="1.5"><h1 className="hero__title">Prestito</h1></Reveal>
            <Reveal delay="1.5" speed="1.5"><h2 className="hero__title">Santander</h2></Reveal>
          </FullScreenHero>

          <div className="container-fluid">
            <div className="row">
              <div className="col-8 subheadline_box">
                <div>
                  <h3>A modo <b>tuo</b></h3>
                  <p>
                    Qualunque cosa desideri realizzare, la farai a modo<br/>
                    tuo. Per questo i nostri prestiti personali si<br/>
                    adattano a te, non sei tu che devi adattarti a loro.
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="player">
                  <img src='./static/player.svg' />
                </div>
              </div>
            </div>
          </div>

      </Find>
    </div>
    );
  }
}

export default PageOne;
