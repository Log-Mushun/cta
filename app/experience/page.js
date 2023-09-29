import AirportsComp from "@/components/AirportsComp";
import BurgerMenu from "@/components/BurgerMenu";
import DriverInsights from "@/components/DriverInsights";
import DriverOne from "@/components/DriverOne";
import HeaderExperience from "@/components/Headers/HeaderExperience";
import HeaderGeneral from "@/components/Headers/HeaderGeneral/HeaderGeneral";
import WebGiViewer from "@/components/WebGiViewer";
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
