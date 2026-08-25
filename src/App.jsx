import { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import FeaturedListings from "./components/FeaturedListings";
import WhyChooseUs from "./components/WhyChooseUs";
import LatestListings from "./components/LatestListings";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { bikes } from "./data/bikes";
import WhatsAppButton from "./components/Whatsappbutton";

export default function App() {
  const [searchValues, setSearchValues] = useState({
    brand: "",
    model: "",
    price: ""
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(""), 2200);
  };

  const filteredBikes = useMemo(() => {
    if (activeCategory === "All") return bikes;
    if (activeCategory === "Scooters") {
      return bikes.filter((bike) => /Dio|Fascino/.test(bike.name));
    }
    if (activeCategory === "Sports Bikes") {
      return bikes.filter((bike) => /Pulsar|Hornet/.test(bike.name));
    }
    if (activeCategory === "Commuter Bikes") {
      return bikes.filter((bike) => /Shine|Fascino|Dio/.test(bike.name));
    }
    return bikes.filter((bike) => /Royal/.test(bike.name));
  }, [activeCategory]);

  const toggleFavorite = (name) => {
    setFavorites((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNotify={notify} />

      <main id="top">
        <Hero
          searchValues={searchValues}
          onSearchChange={setSearchValues}
          onSearch={() =>
            notify(`Searching ${searchValues.brand || "all brands"} ${searchValues.model || "bikes"}`)
          }
        />

        <CategorySection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onNotify={notify}
        />

        <FeaturedListings
          bikes={filteredBikes}
          favorites={favorites}
          onFavorite={toggleFavorite}
          onNotify={notify}
        />

        <WhyChooseUs onNotify={notify} />

        <LatestListings onNotify={notify} />
      <Testimonials/>
      </main>
        
      <Footer />
      <WhatsAppButton/>
      <Toast message={toast} />
    </div>
  );
}