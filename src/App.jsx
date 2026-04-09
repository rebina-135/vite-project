import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Weather from "./pages/Weather.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
