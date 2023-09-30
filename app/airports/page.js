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
  const [showPlusButtonOne, setShowPlusButtonOne] = useState(false);
  const [showPlusButtonTwo, setShowPlusButtonTwo] = useState(false);
  const [showPlusButtonThree, setShowPlusButtonThree] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
      const driverOneElement = document.getElementById('driver-one');
      const driverInsightsElement = document.getElementById('driver-insights');
  
        if (driverOneElement) {
          const { top } = driverOneElement.getBoundingClientRect();
          setShowPlusButtonOne(top <= 300);
        }
        if (driverInsightsElement) {
          const { top } = driverInsightsElement.getBoundingClientRect();
          setShowPlusButtonTwo(top <= 300);
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
        <PlusButton showPlusButton={showPlusButtonOne} number={1}/>
        <SlidableDriverInfo number={1}/>
      </div>
      <div className="relative w-screen mr-0 ml-0">
        <DriverInsights />
        <PlusButton showPlusButton={showPlusButtonTwo} number={2}/>
        <SlidableDriverInfo number={2}/>
      </div>
    </>
  )
}
