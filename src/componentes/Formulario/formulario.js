import "./formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaDeOpciones"
const Formulario = () =>{

    const manejarEnvioDeFormulario = (event) => {{
        event.preventDefault();
        console.log("hola");
    }}

    return <section className="formulario">
        <form onSubmit={manejarEnvioDeFormulario}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTexto titulo="Foto" placeholder="Ingresar url de su foto de perfil" required/>
            <ListaOpciones/>
            <button type="submit">Crear Colaborador</button>
        </form>
    </section>
}

export default Formulario