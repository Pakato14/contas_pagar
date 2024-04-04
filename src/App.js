import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NovaConta from "./components/pages/NovaConta";
import Contas from "./components/pages/Contas";
import Conta from "./components/pages/Conta";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/novaconta" element={<NovaConta />}></Route>
          <Route exact path="/contas" element={<Contas />}></Route>
          <Route exact path="/conta/:id" element={<Conta />}></Route>
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
