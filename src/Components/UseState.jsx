import { useContext } from "react";
import { SecurityCodesContext } from "../Context/Context";

const UseState = ({name}) => {
  const context = useContext(SecurityCodesContext)  
  
  return(
  <div className="w-full bg-red">
    <h2>
      Eliminar {name}
    </h2>
      <p>Por favor escribe el codigo de seguridad.</p>
      {context.error && (
        <p>Error: su codigo no es valido.</p>
      )}
      <input placeholder="Codigo de seguridad" />
      <button>Comprobar</button>
  </div>
);}

export default UseState;
