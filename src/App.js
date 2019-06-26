import React, {useState} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario'

function App() {

//definir el state del presupuesto

const [presupuesto, setPresupuesto ] =useState(0);
const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true)



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
            />
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario/>
                </div>
                <div className="one-half column">

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
