import Portpolio from "./components/Portfolio";
import { Route, Routes } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Mainpage from "./Mainpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portpolio />} />
        <Route path="/aboutme-page" element={<Aboutme />} />
      </Routes>
    </>
  );
}

export default App;
