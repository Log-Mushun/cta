import AirportsComp from "@/components/Experiences/airports/AirportsComp";
import BurgerMenu from "@/components/BurgerMenu";
import DriverInsights from "@/components/Experiences/airports/DriverInsights";
import DriverOne from "@/components/Experiences/airports/DriverOne";
import HeaderExperience from "@/components/Headers/HeaderExperience";
import HeaderGeneral from "@/components/Headers/HeaderGeneral/HeaderGeneral";
import WebGiViewer from "@/components/Experiences/airports/WebGiViewer";
import GalleryAirports from "@/components/Galleries/GalleryAirports";
import { GlobalStyle } from "../styles/GlobalStyle";
import { MyContextProvider } from "@/MyContextProvider";


export default function Experience() {
  return (
    <MyContextProvider>
{/*     <WebGiViewer/>
 */}     {/* <HeaderGeneral/> */}
   <AirportsComp/>
      <DriverOne/>
      <DriverInsights/>
      <GalleryAirports/>
      <GlobalStyle />

        </MyContextProvider>

  )
}
