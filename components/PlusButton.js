'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { ImCross } from 'react-icons/im'

const PlusButton = (props) => {
  const [clicked, setClicked] = new useState(false);

  var driverOneElement;
  var webGiViewer;
  var plusButton;
  var slidableDriverInfo;
  var crossClose;
  var driverInsights;


  const handleClick = () => {

    getTheElements();

    if (driverOneElement) {
      gsap.to(webGiViewer, { x: -300, duration: 0.5 });
      gsap.to(driverOneElement, { x: -300, duration: 0.5 });
      gsap.to(driverInsights, { x: -300, duration: 0.5 });
      gsap.to(plusButton, { opacity: 0, cursor: "auto" });
      gsap.to(slidableDriverInfo, { width: 300, duration: 0.5 });
      gsap.to(crossClose, { opacity: 1, cursor: "pointer", duration: 0.3 });
    }

    setClicked(!clicked);
  };

  const closeFunction = () => {
    getTheElements();

    if (clicked) {

      gsap.to(webGiViewer, { x: 0, duration: 0.5 });
      gsap.to(driverOneElement, { x: 0, duration: 0.5 });
      gsap.to(driverInsights, { x: 0, duration: 0.5 });
      gsap.to(plusButton, { opacity: 1, cursor: "pointer", duration: 0.1 });
      gsap.to(slidableDriverInfo, { width: 0, duration: 0.5 });
      gsap.to(crossClose, { opacity: 0, cursor: "auto", duration: 0.1 });

      setClicked(false);
    }
  };

  const getTheElements = () => {
    webGiViewer = document.getElementById("webgi-viewer");
    driverOneElement = document.getElementById("driver-one");
    plusButton = document.getElementById(`plus-button${props.number}`);
    slidableDriverInfo = document.getElementById(`slidable-driver-info${props.number}`);
    crossClose = document.getElementById(`cross-close${props.number}`);
    driverInsights = document.getElementById("driver-insights");
  }

  useEffect(() => {
    window.addEventListener("scroll", closeFunction);

    return () => {
      window.removeEventListener("scroll", closeFunction);
    };
  }, [clicked]);

  return (
    <div key={props.number}>
      <div
        className={`flex items-center justify-center w-24 h-24 absolute right-[60%] top-[8%] cursor-pointer z-1 opacity-0 plus-button${props.number}`}
        id={`plus-button${props.number}`}
        onClick={handleClick}
        key={props.number}
      >
        <Image
          src={"/circle_outside_plus.svg"}
          width={200}
          height={200}
          alt="a rotating circle"
          className="relative animate-spin"
        />
        <Image
          src={"/icon_button_driverv2.svg"}
          width={50}
          height={50}
          alt="a plus sign, it looks like a vertical cross"
          className="absolute"
        />
      </div>
    </div>
  );
};

export default PlusButton;
