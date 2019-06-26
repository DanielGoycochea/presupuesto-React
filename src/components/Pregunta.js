import React,{Fragment, useState} from 'react';
import Error from './Error'

function Pregunta (props){

const {setPresupuesto, setPreguntaPresupuesto} = props;

const [cantidad, setCantidad] = useState(0);
const [error, setError] = useState(false);


const agregarPresupuesto = (e)=>{
  e.preventDefault()

  //validar

  if(cantidad <= 0 || isNaN (cantidad)){
    setError(true)
    return;
  }
  setError(false)
  setPresupuesto(cantidad)
  setPreguntaPresupuesto(false)
}

return (
  <Fragment>
  	
  	  <h2>Cual es tu Presupuesto</h2>

      {error ? <Error mensaje='El presupuetos es incorrecto'/>: null}


      <form
        onSubmit={agregarPresupuesto}
      >
        
            <input  type="number" onChange={event => setCantidad(parseInt(event.target.value, 10))}className="u-full-width"
                              placeholder="Agrega tu Presupuesto"/>
            <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
        
          
      </form>
  
  </Fragment>

  )
  


}


export default Pregunta