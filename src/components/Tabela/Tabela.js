import React from "react";
import './Tabela.css'

const Tabela = ({ titulosLinhas, resultadosLinhas }) => {
    return (
        <div className="tabela-container">
            <table>
                <tbody>
                    {titulosLinhas.map((titulo, index) => (
                        <tr key={index}>
                            <td className="coluna-primaria">{titulo}</td>
                            <td className="coluna-secundaria">{resultadosLinhas[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela