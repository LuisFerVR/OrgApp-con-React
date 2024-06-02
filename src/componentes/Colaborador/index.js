import "./colaborador.css"
import { IoCloseCircle } from "react-icons/io5";
const Colaborador = (props) => {

    const {nombre,puesto,equipo,urlDeFoto}=props.datos;
    const {colorP,eliminarColaborador}=props;
    return <div className="colaborador">
        <IoCloseCircle className="eliminar"/>
        <div className="encabezado" style={{backgroundColor:colorP}}>
            <img src={urlDeFoto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
}

export default Colaborador