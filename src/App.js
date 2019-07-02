import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

//definir el state del presupuesto

const [presupuesto, setPresupuesto ] =useState(0);
const [restante, setRestante] = useState(0)
const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true);
const [crearGasto, setCrearGasto] = useState (false)
const [gasto, setGasto] = useState({});
const [gastos, setgastos] =useState([]);

useEffect(()=>{
  if(crearGasto){
    const listaGastos = [...gastos, gasto]
  setgastos(listaGastos)

  //restar presupuesto

  const presupuestoRestante = restante -gasto.cantidadGasto
  setRestante(presupuestoRestante)
  //una vez agrregado lo pasomas a false

    setCrearGasto(false)
  }
  }, [crearGasto, gastos, gasto, restante])



  return (
    <div className="container">
      <header>
        <h1>Control de Gastos</h1>
        
        <div className="contenido-principal contenido">
          {(preguntaPresupuesto)
            ?
            <Pregunta
            setPresupuesto = {setPresupuesto}
            setPreguntaPresupuesto= {setPreguntaPresupuesto}
            setRestante={setRestante}
            />
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                  setGasto={setGasto}
                  setCrearGasto = {setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante= {restante}
                    />
                </div>
              </div>
            )
          }
        </div>
      </header>
     
     
    </div>
  );
}

export default App;
