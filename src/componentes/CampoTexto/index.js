import "./campoTexto.css"

const CampoTexto = (props) => {
    const placeHolderMood = `${props.placeholder}...`
    return <div className="campo-texto">
        <label >{props.titulo}</label>
        <input placeholder={placeHolderMood} required={props.required}/>
    </div>
}

export default CampoTexto