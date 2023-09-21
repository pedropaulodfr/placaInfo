import React, { useState, useEffect } from "react";
import './AreaResultado.css'
import Categoria from "../Categoria/Categoria";
import MotoIcon from '../../assets/motoIcon.png'
import CarroIcon from '../../assets/carroIcon.png'
import CaminhaoIcon from '../../assets/caminhaoIcon.png'
import CamionetaIcon from '../../assets/CamionetaIcon.png'
import ReboqueIcon from '../../assets/reboqueIcon.png'
import SemiReboqueIcon from '../../assets/semireboqueIcon.png'
import OnibusIcon from '../../assets/onibusIcon.png'
import MicroOnibusIcon from '../../assets/microonibusIcon.png'
import TriciculoIcon from '../../assets/triciculoIcon.png'
import RodaIcon from '../../assets/rodaIcon.png'
import Tabela from "../Tabela/Tabela";
import TabelaHorizontal from "../TabelaHorizontal/TabelaHorizontal";

const AreaResultado = ({ data }) => {
    const tipoVeiculo = data.extra && data.extra.tipo_veiculo && data.extra.tipo_veiculo.tipo_veiculo;
    const isFipe = data.fipe && data.fipe.dados && data.fipe.dados.length > 0;
    const [icone, setIcone] = useState(CarroIcon)

    const titulosLinhas = [
       "PLACA", "MARCA", "MODELO", "COR", "ANO FABRICAÇÃO", "ANO MODELO", "CHASSI", "MUNICÍPIO", "ORIGEM", "SITUAÇÃO"
    ]

    const setIconeBasedOnTipoVeiculo = (tipoVeiculo) => {
        switch (tipoVeiculo) {
            case "Motocicleta":
                return MotoIcon;
            case "Automovel":
                return CarroIcon;
            case "Caminhao":
                return CaminhaoIcon;
            case "Camioneta":
                return CamionetaIcon;
            case "Reboque":
                return ReboqueIcon;
            case "Semi-Reboque":
                return SemiReboqueIcon;
            case "Onibus":
                return OnibusIcon;
            case "Micro Onibus":
                return MicroOnibusIcon;
            case "Triciclo":
                return TriciculoIcon;
            default:
                return RodaIcon;
        }
    };
    
    useEffect(() => {
        const iconeTipo = setIconeBasedOnTipoVeiculo(tipoVeiculo);
        setIcone(iconeTipo);
    }, [tipoVeiculo]); 
    
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