import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid'

function Formulario(props){
  
const {setGasto, setCrearGasto}= props

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

  //contruir objeto de gasto
  const gasto = {
    nombreGasto,
    cantidadGasto,
    id: shortid.generate()

  }

  setGasto(gasto);
  setCrearGasto(true)

  //eliminar alerta
  setError(false);

  //resetear el Form
  setNombreGasto('')
  setCantiodadGasto('')


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
          value = {nombreGasto}
        />
      </div>
      <div>
        <label>Cantidad del Gasto</label>
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange = {e=> setCantiodadGasto(parseInt(e.target.value, 10))}
          value = {cantidadGasto}
        />
        <input type="submit" className="button-primary u-full-width " value="Agregar Gasto"/>
      </div>
    </form>

  )
}

export default Formulario