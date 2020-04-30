import React, { Component } from 'react';
import Logo2x from '../images/invie2x.png';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Heart from './Heart';

class Portada extends Component {
  render() {
    function renderHearts(){
      const corazones = new Array(40).fill({})
      return(
        
        corazones.map( (corazon,index)=>{
          const estilos = {
            left : Math.floor( Math.random( 10 ) * ( window.innerWidth - 0 ) )+"px",
            animationDelay : Math.floor( Math.random() * ( 10000 - 0 ) )+"ms",
          }
          return(
              <Heart key={index} estilos={estilos}/>
            )
        } )
      )
    }
    return (
      <section id="portada" className={`portada background ${this.props.animated}`}>
      <header id="header" className="header contenedor">
          <figure className="logotipo">
            <img src= {this.props.logo} srcSet={this.props.logo+" 1x",Logo2x+" 2x"} width="186" height="60" alt="Invie logotipo"/>
          </figure>
          <span className="burguer-button icon-menu" id="burguer-button"></span>
          <nav className="menu" id="menu">
            <ul>
            { this.props.menu.map( (item) =>{
              return(
                
                <li key={item.title}>
                <a href={item.href}>{item.title} </a>
              </li>
                    )
                  }) 
                }
            </ul>
          </nav>
      </header>
      <CSSTransitionGroup 
          transitionName="animationInOut"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
          >
          {
            !this.props.animated &&
            <div className="contenedor" key="portada">
              <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
              <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
              <a className="button" href="#guitarras">Conoce mas</a>
            </div>
          
          }

        </CSSTransitionGroup>
        {
          this.props.animated &&
          renderHearts()
        }
    </section>
    )
  }
}

function mapStateToProps(state){
  return {
    menu : state.menu,
    logo : state.logoPortada,
    animated: state.isAnimated,
  }
}

export default connect (mapStateToProps,null) (Portada)