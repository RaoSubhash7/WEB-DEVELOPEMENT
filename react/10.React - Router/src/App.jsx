import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

function App() {
  return (
   <BrowserRouter>
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <main className="grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

    <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;