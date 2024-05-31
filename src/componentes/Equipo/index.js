import "./equipo.css"
import "../Colaborador/index"
import Colaborador from "../Colaborador/index";

const Equipo = (props) => {
    //Destructuración:
    const { colorP, colorS, nombreEquipo} = props.datos;
    const {colaboradores} = props
    const colorSubrayado = {
        borderColor: colorP
    }
    
    return <section className="Equipo" style={{backgroundColor:colorS}}>
        <h3 style={colorSubrayado}>{nombreEquipo}</h3>
        <div className="colaboradores">
            {colaboradores.map((colaborador,index)=><Colaborador datos={colaborador} key={index}/>)}
        </div>
    </section>
}

export default Equipo