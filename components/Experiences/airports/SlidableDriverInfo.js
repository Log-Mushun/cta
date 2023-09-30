import { ImCross } from 'react-icons/im'
import Image from 'next/image'
import gsap from 'gsap'
import React, { useEffect, useState } from "react";

const SlidableDriverInfo = (props) => {
    const [clicked, setClicked] = new useState(false);

    var driverOneElement;
    var webGiViewer;
    var plusButton;
    var slidableDriverInfo;
    var crossClose;
    var driverInsights;
  
    const closeFunction = () => {
      getTheElements();
  
        {  
        gsap.to(webGiViewer, { x: 0, duration: 0.5 });
        gsap.to(driverOneElement, { x: 0, duration: 0.5 });
        gsap.to(driverInsights, { x: 0, duration: 0.5 });
        gsap.to(plusButton, { opacity: 1, cursor: "pointer", duration: 0.1 });
        gsap.to(slidableDriverInfo, { width: 0, duration: 0.5 });
        gsap.to(crossClose, { opacity: 0, cursor: "auto", duration: 0.1 });
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

    return (
        <div className="bg-black w-[0%] h-screen right-0 fixed top-0 z-[31]" id={`slidable-driver-info${props.number}`}
            key={props.number}>Slidable driver info {props.number}
            <div key={props.number}>
                <Image
                    src={"/plus.svg"}
                    width={20}
                    height={20}
                    id={`cross-close${props.number}`}
                    alt="a plus sign, it looks like a vertical cross"
                    className="absolute cursor-pointer rotate-45 top-10 right-10"
                    onClick={closeFunction}
                />
            </div>
        </div>
    )
}

export default SlidableDriverInfo;