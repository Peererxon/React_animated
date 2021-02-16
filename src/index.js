import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
//images


//Easter

import easterA from './images/easter-a.jpg';
import easterB from './images/easterB.jpeg';
import cheeet from 'cheet.js'


const initialState = {
  isAnimated:false,
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

}


function reducer(state,action){
  switch(action.type){
    case 'UPDATE_PROPS':
      const newProps= action.payload.props;
      return {
        ...state,
        ...newProps
      }
    default:
      return state
  }
}

const store = createStore( reducer, initialState )

const easter = {
  isAnimated:'is-animated',
  menu: [
    {
      href: 'index.html',
      title: 'Home'
    },
  ],
  guitarras: [
    {
      src:  easterA,
      alt:  'Optimus',
      name: 'Optimus',
      features: [
        'Golpe fuerte',
        'Acero autobot',
        'Incluye espada invie',
      ]
    },
    {
      src:  easterB,
      alt:  'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo vintage',
        'Liviana',
        'Empieza tu camino como rockstar',
      ]
    },
  ]
}


cheeet('i n v i e', ()=> {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
      
    }
  });
});

cheeet ( 'g o b a c k', ()=> {
  store.dispatch ({
    type: 'UPDATE_PROPS',
    payload :{
      props: initialState
    }
  });
});
export const updateProps = payload => ({
  type: 'UPDATE_PROPS',
  payload,
})

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
