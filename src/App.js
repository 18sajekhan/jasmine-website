import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-6">
      <h1 className="text-4xl font-bold text-red-500">Welcome, Jasmine ❤️</h1>
      <p className="mt-4 text-lg text-gray-700">A special place made just for you.</p>
      <nav className="mt-6 space-x-4">
        <Link to="/about" className="px-4 py-2 bg-red-400 text-white rounded-lg">About You</Link>
        <Link to="/moments" className="px-4 py-2 bg-red-400 text-white rounded-lg">Favourite Moments</Link>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-red-500">About You</h2>
      <p className="mt-4 text-gray-700">This is where you can write all the wonderful things about Jasmine.</p>
      <div className="mt-6">
        <input type="text" placeholder="Write something beautiful..." className="p-2 border rounded" />
      </div>
    </div>
  );
}

function Moments() {
  const [images, setImages] = useState([]);
  
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files.map(file => URL.createObjectURL(file))]);
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-red-500">Favourite Moments</h2>
      <p className="mt-4 text-gray-700">Upload your favourite pictures together.</p>
      <input type="file" multiple onChange={handleImageUpload} className="mt-4 p-2 border rounded" />
      <div className="mt-6 grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <motion.img key={index} src={src} alt="Memory" className="rounded-lg shadow-lg" whileHover={{ scale: 1.1 }} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/moments" element={<Moments />} />
      </Routes>
    </Router>
  );
}
