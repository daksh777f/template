import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxHero = () => {
  return (
    <ParallaxBanner
      layers={[
        { 
          image: "https://i.pinimg.com/1200x/f1/a0/45/f1a04597e0ebe2487690386a941487ca.jpg",
          speed: -12
        }
      ]}
      className="aspect-[16/9] min-h-screen"
    >
      {}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
        <div className="max-w-4xl text-center space-y-12">
          
          {}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(10px, 4vw, 5rem)",
            fontWeight: "200",
            lineHeight: "1",
            letterSpacing: "-0.02em",
            textShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
            marginBottom: "2rem",
            marginLeft: "28rem",
            marginTop: "6rem"
          }}>
            How to eat a Chikku 
          </h1>

          
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            
            {/* Primary CTA */}
            <button style={{
              fontFamily: "'403 doshi', sans-serif",
              fontSize: "1rem",
              fontWeight: "400",
              letterSpacing: "0.05em",
              padding: "1rem 2.5rem",
              backgroundColor: "white",
              color: "#1a1a1a",
              border: "none",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              boxShadow: "0 8px 30px rgba(255, 255, 255, 0.15)",
              marginLeft: "28rem"
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 40px rgba(255, 255, 255, 0.2)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 30px rgba(255, 255, 255, 0.15)";
            }}>
              Get Started
            </button>

            {}
            <button style={{
              fontFamily: "'403 doshi', sans-serif",
              fontSize: "1rem",
              fontWeight: "300",
              letterSpacing: "0.05em",
              padding: "1rem 2.5rem",
              backgroundColor: "transparent",
              color: "rgb(255, 255, 255 )",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "2px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              marginLeft: "28rem"
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = "rgba(255, 255, 255, 0.8)";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = "rgba(255, 255, 255, 0.4)";
              e.target.style.backgroundColor = "transparent";
              e.target.style.transform = "translateY(0)";
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default ParallaxHero;
