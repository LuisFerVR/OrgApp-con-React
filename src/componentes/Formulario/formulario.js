import { useState } from "react"
import "./formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaDeOpciones"
const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [urlDeFoto,actualizarUrlDeFoto] = useState("");
    const [equipo,actualizarEquipo]= useState("");

    const [titulo,actualizarTitulo]=useState("");
    const [color,actualizarColor]=useState("");
    
    const {registrarColaborador,crearEquipo}=props;

    const manejarEnvioDeFormulario = (event) => {{
        event.preventDefault();
        let data = {
            nombre: nombre,
            puesto: puesto,
            urlDeFoto : urlDeFoto,
            equipo:equipo
        }
        registrarColaborador(data);
    }}

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({nombreEquipo:titulo,colorP:color});
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvioDeFormulario}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar url de su foto de perfil" required valor={urlDeFoto} actualizarValor={actualizarUrlDeFoto}/>
            <ListaOpciones equipo={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipo}/>
            <button type="submit">Crear Colaborador</button>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear equipos.</h2>
            <Campo titulo="titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo type="color" titulo="color" placeholder="Ingresar color" required valor={color} actualizarValor={actualizarColor}/>
            <button type="submit">Crear Equipo</button>
        </form>
    </section>
}

export default Formulario