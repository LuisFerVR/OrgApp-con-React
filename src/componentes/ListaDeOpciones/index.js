import "./listaDeOpciones.css"

const ListaOpciones = (props) =>{

    const IListaDeOpciones =[
        "Programación",
        "Front-end",
        "Data Science",
        "Devops",
        "UX y UI",
        "Móviles",
        "Innovación y gestión"
    ]

    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    /* Método map -> arreglo.map((equipo,index)=>{
        return <option></option>
    }) */

    return <div className="lista-opciones">
        <label>Equipos:</label>
        <select value={props.equipo} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo...</option>
            {IListaDeOpciones.map( (equipo,index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones