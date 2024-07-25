import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Academics } from "./pages/Academics";
import { Admissions } from "./pages/Admissions";
import { Faculty } from "./pages/Faculty";
import { Students } from "./pages/Students";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

function App() {

  return (
    <div className="bg-white min-w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
