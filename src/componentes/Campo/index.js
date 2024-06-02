import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {

    const {type = "text"} = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    const placeHolderMood = `${props.placeholder}...`
    return <div className={`campo campo-${type}`}>
        <label >{props.titulo}</label>
        <input type={type} placeholder={placeHolderMood} required={props.required} value={props.valor} onChange={manejarCambio}/>
    </div>
}

export default Campo