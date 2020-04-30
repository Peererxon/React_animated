import React from 'react';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

function Guitarra({guitarras}){

    return (
        <section id="guitarras" className="guitarras contenedor">
      <h2>Nuestra guitarras</h2>
      <div className="video-demo-contenedor">
        <div className="video-demo">
          <div className="video-responsive-contenedor">
            <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      {
        guitarras.map(( guitarra, index ) =>{
          return(
            <article className="guitarra" key = {index}>
              <CSSTransitionGroup 
              transitionName = "flip"
              transitionEnterTimeout= {500}
              transitionLeave={false}
              >
                <img
                className="guitarra-image"
                key={guitarra.src}
                src= {guitarra.src}  
                alt={guitarra.alt} 
                width="350"
                height= "350"
                />
              </CSSTransitionGroup>
              <CSSTransitionGroup 
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeave = {false}
              >

              <div className="contenedor-guitarra" key={guitarra.name}>
                <h3 className="guitarra-name">{guitarra.name}</h3>
                  <ol>
                { guitarra.features.map(( feature, index ) =>{
                    return (
                        <li key={index}>{feature}</li>
                    )
                  })
                }
                  </ol>
              </div>
                
              </CSSTransitionGroup>
            </article>
            
          )
        })
      }
    </section>
    )
}

const mapStateToProps = state => {
  return {
    guitarras: state.guitarras
  }
}

export default connect( mapStateToProps,null )(Guitarra);