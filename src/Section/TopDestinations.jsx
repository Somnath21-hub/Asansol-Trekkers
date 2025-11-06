import React from "react";
import TourCard from "../Components/TourCard";

const destinations = [
  {
    name: "France - 5 days in Paris, Nice",
    img: "https://image.urlaubspiraten.de/720/image/upload/v1603284015/mediavault_images/avhrvmwfdlndjdwwxhsy.jpg",
    offer: "Special offer, 20% off",
  },
  {
    name: "Italy - 7 days in Rome, Venice",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    offer: "Special offer, 15% off",
  },
  {
    name: "Japan - 6 days in Tokyo, Kyoto",
    img: "https://t3.ftcdn.net/jpg/00/83/45/28/360_F_83452854_Epa5N806VaHrsnr5oBhUYVSEIqWqJGfO.jpg",
    offer: "Special offer, 10% off",
  },
 
];

const TopDestinations = () => {
  return (
    <section className="relative w-full min-h-screen  py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center overflow-hidden">

      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#E7DCC3]/50 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b89e6b]/30 blur-3xl rounded-full -z-10 animate-pulse delay-200" />

   
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#937A4B] leading-tight tracking-tight">
          Top Destinations
        </h1>
        <p className="text-[1.1rem] text-gray-600 mt-4">
          Discover the most breathtaking and top-rated destinations around the globe 🌍
        </p>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {destinations.map((destination, index) => (
          <TourCard
            key={index}
            image={destination.img}
            title={destination.name}
            label={destination.offer}
            height="h-[500px]"
            textSize="text-xl"
          />
        ))}
      </div>

    
      {/* <div className="mt-16">
        <button className="bg-[#937A4B] hover:bg-[#7d673f] text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          Explore More Destinations
        </button>
      </div> */}
    </section>
  );
};

export default TopDestinations;