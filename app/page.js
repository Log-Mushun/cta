import WebGiViewer from "@/components/WebGiViewer"
import Airports from "@/components/Airports"
import DriverOne from "@/components/DriverOne"
import LogoDarkComp from "@/components/LogoDarkComp"
import BurgerMenu from "@/components/BurgerMenu"

export default function Home() {
  return (
    <> 
      <div className="flex flex-row">
        <LogoDarkComp/>
        <BurgerMenu/>
      </div>
      <Airports/>
      <DriverOne/>
      <WebGiViewer/>
    </>
  )
}
