import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Hero from "./pages/home/Hero";
import Footer from "./components/Footer";
import Headphone from "./pages/headphones/Headphones";
import Speakers from "./pages/speakers/Speakers";
import Earphones from "./pages/earphones/Earphones";

const App = () => {
  return (
    <>
      <div className="app-shell ">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path={"/"} element={<Hero />} />
            <Route path={"/headphones"} element={<Headphone />} />
            <Route path={"/speakers"} element={<Speakers />} />
            <Route path={"/earphones"} element={<Earphones />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
