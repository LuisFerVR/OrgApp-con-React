import "./miOrg.css"
import { useState } from "react"

const MiOrg = (props) =>{
    //Estado --> Hooks
    //useState()

    //const [nombreVariable,funciónActualizadora] = useState(valorInicial);
    //const [nombre, actualizarNombre] = useState("Harland");
    /* const [mostrar,actualizarMostrar] = useState(true);

    const manejoDeClick = () =>{
        actualizarMostrar(!mostrar);
    } */

    return <section className="seccionOrganizacion">
        <h3>Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.clickMostrarOcultarFormulario}></img>
    </section>
}

export default MiOrg