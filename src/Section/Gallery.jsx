import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Masonry from "../Components/Masonry";
import TextType from "../Components/TextType";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: "1",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTishZsCtf1tyXX5ivWjvFPhonP5rwBjIJcUw&s",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "https://picsum.photos/id/1011/600/750?grayscale",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "https://static2.tripoto.com/media/filter/tst/img/2025875/TripDocument/1601531054_these_traveling_tips_helps_me_having_hassle_free_journey.jpg",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/c7c4elegquhjubd1xmyb?_a=BACADKGT",
    url: "https://example.com/four",
    height: 350,
  },
  {
    id: "5",
    img: "https://picsum.photos/id/1040/600/900?grayscale",
    url: "https://example.com/five",
    height: 450,
  },
  {
    id: "6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTishZsCtf1tyXX5ivWjvFPhonP5rwBjIJcUw&s",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "7",
    img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/g0dzyjfrlqnq66wrsjcz",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "8",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDTXPqJxHAf1W-0YvcF9jrjy18AtDjDORdQ&s",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "9",
    img: "https://images.pexels.com/photos/1066801/pexels-photo-1066801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    url: "https://example.com/four",
    height: 350,
  },
  {
    id: "10",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2p3xRAPsZDtCigNjp5Zi7FP5hHxErTcUuQ&s",
    url: "https://example.com/five",
    height: 450,
  },
];

const Gallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
 
          ease: "power3.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", 
            toggleActions: "play none none reverse",
          },
        }
      );

   
      gsap.from(".gallery-heading", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-heading",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-screen flex flex-col items-center min-h-screen bg-linear-to-b from-[#f5f2ec] to-[#f9f7f4]  py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden mb-[6vh]"
    >
   
      <div className="text-center mb-16">
        <h2 className="gallery-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
          Explore Our <span className="text-[#937A4B]">
           <TextType
            // texts={["Gallery", "Moments", "Adventures"]}
           
            text={["Gallery", "Gallery", "Gallery"]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor={true}
           loop={true}

            
            
            
            />

          </span>
        </h2>
        <p className="gallery-heading text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Step into the world of{" "}
          <span className="text-[#937A4B] font-medium">Asansol Trekkers</span> — where every
          photograph tells a story of adventure, friendship, and nature’s beauty.
        </p>
      </div>

    
      <div className="w-[80%] h-fit">
        <Masonry
        
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.08}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.97}
          blurToFocus={true}
          colorShiftOnHover={true}
        />
      </div>

    
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E7DCC3]/40 blur-3xl rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b89e6b]/20 blur-3xl rounded-full -z-10 animate-pulse delay-200" />
    </section>
  );
};

export default Gallery;
