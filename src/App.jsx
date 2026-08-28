import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import WhatsAppButton from "./components/Whatsappbutton";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import UserMessages from "./pages/Messages";
import { MessagesProvider } from "./context/MessagesContext";
import BikeDetail from "./pages/BikeDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Listings from "./admin/pages/Listings";
import Messages from "./admin/pages/Messages";
import Settings from "./admin/pages/Settings";
import Users from "./admin/pages/Users";
import Reports from "./admin/pages/Reports";
import { useState } from "react";

function PublicSite({ notify }) {
  return (
    <>
    <MessagesProvider>
      <Header onNotify={notify} />
      <Routes>
        <Route path="/" element={<Home onNotify={notify} />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/:id" element={<BikeDetail onNotify={notify} />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/messages" element={<UserMessages />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </MessagesProvider>
    </>
  );
}

export default function App() {
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />

      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="listings" element={<Listings/>}/>
          <Route path="messages" element={<Messages/>}/>
          <Route path="users" element= {<Users/>} />
          <Route path="reports" element= {<Reports/> } />
          <Route path="settings" element={<Settings />} />

        </Route>

        <Route path="/*" element={<PublicSite notify={notify} />} />
      </Routes>

      <Toast message={toast} />
    </div>
  );
}