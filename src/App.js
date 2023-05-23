import "./App.css";
import "./Styles/Navbar.css";
import "./Styles/Home.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Home />
    </Router>
  );
}

export default App;
