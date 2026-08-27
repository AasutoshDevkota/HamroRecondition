import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import WhatsAppButton from "./components/Whatsappbutton";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import BikeDetail from "./pages/BikeDetail";
import { useState } from "react";

export default function App() {
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNotify={notify} />

      <Routes>
        <Route path="/" element={<Home onNotify={notify} />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/:id" element={<BikeDetail onNotify={notify} />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
      <Toast message={toast} />
    </div>
  );
}