import "./App.css";
import "./Styles/Navbar.css";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
