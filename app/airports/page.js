'use client'

import AirportsComp from "@/components/Experiences/airports/AirportsComp";
import DriverInsights from "@/components/Experiences/airports/DriverInsights";
import DriverOne from "@/components/Experiences/airports/DriverOne";
import HeaderExperience from "@/components/Headers/HeaderExperience";
import HeaderGeneral from "@/components/Headers/HeaderGeneral/HeaderGeneral";
import PlusButton from "@/components/PlusButton";
import WebGiViewer from "@/components/Experiences/airports/WebGiViewer";

import React, {useState, useEffect } from "react";
import SlidableDriverInfo from "@/components/Experiences/airports/SlidableDriverInfo";


export default function Airports() {
  const [showPlusButton, setShowPlusButton] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
      const driverOneElement = document.getElementById('driver-one');
  
        if (driverOneElement) {
          const { top } = driverOneElement.getBoundingClientRect();
          setShowPlusButton(top <= 300);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <>
      <WebGiViewer />
      <HeaderGeneral />
      <HeaderExperience />
      <AirportsComp />
      <div className="relative w-screen mr-0 ml-0">
        <DriverOne />
        <PlusButton showPlusButton={showPlusButton} number={1} key={1}/>
        <SlidableDriverInfo number={1} key={1}/>
      </div>
      <div className="relative w-screen mr-0 ml-0">
        <DriverInsights />
        <PlusButton showPlusButton={true} number={2} key={2}/>
        <SlidableDriverInfo number={2} key={2}/>
      </div>
    </>
  )
}
