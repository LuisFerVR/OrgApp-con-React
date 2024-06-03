import "./colaborador.css"
import { IoCloseCircle } from "react-icons/io5";
import {AiOutlineLike, AiFillLike} from "react-icons/ai"
const Colaborador = (props) => {

    const {nombre, puesto, equipo, urlDeFoto, id ,fav}=props.datos;
    const {colorP,eliminarColaborador,like}=props;
    return <div className="colaborador">
        <IoCloseCircle className="eliminar" onClick={(()=>eliminarColaborador(id))}/>
        <div className="encabezado" style={{backgroundColor:colorP}}>
            <img src={urlDeFoto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav?<AiFillLike color="blue" onClick={()=>like(id)}/>:<AiOutlineLike onClick={()=>like(id)}/>}
        </div>
    </div>
}

export default Colaborador