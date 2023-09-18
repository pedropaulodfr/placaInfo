import React, { useState } from "react";
import './AreaResultado.css'
import Categoria from "../Categoria/Categoria";
import MotoIcon from '../../assets/motoIcon.png'
import CarroIcon from '../../assets/carroIcon.png'
import Tabela from "../Tabela/Tabela";
import TabelaHorizontal from "../TabelaHorizontal/TabelaHorizontal";

const AreaResultado = ({ data }) => {
    const tipoVeiculo = data.extra && data.extra.tipo_veiculo && data.extra.tipo_veiculo.tipo_veiculo;
    const isCarro = tipoVeiculo == 'Automovel';
    const icone = isCarro ? CarroIcon : MotoIcon;
    const isFipe = data.fipe && data.fipe.dados;

    const titulosLinhas = [
       "PLACA", "MARCA", "MODELO", "COR", "ANO FABRICAÇÃO", "ANO MODELO", "CHASSI", "MUNICÍPIO", "ORIGEM", "SITUAÇÃO"
    ]
   
    const resultadosLinhas = [
        `${String(data.placa).toUpperCase()} (${String(data.placa_alternativa).toUpperCase()})`,
        String(data.marca).toUpperCase(),
        String(data.modelo).toUpperCase(),
        String(data.cor).toUpperCase(),
        data.ano,
        data.anoModelo,
        data.chassi,
        `${String(data.municipio).toUpperCase()} - ${String(data.uf).toUpperCase()}`,
        String(data.origem).toUpperCase(),
        String(data.situacao).toUpperCase()
    ]
    
    const tituloLinhasFipe = [
        "CÓDIGO FIPE", "MODELO", "COMBUSTÍVEL", "ANO", "VALOR"
    ]

    const resultadosColunasFipe = []
    try {
        data.fipe.dados.forEach(element => {
            resultadosColunasFipe.push([element.codigo_fipe, element.texto_modelo, element.combustivel, element.ano_modelo, element.texto_valor])
         });
    } catch { }

    return(
        <div className="areaResultado-container">
            <div>
                {tipoVeiculo && JSON.stringify(data).length > 2 ?
                    <Categoria titulo={data.extra.tipo_veiculo.tipo_veiculo} imagem={icone} /> :
                    <Categoria titulo={''} imagem={icone} />
                    }
                <div className="marcaIcon">
                    <img src={data.logo} /> 
                </div>
                <Tabela 
                    titulosLinhas={titulosLinhas}
                    resultadosLinhas={resultadosLinhas}
                />
                {isFipe && 
                    <>
                        <p>Tabela Fipe</p>
                        <TabelaHorizontal
                            titulosColunas={tituloLinhasFipe}
                            resultadosColunas={resultadosColunasFipe}
                        />
                    </>
                }
            </div>
        </div>
    )
}

export default AreaResultado