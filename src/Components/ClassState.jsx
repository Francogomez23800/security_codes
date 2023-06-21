import { useContext } from "react";
import { SecurityCodesContext } from "../Context/Context";

const ClassState = () => {
const context = useContext(SecurityCodesContext)

const renderView = () =>(
  <div className="w-full flex flex-col items-center mt-10 mb-5">
  <h2 className="font-medium text-xl">Eliminar ClassState</h2>
  <p className="text-lg mb-1">
    Por favor escribe el codigo de seguridad.
  </p>
  {context.classLoading && (
    <p className="font-medium">
      Cargando...
    </p>)}
  {context.classSuccess && (
  <p className="text-green-500 font-medium mb-2">
    El codigo es valido.
  </p>)}
   {context.classError && (
  <p className="text-red-500 font-medium">
    El codigo es incorrecto
  </p>)} 
{!context.classSuccess && 
(<input
    placeholder="Codigo de seguridad"
    className="w-150 border border-gray-400 p-1 mb-2 rounded-lg"
    value={context.classValue}
    onChange={event=> context.setClassValue(event.target.value)}
  />)}
  {context.classSuccess ? 
  context.renderModifyPassword(context.setIsClassChangePasswordActive, true) 
  : 
  (<button 
  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
  onClick={() => {
    context.setClassLoading(true)
    context.changeClassState()}}>
    Comprobar
  </button>)}
</div>
)


  return(
context.isClassChangePasswordActive ?
context.renderChangePassword(
context.classNewPassword, context.setClassSECURITY_CODE,
context.setClassNewPassword, context.setIsClassChangePasswordActive, 
context.setClassValue, context.isClassPasswordSuccess, context.changeClassState) : renderView()
  )
}

export default ClassState;
