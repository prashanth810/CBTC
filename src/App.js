import Portpolio from "./components/Portfolio";
import { Route, Routes } from "react-router-dom";
import Aboutme from "./components/Aboutme";
import Mainpage from "./Mainpage";
import Wethetapplication from "./components/Wethetapplication";
import Frontpage from "./components/Frontpage";
import Todolist from "./components/Todolist";
import Ecommerce from "./components/Ecommerce";
import Singleproducts from "./components/Singleproducts";
import Allproducts from "./components/Allproducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/todo-list" element={<Todolist />} />
        <Route path="/portfolio_page" element={<Portpolio />} />
        <Route path="/ecommerce_page" element={<Ecommerce />} />
        <Route path="/aboutme-page" element={<Aboutme />} />
        <Route path="/wether" element={<Wethetapplication />} />

        {/* ecommercer */}
        <Route path="/productss/:id" element={<Singleproducts />} />
        <Route path="/allproducts" element={<Allproducts />} />
      </Routes>
    </>
  );
}

export default App;
