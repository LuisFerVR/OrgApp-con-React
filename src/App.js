
import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/header";
import Formulario from './componentes/Formulario/formulario';
import MiOrg from './componentes/MiOrg';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true);

  //Se crea una funicón que se mandará como promps para el evento onClick
  //y esta mandará a llamar la función que actualiza el estado,
  //que es actualizarMostrar en este caso  y lo que hará es negar o cambiar el valor inicial
  const clickMostrarOcultarFormulario = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  // Ternario --> condicion ?  si es verdadero : si es falso
  //Corto circuito --> condición && haz Esto
  return (
    <div className="App">
      <Header/>
      {mostrarFormulario && <Formulario/>}
      <MiOrg clickMostrarOcultarFormulario={clickMostrarOcultarFormulario}/>
    </div>
  );
}

export default App;
