import React from "react";

const About = () => {
  return (
    <section className="relative w-full min-h-[80vh] bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 lg:gap-24">

        <div className="md:w-1/2 flex justify-center items-center relative">

          <div className="absolute -z-10 w-80 h-80 bg-[#E7DCC3]/60 blur-3xl rounded-full top-4 left-6 md:w-96 md:h-96 animate-pulse" />


          <div className="relative w-[80%] h-full flex items-center justify-center">
     
           <img src="https://previews.123rf.com/images/yupiramos/yupiramos1811/yupiramos181105195/111553727-avatar-boy-travel-trip-airport-and-vacation-theme-colorful-design-vector-illustration.jpg"
              alt="About Asansol Trekkers"
              className="w-full h-full object-cover rounded-lg border-4 border-white scale-x-[-1]"
            />

       
          </div>
        </div>

       
        <div className="md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
            About <span className="text-[#937A4B]">Asansol Trekkers</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            For over{" "}
            <span className="font-semibold text-[#937A4B]">25 years</span>,{" "}
            <strong>Asansol Trekkers</strong> has guided explorers through
            breathtaking trails and unforgettable adventures. Each journey is
            carefully crafted to reconnect you with nature and inspire your
            inner wanderer.
          </p>

          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Whether you’re taking your first trek or chasing your next summit,
            our passionate community ensures every experience is{" "}
            <span className="font-medium text-[#937A4B]">safe</span>,{" "}
            <span className="font-medium text-[#937A4B]">memorable</span>, and{" "}
            <span className="font-medium text-[#937A4B]">life-changing</span>.
            Join us and start writing your adventure story today.
          </p>

          <div className="pt-4">
            <button
              type="button"
              className="bg-[#937A4B] hover:bg-[#7d673f] text-white font-semibold px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Join the Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
