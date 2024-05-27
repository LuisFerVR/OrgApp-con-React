import "./listaDeOpciones.css"

const ListaOpciones = () =>{

    const IListaDeOpciones =[
        "Programación",
        "Front-end",
        "Data Science",
        "Devops",
        "UX y UI",
        "Móviles",
        "Innovación y gestión"
    ]

    /* Método map -> arreglo.map((equipo,index)=>{
        return <option></option>
    }) */

    return <div className="lista-opciones">
        <label>Equipos:</label>
        <select>
            {IListaDeOpciones.map( (equipo,index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones