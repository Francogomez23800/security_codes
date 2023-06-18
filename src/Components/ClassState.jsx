const ClassState = ({name}) => (
  <div className="w-full flex-1 bg-black">
    <h2>
      Eliminar {name}
    </h2>
      <p>Por favor escribe el codigo de seguridad.</p>
      <input placeholder="Codigo de seguridad" />
      <button>Comprobar</button>
  </div>
)

export default ClassState;
