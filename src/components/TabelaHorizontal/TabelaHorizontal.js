import React from "react";
import './TabelaHorizontal.css'

const TabelaHorizontal = ({ titulosColunas, resultadosColunas }) => {
    return (
        <div className="tabela-container">
            <table>
                <thead>
                    <tr>
                        {titulosColunas.map((titulo, index) => (
                            <th key={index} className="coluna">{titulo}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {resultadosColunas.map((linha, rowIndex) => (
                        <tr key={rowIndex}>
                            {linha.map((coluna, colIndex) => (
                                <td key={colIndex}>{coluna}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaHorizontal