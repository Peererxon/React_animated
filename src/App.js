import React, {useState} from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import './css/animations.css';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import Footer from './home/Footer';
import Portada from './home/Portada';
import Guitarra from './home/Guitarra';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
//images

import cheeet from 'cheet.js'

/* cheeet('i n v i e', ()=> {
  console.log('lo lograste');
  libreria para escucar el teclado
}) */

function App() {
  /* const [nombre, setNombre] = useState("") */

/*   const data = {
    menu: [
      {
        href: 'index.html',
        title: 'Home'
      },
      {
        href: '#guitarra',
        title: 'Guitarras'
      },
      {
        href: 'precios.html',
        title: 'Precios'
      },
    ],
    
    logoPortada: logoPortada,

    guitarras: [
      {
        src:  acustica,
        alt:  'Guitarra Invie Acustica',
        name: 'Invie Acustica',
        features: [
          'Estilo vintage',
          'Madera pura',
          'Incluye estuche invisible de aluminio',
        ]
      },
      {
        src:  classic,
        alt:  'Guitarra Invie Classic',
        name: 'Invie Classic',
        features: [
          'Estilo vintage',
          'Liviana',
          'Empieza tu camino como rockstar',
        ]
      }
    ]

  } */

  return (
/*     <div className="App">
      <header className="App-header">
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout= {2000}
          transitionLeaveTimeout= {1100}
        >
        <p key={nombre}>
          {nombre}
        </p>

      </CSSTransitionGroup>
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" onChange = { (ev) => { setNombre(ev.target.value) } } />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */

    <div className = "App">
      <Portada/>
      <Guitarra/>
      <Footer />
    </div>
  );
}

export default App;
