import AirportsFooter from "./AirportsFooter";

const AirportsComp = () => {
    return (
        <div className="bg-gradient-radial-a h-[100vh] flex flex-col justify-between">
            <div className="text-center pt-[4rem]">
                <h1 className="text-7xl">AEROPUERTOS</h1>
            </div>
            <AirportsFooter/>
        </div>
    );
};

export default AirportsComp;