'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import {ImCross} from 'react-icons/im'

const PlusButton = (props) => {
  const [clicked, setClicked] = useState(false);
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
      gsap.to(plusButton, { opacity: 0, cursor: "auto"});
      gsap.to(slidableDriverInfo, { width: 300, duration: 0.5 });
      gsap.to(crossClose, { opacity: 1, cursor: "pointer", duration: 0.3 });
    }

    setClicked(true);
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

      console.log("Scrolling");
    }
  };

  const getTheElements = () => {
    webGiViewer = document.getElementById("webgi-viewer");
    driverOneElement = document.getElementById("driver-one");
    plusButton = document.getElementById("plus-button");
    slidableDriverInfo = document.getElementById("slidable-driver-info");
    crossClose = document.getElementById("cross-close");
    driverInsights = document.getElementById("driver-insights");
  }

  useEffect(() => {
    window.addEventListener("scroll", closeFunction);

    return () => {
      window.removeEventListener("scroll", closeFunction);
    };
  }, [clicked]);

  if (!props.showPlusButton) {
    return null;
  }

  return (
    <div>
      <motion.div
        className="flex items-center justify-center w-16 h-16 absolute right-12 top-36 cursor-pointer z-30 opacity-0"
        id="plus-button"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        onClick={handleClick}
      >
        <Image
          src={"/circle_outside_plus.svg"}
          width={200}
          height={200}
          alt="a rotating circle"
          className="relative animate-spin"
        />
        <Image
          src={"/plus.svg"}
          width={20}
          height={20}
          alt="a plus sign, it looks like a vertical cross"
          className="absolute"
        />
      </motion.div>
        <div>
          <ImCross className="fixed top-10 right-10 z-[100] opacity-0 cursor-pointer"
          id="cross-close"
          onClick={closeFunction}/>
        </div>
    </div>
  );
};

export default PlusButton;
