import "./colaborador.css"

const Colaborador = (props) => {

    const {nombre,puesto,equipo,urlDeFoto}=props.datos;
    const {colorP}=props;
    return <div className="colaborador">
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