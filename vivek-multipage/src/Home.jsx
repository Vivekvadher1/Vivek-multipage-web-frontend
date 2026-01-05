import React from "react";
import HeroSection from "./components/HeroSection";
import Contact from "./Contact";
import ServicePage from "./Services";

function Home() {
  const data = {
    name: "Vivek Vadher",
    image: "./images/hero.svg",
  };

  // const { updateHomePage } = useGlobalContext();
  // useEffect( () => {
  //   updateHomePage();
  // },  )

  return (
    <>
      <HeroSection {...data} />
      <ServicePage />
      <Contact />
    </>
  );
}

export default Home;
