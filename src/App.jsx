import { Routes, Route, Navigate } from "react-router-dom";
// import TailblocksHeader from "./componentes/TailblocksHeader";
// import Tailblocks from "./componentes/Tailblocks";
// import TinaButton from "./componentes/TinaButton";
// import TinaObj from "./componentes/TinaObj";
// import RepasoReactObj from "./componentes/RepasoReact";
// import ComponentePadre from "./componentes/ComponentePadre";
import Inicio from "./pages/inicio";
import Programa from "./pages/programa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/programa" element={<Programa />}></Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </>
  );
}

export default App;
