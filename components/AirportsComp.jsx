import AirportsFooter from "./AirportsFooter";
import { BsDot } from "react-icons/bs";

const AirportsComp = () => {
    return (
        <div className="bg-gradient-radial-a h-[100vh] flex flex-col justify-between">
            <div className="flex flex-col justify-between items-center h-screen">
                <div className="text-center pt-[4rem]">
                    <h1 className="text-7xl">AEROPUERTOS</h1>
                </div>
                <div>
                    <BsDot className="h-8 w-8"/>
                    <h2 className="text-xl">Scroll down</h2>
                </div>
            </div>
            <AirportsFooter/>
        </div>
    );
};

export default AirportsComp;