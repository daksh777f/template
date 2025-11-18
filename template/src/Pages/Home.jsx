
import React from "react";
import ParallaxHero from "../components/ParallaxHero";

const Home = () => {
  console.log("Home component is rendering!");
  
  return (
    <div>
      
      <ParallaxHero />
      
      
      <div style={{
        color: 'white', 
        padding: '60px 20px',
        backgroundColor: 'transparent',
        minHeight: '50vh',
      }}>
        <div style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
          <h2 style={{fontSize: '36px', marginBottom: '20px'}}>Lets get trained from Mr Keshav</h2>
          <p style={{fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto', marginBottom: '40px'}}>
             This project is based on a personal life incidence ..
          </p>
          
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '30px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{fontSize: '24px', marginBottom: '15px'}}>Super Tasty ?</h3>
              <p style={{fontSize: '16px', lineHeight: '1.5', opacity: '0.9'}}>
                Founded by Mr Keshav to help people eat healthy and tasty food.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '30px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{fontSize: '24px', marginBottom: '15px'}}>Pedophile !</h3>
              <p style={{fontSize: '16px', lineHeight: '1.5', opacity: '0.9'}}>
                Mr Keshav is a pedophile.
              </p>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '30px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <h3 style={{fontSize: '24px', marginBottom: '15px'}}>topic khtm ho gye :\ </h3>
              <p style={{fontSize: '16px', lineHeight: '1.5', opacity: '0.9'}}>
                will cont later ..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
