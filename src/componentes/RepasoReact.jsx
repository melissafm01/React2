const RepasoReactObj = (objPops) => {
  objPops = {
    programa: "Adso",
    competencia: "front-end",
  };
  const { programa, competencia } = objPops; /*Desestructuracion */
  return (
    <>
      <button className="bg-yellow-500 px-6 py-2">
        {programa} {competencia}
      </button>
    </>
  );
};
export default RepasoReactObj;

/*programa adso competencia front-end*/
