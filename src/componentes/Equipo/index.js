import "./equipo.css"
import "../Colaborador/index"
import Colaborador from "../Colaborador/index";

const Equipo = (props) => {
    //Destructuración:
    const { colorP, colorS, nombreEquipo} = props.datos;

    const colorSubrayado = {
        borderColor: colorP
    }
    
    return <section className="Equipo" style={{backgroundColor:colorS}}>
        <h3 style={colorSubrayado}>{nombreEquipo}</h3>
        <div className="colaboradores">
            <Colaborador/>
            <Colaborador/>
        </div>
    </section>
}

export default Equipo