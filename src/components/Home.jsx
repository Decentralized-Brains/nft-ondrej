import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import PreviousCollection from "./PreviousCollection";

const Home = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Hero />
      <PreviousCollection />
    </div>
  );
};

export default Home;
