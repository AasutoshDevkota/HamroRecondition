export const image = (id, width = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=82`;

export const categoryImages = [
  "/all-categories.png",
  "/scooter-category.png",
  "/bike-category.png",
  "/all-categories.png"
];

export const categories = [
  ["All Two Wheelers", "120+ Listings", "All"],
  ["Scooters", "45+ Listings", "Scooters"],
  ["Motorcycles", "28+ Listings", "Sports Bikes"],
];

export const bikes = [
  {
    name: "Bajaj Pulsar NS 200",
    year: "2019",
    km: "18,000 km",
    price: "Rs. 1,85,000",
    city: "Kathmandu",
    image: image("1558981806-ec527fa84c39"),
    tag: "Popular",
    chips: ["ABS", "Good Condition"]
  },
  {
    name: "Yamaha Fascino 125",
    year: "2019",
    km: "12,500 km",
    price: "Rs. 1,32,000",
    city: "Pokhara",
    image: image("1558981806-ec527fa84c39"),
    tag: "Best Value",
    chips: ["Fuel Efficient", "Automatic"]
  },
  {
    name: "Honda CB Hornet 160R",
    year: "2018",
    km: "26,000 km",
    price: "Rs. 1,78,000",
    city: "Kathmandu",
    image: image("1558981806-ec527fa84c39"),
    tag: "Popular",
    chips: ["ABS", "Well Maintained"]
  },
  {
    name: "Honda Dio",
    year: "2022",
    km: "14,000 km",
    price: "Rs. 1,55,000",
    city: "Lalitpur",
    image: image("1558981806-ec527fa84c39"),
    tag: "New Arrival",
    chips: ["Fuel Efficient", "Automatic"]
  },
  {
    name: "Royal Enfield Classic 350",
    year: "2017",
    km: "28,000 km",
    price: "Rs. 2,90,000",
    city: "Kathmandu",
    image: image("1558981806-ec527fa84c39"),
    tag: "Popular",
    chips: ["Powerful Engine", "Classic Look"]
  }
];

export const latestListings = [
  ["Yamaha FZ 16", "2014", "22,000 km", "Rs. 1,20,000"],
  ["Suzuki Access 125", "2019", "16,000 km", "Rs. 1,10,000"],
  ["TVS Apache RTR 160", "2020", "14,000 km", "Rs. 1,45,000"],
  ["Honda Shine", "2016", "20,000 km", "Rs. 1,25,000"],
  ["Yamaha R15 V3", "2021", "10,000 km", "Rs. 2,45,000"]
];