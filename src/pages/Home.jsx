import { useMemo, useState } from "react";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedListings from "../components/FeaturedListings";
import WhyChooseUs from "../components/WhyChooseUs";
import LatestListings from "../components/LatestListings";
import Testimonials from "../components/Testimonials";
import { bikes } from "../data/bikes";

export default function Home({ onNotify }) {
  const [searchValues, setSearchValues] = useState({
    brand: "",
    model: "",
    price: ""
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

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
    <main id="top">
      <Hero
        searchValues={searchValues}
        onSearchChange={setSearchValues}
        onSearch={() =>
          onNotify(`Searching ${searchValues.brand || "all brands"} ${searchValues.model || "bikes"}`)
        }
      />

      <CategorySection
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onNotify={onNotify}
      />

      <FeaturedListings
        bikes={filteredBikes}
        favorites={favorites}
        onFavorite={toggleFavorite}
        onNotify={onNotify}
      />

      <WhyChooseUs onNotify={onNotify} />

      <LatestListings onNotify={onNotify} />
      <Testimonials />
    </main>
  );
}