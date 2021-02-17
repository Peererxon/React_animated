import React from 'react';
import './App.css';
import './css/animations.css';
import Footer from './home/Footer';
import Portada from './home/Portada';
import Guitarra from './home/Guitarra';

//images



function App() {
  return (

    <div className = "App">
      <Portada/>
      <Guitarra/>
      <Footer />
    </div>
  );
}

export default App;
