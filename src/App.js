import React, { useState } from 'react';
import './App.css';
import AreaPesquisa from './components/AreaPesquisa/AreaPesquisa';
import AreaResultado from './components/AreaResultado/AreaResultado';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [estadoPesquisa, setEstadoPesquisa] = useState(false)
  const [resultadoPesquisa, setResultadoPesquisa] = useState([])

  return (
    <div className="App">
      <Header />
      <AreaPesquisa  estadoPesquisa={setEstadoPesquisa} resultadoPesquisa={setResultadoPesquisa} />
      {estadoPesquisa && <AreaResultado data={resultadoPesquisa} />}
      <Footer />
    </div>
  );
}

export default App;
