
import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/header";
import Formulario from './componentes/Formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer/footer';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([]);
  //Se crea una funicón que se mandará como promps para el evento onClick
  //y esta mandará a llamar la función que actualiza el estado,
  //que es actualizarMostrar en este caso  y lo que hará es negar o cambiar el valor inicial
  const clickMostrarOcultarFormulario = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  const IListaDeOpciones =[
    {nombreEquipo:"Programación",
      colorP:"#57C278",
      colorS:"#D9F7E9"
    },
    {nombreEquipo:"Front-end",
      colorP:"#82CFFA",
      colorS:"#E8F8FF"
    },
    {nombreEquipo:"Data Science",
      colorP:"#A6D157",
      colorS:"#F0F8E2"
    },
    {nombreEquipo:"Devops",
      colorP:"#E06B69",
      colorS:"#FDE7E8"
    },
    {nombreEquipo:"UX y UI",
      colorP:"#DB6EBF",
      colorS:"#FAE9F5"
    },
    {nombreEquipo:"Móviles",
      colorP:"#FFBA05",
      colorS:"#FFF5D9"
    },
    {nombreEquipo:"Innovación y gestión",
      colorP:"#FF8A29",
      colorS:"#FFEEDF"
    }
]
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador :", colaborador);
    /* spread operator: Crea una copia de los valores actuales y luego simplemente agrega el colaborador
      Se realiza poniendo corchetes en sus parámetros a la función de actualizar un estado y entre ellos tres puntos 
    */
    actualizarColaboradores([...colaboradores,colaborador]);
  }

  // Ternario --> condicion ?  si es verdadero : si es falso
  //Corto circuito --> condición && haz Esto
  return (
    <div className="App">
      <Header/>
      {mostrarFormulario && <Formulario equipo={IListaDeOpciones.map((equipo)=>equipo.nombreEquipo)} 
                              registrarColaborador={registrarColaborador}
                            />}
      <MiOrg clickMostrarOcultarFormulario={clickMostrarOcultarFormulario}/>
      {
        IListaDeOpciones.map((equipo) => {
          return <Equipo key={equipo.nombreEquipo} datos={equipo} colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.nombreEquipo)}/>
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
