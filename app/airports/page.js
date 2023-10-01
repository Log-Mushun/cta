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
import DriverOneFunctions from "@/components/Experiences/airports/DriverOneFunctions";


export default function Airports() {
  useEffect(() => {
      const handleScroll = () => {

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
        <PlusButton number={1}/>
        <SlidableDriverInfo number={1}/>
      </div>
      {/*SlidableDriverInfo affects the layout of the next element, so we have to let an empty div here in order to avoid the bug */}
      <div>
      </div>
      <div className="relative w-screen mr-0 ml-0">
        <DriverInsights />
      </div>
      <DriverOneFunctions/>
    </>
  )
}
