import "./equipo.css"
import "../Colaborador/index"
import Colaborador from "../Colaborador/index";
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    //Destructuración:
    const { colorP, colorS, nombreEquipo} = props.datos;
    const {colaboradores, eliminarColaborador, fnActualizarColorEquipos} = props
    const colorSubrayado = {
        borderColor: colorP
    }
    
    return <>{
        colaboradores.length > 0 &&
        <section className="Equipo" style={{backgroundColor:hexToRgba(colorP,0.7)}}>
            <input className="input-color" type="color" value={hexToRgba(colorP,0.7)} onChange={(evento)=>{
                fnActualizarColorEquipos(evento.target.value,nombreEquipo);
            }}/>
            <h3 style={colorSubrayado}>{nombreEquipo}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador,index)=><Colaborador eliminarColaborador={eliminarColaborador} datos={colaborador} key={index} colorP={colorP}/>)}
            </div>
        </section>
    }</>
    
}

export default Equipo