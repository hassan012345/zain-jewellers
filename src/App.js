import React from 'react';
import Home from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Album from './components/Album';


function App() {
  return (
    <div>
      <Home />
      <Album />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
