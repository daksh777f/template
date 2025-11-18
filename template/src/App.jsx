import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";

const App = () => {
  console.log("App component is rendering!");
  
  return (
    <ParallaxProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </ParallaxProvider>
  );
};

export default App;
