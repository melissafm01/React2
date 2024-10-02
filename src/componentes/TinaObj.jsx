const TinaObj = (objPops) => {
  objPops = {
    nombre: "Tina",
    apellido: "Benavides",
  };
  const { nombre, apellido } = objPops; /*Desestructuracion */
  return (
    <>
      <button className="bg-yellow-500 px-6 py-2">
        {nombre} {apellido}
      </button>
    </>
  );
};
export default TinaObj;
