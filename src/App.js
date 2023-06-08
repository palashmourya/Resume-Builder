import "./App.css";
import "./Styles/Navbar.css";
import "./Styles/Home.css";
import "./Styles/AboutUs.css";
import { Navbar } from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
