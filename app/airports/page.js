import AirportsComp from "@/components/AirportsComp";
import BurgerMenu from "@/components/BurgerMenu";
import DriverInsights from "@/components/DriverInsights";
import DriverOne from "@/components/DriverOne";
import HeaderGeneral from "@/components/Headers/HeaderGeneral/HeaderGeneral";
import WebGiViewer from "@/components/WebGiViewer";

export default function Airports() {
  return (
    <> 
    <WebGiViewer/>
     <HeaderGeneral/>
      <AirportsComp/>
      <DriverOne/>
      <DriverInsights/>
    </>
  )
}
