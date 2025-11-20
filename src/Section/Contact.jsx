import React from "react";
import ContactGallery from "../Components/ContactGallery";

const Contact = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20" id="Contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-24 items-start">

        {/* === Left: Trekking Gallery === */}
        <div className="order-1 lg:order-1">
          <ContactGallery />
        </div>

        {/* === Right: Clickable Title Only === */}
        <div className="order-2 lg:order-2 w-full text-center lg:text-left">
          <a 
            href="https://docs.google.com/forms/d/11FFhFQhoH1VLiQ8dUINDYvZJUzArJht6L2ctYQSgKgE/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer"
          >
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-3 hover:scale-105 transition-transform duration-300">
              <span className="text-[#1E293B]">Get in&nbsp;</span>
              <span className="text-[#A2844E]">Touch</span>
            </h2>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
