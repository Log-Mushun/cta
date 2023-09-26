import AirportsComp from "@/components/AirportsComp";
import BurgerMenu from "@/components/BurgerMenu";
import DriverOne from "@/components/DriverOne";
import LogoDarkComp from "@/components/LogoDarkComp";
import WebGiViewer from "@/components/WebGiViewer";

export default function Airports() {
  return (
    <> 
    <WebGiViewer/>
      <div className="flex flex-row">
        <LogoDarkComp/>
        <BurgerMenu/>
      </div>
      <AirportsComp/>
      < DriverOne/>
    </>
  )
}
