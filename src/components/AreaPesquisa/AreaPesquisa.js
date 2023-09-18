import React, { useState, useEffect } from "react";
import './AreaPesquisa.css'
import axios from 'axios';
import Alertas from "../Alertas/Alertas";


const AreaPesquisa = (props) => {
    const [placa, setPlaca] = useState('')
    const [consultaSucesso, setConsultaSucesso] = useState(false)
    const [consultaErro, setConsultaErro] = useState(false)

    useEffect(() => {
        if (consultaSucesso || consultaErro) {
          const timer = setTimeout(() => {
            setConsultaSucesso(false);
            setConsultaErro(false);
          }, 4000);
    
          return () => clearTimeout(timer);
        }
    }, [consultaSucesso, consultaErro]);
   

    const handleChangePlaca = (event) => {
        handleMascaraPlaca()
        setPlaca(String(event.target.value).toUpperCase())
    }

    const handleMascaraPlaca = () => {
        const inputPlaca = document.querySelector("input.input-placa")

        inputPlaca.addEventListener("keypress", () => {
            let inputLength = inputPlaca.value.length

            if (inputLength == 3) {
                inputPlaca.value += '-'
            }
        
        })
    }

    const handleObterDados = () => {
        const api = `https://apiplaca.com.br/v2/consultas/${String(placa.replace('-', ''))}/15e8bd6b7a5d411a779c9eb8a0e4e3ca`
        
        axios.get(api)
        .then((response) => {
            props.resultadoPesquisa(response.data)
            props.estadoPesquisa(true)
        })
        .catch((error) => {
            console.error(error)
            setConsultaErro(true)
        })
    }

    return (
        <div className="areaPesquisa-container">
            <input 
                type="text"  
                className="input-placa" 
                placeholder="ABC-1D34" 
                maxLength="8"
                value={placa} 
                onChange={handleChangePlaca} 
            />
            <input type="button" value="Obter Dados" onClick={handleObterDados}/>
            {consultaErro && (
                <Alertas 
                    mensagem="Informações não encontradas!" 
                    corMensagem="#ffffff" corFundo="#FF9001" 
                    corBarraProgresso="white" 
                    setStatus={setConsultaErro}
                />
            )}
        </div>
    )
}

export default AreaPesquisa