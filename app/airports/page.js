'use client'

import AirportsComp from "@/components/Experiences/airports/AirportsComp";
import DriverInsights from "@/components/Experiences/airports/DriverInsights";
import DriverOne from "@/components/Experiences/airports/DriverOne";
import HeaderExperience from "@/components/Headers/HeaderExperience";
import HeaderGeneral from "@/components/Headers/HeaderGeneral/HeaderGeneral";
import PlusButton from "@/components/PlusButton";
import WebGiViewer from "@/components/Experiences/airports/WebGiViewer";
import SlidableDriverInfo from "@/components/Experiences/airports/SlidableDriverInfo";
import DriverOneFunctions from "@/components/Experiences/airports/DriverOneFunctions";
import LoadingScreen from "@/components/LoadingScreen";
import SlidableController from "@/components/Experiences/airports/SlidableController";
import Plexus from "@/components/Plexus";
import { MyContextProvider } from "@/MyContextProvider";
import AirportsFooter from "@/components/AirportsFooter";
import GalleryAirports from "@/components/Galleries/GalleryAirports";

import React, { useState, useEffect, useCallback, useRef } from "react";
import GuardianConcept from "@/components/Experiences/airports/GuardianConcept";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Airports() {
  const [isWebGiViewerLoaded, setIsWebGiViewerLoaded] = useState(false);
  useEffect(() => {
    const handleWebGiViewerLoaded = () => {
      console.log('WebGiViewer cargado completamente');
      setIsWebGiViewerLoaded(true);
      document.body.style.overflowY = 'auto';
    };


    // const driverOne = document.getElementById('driver-one');
    // ScrollTrigger.create({
    //   trigger: driverOne,
    //   start: "top bottom",
    //   end: "+=199%",
    //   onToggle: self => self.isActive && !scrollTween && goToSectionOne()
    // });

    // let panels = gsap.utils.toArray(".panel"),
    //   observer = ScrollTrigger.normalizeScroll(true),
    //   scrollTween;

    // // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    // document.addEventListener("touchstart", e => {
    //   if (scrollTween) {
    //     e.preventDefault();
    //     e.stopImmediatePropagation();
    //   }
    // }, { capture: true, passive: false })

    // function goToSectionOne() {
    //   scrollTween = gsap.to(window, {
    //     scrollTo: { y: innerHeight, autoKill: false },
    //     onStart: () => {
    //       document.body.style.overflow = 'hidden';
    //       observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
    //       observer.enable();
    //       console.log('start');
    //     },
    //     duration: 1,
    //     onComplete: () => { scrollTween = null; document.body.style.overflow = 'auto'; },
    //     overwrite: true
    //   });
    // }

    document.addEventListener('webGiViewerLoaded', handleWebGiViewerLoaded);

    return () => {
      document.removeEventListener('webGiViewerLoaded', handleWebGiViewerLoaded);
    };
  }, []);
  return (
    <MyContextProvider>
      <div className="h-full">
        <ProgressBar />
        <LoadingScreen isVisible={!isWebGiViewerLoaded} />
        <WebGiViewer />
        <Plexus isStart={false} />
        <HeaderGeneral />
        <HeaderExperience />
        <section className="panel h-full">
          <AirportsComp />
        </section>
        <section className="panel h-full">
          <SlidableController>
            <DriverOne />
            <PlusButton number={1}
              right="left-[17%]"
              top="top-[15%]" />
            <SlidableDriverInfo number={1} 
            title='Driver #1' 
            text='Iniciamos el viaje con un check-in fluido y amigable. Nuestras soluciones de manejo de equipaje aseguran que el proceso sea rápido y sin complicaciones (seamless), permitiendo a los pasajeros comenzar su experiencia con una sonrisa. Detrás de cada sistema de check-in eficiente, hay una ingeniería humana meticulosa. Nuestro equipo de expertos colabora con los aeropuertos para diseñar soluciones personalizadas que se adapten a sus necesidades únicas, considerando cada detalle, desde la disposición de las cintas transportadoras hasta la interacción con el personal de la aerolínea. La tecnología puede ser avanzada, pero es la mano humana la que perfecciona el proceso.'/>
          </SlidableController>
        </section>
        {/*SlidableDriverInfo affects the layout of the next element, so we have to let an empty div here in order to avoid the bug */}
        <div>
        </div>
        <section className="panel h-full">
          <SlidableController>
            <DriverInsights />
            <PlusButton number={2}
              right="right-[51%]"
              top="bottom-[20%]"
            />
            <h1 className="absolute right-[15%] bottom-[25%] z-[11] text-4xl button-title2 opacity-0" id="button-title2">Seguridad del aeropuerto</h1>
            <SlidableDriverInfo number={2} title='Ángel Guardián en Seguridad'
            text='En el corazón de la seguridad del aeropuerto, MATEC garantiza un paso seguro y protegido a través de los procesos de Security Feed y Security Shunt. Nuestra tecnología de vanguardia se combina con la vigilancia humana para ofrecer una seguridad sólida. La ingeniería humana se destaca en la interpretación de los datos recopilados por nuestros sistemas. Nuestros expertos analizan continuamente los patrones de equipaje y supervisan cualquier anomalía, actuando de inmediato para garantizar la seguridad de todos los pasajeros.'
            />
          </SlidableController>
        </section>
        <section className="panel h-full">
          <SlidableController>
            <DriverOneFunctions />
            <PlusButton number={3}
              right="left-[9%]"
              top="top-[20%]" />
            <h1 className="absolute left-[18%] top-[25%] z-[11] text-4xl opacity-0 button-title3" id="button-title3">Reclamo de Equipaje de Entrada: El Toque Final</h1>
            <SlidableDriverInfo number={3} title='Viaje sin Preocupaciones'
            text='MATEC garantiza la integración con los sistemas de inspección (HBS - Hold Baggage Screening | CBIS - Checked Baggage Inspecytion System) en cumplimiento con la TSA y ECAC, para hacer la inspección del equipaje en los niveles 1, 2 y 3, logrando precisión de clasificación del más alto nivel, con capacidades hasta de 3600 UPH por línea.

            Para la clasificación de equipaje sospechoso / limpio, MATEC cuenta con soluciones de alta tecnologíay robustez, que garantizan la confiabilidad requerida, gracias a que han sido probados en los ambientes más criticos a los que se puedan presentar en los aeropuertos.'/>
          </SlidableController>
        </section>
        {/* <GuardianConcept /> */}
        <GalleryAirports/>
      </div>
    </MyContextProvider>
  )
}
