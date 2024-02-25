import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Recipe from "./Pages/Recipe";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};
export default App;
