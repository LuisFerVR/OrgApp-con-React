import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaDeOpciones"
const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [urlDeFoto,actualizarUrlDeFoto] = useState("");
    const [equipo,actualizarEquipo]= useState("");

    const manejarEnvioDeFormulario = (event) => {{
        event.preventDefault();
        let data = {
            nombre: nombre,
            puesto: puesto,
            urlDeFoto : urlDeFoto,
            equipo:equipo
        }
        props.registrarColaborador(data);
    }}

    return <section className="formulario">
        <form onSubmit={manejarEnvioDeFormulario}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingresar url de su foto de perfil" required valor={urlDeFoto} actualizarValor={actualizarUrlDeFoto}/>
            <ListaOpciones equipo={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipo}/>
            <button type="submit">Crear Colaborador</button>
        </form>
    </section>
}

export default Formulario