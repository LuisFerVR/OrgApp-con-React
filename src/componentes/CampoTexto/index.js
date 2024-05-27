import { useState } from "react"
import "./campoTexto.css"

const CampoTexto = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    const placeHolderMood = `${props.placeholder}...`
    return <div className="campo-texto">
        <label >{props.titulo}</label>
        <input placeholder={placeHolderMood} required={props.required} value={props.valor} onChange={manejarCambio}/>
    </div>
}

export default CampoTexto