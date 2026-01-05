import React from 'react'
import HeroSection from './components/HeroSection'

function About() {
  
 const data = {
  name:"Vivek Rocksss",
  image:"./images/about1.svg",
 };

// const {udpateAboutPage} = useGlobalContext();

// useEffect(() => udpateAboutPage(), [])

  return (
    <HeroSection {...data} />
  )
}

export default About