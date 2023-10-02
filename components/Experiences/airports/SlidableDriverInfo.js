import { ImCross } from 'react-icons/im'
import Image from 'next/image'
import gsap from 'gsap'
import React, { useEffect, useState } from "react";
import ParticlesContainer from '@/components/ParticlesContainer';

const SlidableDriverInfo = (props) => {
  const [clicked, setClicked] = new useState(false);
  const videoId = 'eoi_TTNt3GY';

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
      gsap.to(plusButton, { opacity: 1, cursor: "pointer", duration: 0.5, delay: 0.4 });
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
    <div className="bg-[#213541] w-[0%] h-screen right-0 fixed top-0 z-[31]" id={`slidable-driver-info${props.number}`}
      key={props.number}>
      <div key={props.number}>
        <Image
          src={"/plus.svg"}
          width={20}
          height={20}
          id={`cross-close${props.number}`}
          alt="a plus sign, it looks like a vertical cross"
          className="absolute cursor-pointer rotate-45 top-10 right-10 z-[30]"
          onClick={closeFunction}
        />
      </div>
      <div className='flex flex-row'>
        <div className='bg-[#021322] w-[40%] h-[100vh] relative'>
          <ParticlesContainer/>
        </div>
        <div className='relative bg-gradient-to-t from-[#021322] to-[#213541]  h-[100vh] w-[60%]'>
          <div>
            <h1 className='text-2xl pt-16 pl-10'>
              Driver #1
            </h1>
            <Image
              src={'/images/slidable1.png'}
              width={350}
              height={400}
              className='pt-5'
            />
            <div>
              <p className='pt-3 pl-3 pr-3 text-xs'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt..
              </p>
            </div>
            <div>
              <iframe
                width="270"
                height="160"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
                allowfullscreen
                className='absolute bottom-0'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlidableDriverInfo;