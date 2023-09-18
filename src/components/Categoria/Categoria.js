import React from "react";
import './Categoria.css'

const Categoria = (props) => {
    return (
        <div className="categoria-container">
            <div className="circulo">
                <img src={props.imagem} />
            </div>
            <div className="retangulo">
                <h1>{String(props.titulo).toUpperCase()}</h1>
            </div>
        </div>
    )
}

export default Categoria;