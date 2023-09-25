import WebGiViewer from "@/components/WebGiViewer"
import Airports from "@/components/Airports"
import DriverOne from "@/components/DriverOne"
import LogoDarkComp from "@/components/LogoDarkComp"
import BurgerMenu from "@/components/BurgerMenu"
import AirportsFooter from "@/components/AirportsFooter"

export default function Home() {
  return (
    <> 
      <WebGiViewer/>
      <div className="flex flex-row">
        <LogoDarkComp/>
        <BurgerMenu/>
      </div>
      <Airports/>
      <DriverOne/>
    </>
  )
}
