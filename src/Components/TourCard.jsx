import React from "react";

const TourCard = ({
  image,
  title,
  label, 
  height = "h-[350px]", 
  textAlign = "center", 
  textSize = "text-lg", 
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[20px] shadow-lg cursor-pointer group transition-transform duration-500 hover:scale-[1.03] ${height}`}
    >
   
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />


      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

 
      {label && (
        <div className="absolute top-3 right-3 bg-black text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-md">
          {label}
        </div>
      )}

      <div
        className={`absolute bottom-5 left-0 w-full px-4 ${textAlign === "center" ? "text-center" : "text-left"
          }`}
      >
        <h3 className={`text-white font-bold ${textSize}`}>{title}</h3>
      </div>
    </div>
  );
};

export default TourCard;
