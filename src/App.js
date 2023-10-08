import React, { useState, useEffect } from 'react';
import './App.css';
import AreaPesquisa from './components/AreaPesquisa/AreaPesquisa';
import AreaResultado from './components/AreaResultado/AreaResultado';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ArrowIcon from './components/ArrowIcon/ArrowIcon';


function App() {
  const [estadoPesquisa, setEstadoPesquisa] = useState(false)
  const [resultadoPesquisa, setResultadoPesquisa] = useState([])
  const [arrowVisible, setArrowVisible] = useState(true);
  const [ultimaPosicaoScroll, setUltimaPosicaoScroll] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const posicaoAtual  = window.scrollY;

      // Calcula se o scroll está indo para baixo ou para cima
      const scrollDescendo  = posicaoAtual  > ultimaPosicaoScroll;

      // Define a visibilidade da seta com base na posição atual e na direção do scroll
      setArrowVisible(
        (scrollDescendo  && posicaoAtual  > 200) || // Aparece se estiver descendo e já se passaram 200 pixels
        (!scrollDescendo  && posicaoAtual  === 0) // Aparece se estiver subindo e a posição do scroll é 0
      );

      // Atualiza a última posição conhecida do scroll
      setUltimaPosicaoScroll(posicaoAtual );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ultimaPosicaoScroll]);

  return (
    <div className="App">
      <Header />
      {arrowVisible && <ArrowIcon />}
      <AreaPesquisa  estadoPesquisa={setEstadoPesquisa} resultadoPesquisa={setResultadoPesquisa} />
      {estadoPesquisa && <AreaResultado data={resultadoPesquisa} />}
      <Footer />
    </div>
  );
}

export default App;
