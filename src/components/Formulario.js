import React,{useState} from 'react';
import Error from './Error'

function Formulario(props){

//state
const [nombreGasto,setNombreGasto] = useState('');
const [cantidadGasto, setCantiodadGasto] =useState(0);
const [error, setError] = useState(false)

//agregar gasto

const agregarGasto = e =>{
  e.preventDefault()
  // validar
 if(cantidadGasto < 1 || isNaN (cantidadGasto)|| nombreGasto === ""){
    setError(true)
    return;

 }

  //pasar al componente


}

  return(
    <form onSubmit={agregarGasto}>
      <h2>Agrega tu Gasto</h2>

      {error ? <Error mensaje='Los campos son obligatorios o Presupuesto Incorrecto'/>: null}
      <div>
        <label>Nombre de Gasto</label>
        <input 
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange = {e=>setNombreGasto(e.target.value)}
        />
      </div>
      <div>
        <label>Cantidad del Gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange = {e=> setCantiodadGasto(parseInt(e.target.value, 10))}
        />
        <input type="submit" className="button-primary u-full-width " value="Agregar Gasto"/>
      </div>
    </form>

  )
}

export default Formulario