
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from "./componentes/Header/header";
import Formulario from './componentes/Formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer/footer';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front-end",
    urlDeFoto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    urlDeFoto: "https://tse2.mm.bing.net/th?id=OIP.oqc1VdskT3cZyutzb7-_BAHaEK&pid=Api&P=0&h=180",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav:false
  },
  {
    id: uuid(),
    equipo: "UX y UI",
    urlDeFoto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Programación",
    urlDeFoto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    urlDeFoto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav:false
  }]);

  const [IListaDeOpciones,actualizarEquipo] = useState([
    {
      id: uuid(),
      nombreEquipo:"Programación",
      colorP:"#57C278",
      colorS:"#D9F7E9"
    },
    {
      id: uuid(),
      nombreEquipo:"Front-end",
      colorP:"#82CFFA",
      colorS:"#E8F8FF"
    },
    {
      id: uuid(),
      nombreEquipo:"Data Science",
      colorP:"#A6D157",
      colorS:"#F0F8E2"
    },
    {
      id: uuid(),
      nombreEquipo:"Devops",
      colorP:"#E06B69",
      colorS:"#FDE7E8"
    },
    {
      id: uuid(),
      nombreEquipo:"UX y UI",
      colorP:"#DB6EBF",
      colorS:"#FAE9F5"
    },
    {
      id: uuid(),
      nombreEquipo:"Móviles",
      colorP:"#FFBA05",
      colorS:"#FFF5D9"
    },
    {
      id: uuid(),
      nombreEquipo:"Innovación y gestión",
      colorP:"#FF8A29",
      colorS:"#FFEEDF"
    }
  ]);

  //Se crea una funicón que se mandará como promps para el evento onClick
  //y esta mandará a llamar la función que actualiza el estado,
  //que es actualizarMostrar en este caso  y lo que hará es negar o cambiar el valor inicial
  const clickMostrarOcultarFormulario = () =>{
    actualizarMostrar(!mostrarFormulario);
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar el color de los equipos
  const fnActualizarColorEquipos = (color,id) =>{ 
    const equiposActualizados = IListaDeOpciones.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorP=color;
      }
      return equipo;
    })
    actualizarEquipo(equiposActualizados);
  }

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador :", colaborador);
    /* spread operator: Crea una copia de los valores actuales y luego simplemente agrega el colaborador
      Se realiza poniendo corchetes en sus parámetros a la función de actualizar un estado y entre ellos tres puntos 
    */
    actualizarColaboradores([...colaboradores,colaborador]);
  }

  //Crear un nuevo equipo:
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipo( [...IListaDeOpciones,{ nuevoEquipo,id:uuid() } ] )
  }

  const like = (id) => {
    console.log('like',id);
    const actualizarColaboradoresFav=colaboradores.map((colaborador)=>{
      if (colaborador.id==id) {
        colaborador.fav= !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(actualizarColaboradoresFav);
  }

  // Ternario --> condicion ?  si es verdadero : si es falso
  //Corto circuito --> condición && haz Esto
  return (
    <div className="App">
      <Header/>
      {mostrarFormulario && <Formulario crearEquipo={crearEquipo} equipo={IListaDeOpciones.map((equipo)=>equipo.nombreEquipo)} 
                              registrarColaborador={registrarColaborador}
                            />}
      <MiOrg clickMostrarOcultarFormulario={clickMostrarOcultarFormulario}/>
      {
        IListaDeOpciones.map((equipo) => {
          return <Equipo like={like} fnActualizarColorEquipos={fnActualizarColorEquipos} eliminarColaborador={eliminarColaborador} key={equipo.nombreEquipo} datos={equipo} colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.nombreEquipo)}/>
        })
      }
      <Footer/>
    </div>
  );
}

export default App;
