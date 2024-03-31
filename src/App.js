import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NovaConta from "./components/pages/NovaConta";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/novaconta">Nova Conta</Link>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/novaconta" element={<NovaConta />}></Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
