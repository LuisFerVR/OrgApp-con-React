import "./formulario.css"
import CampoTexto from "../CampoTexto"

const Formulario = () =>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingresar url de su foto de perfil"/>
        </form>
    </section>
}

export default Formulario