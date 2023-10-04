import Image from "next/image";
import PlusButton from "../../PlusButton";

const DriverOne = () => {
    return(
        <div className="bg-transparent z-[11] h-[100vh] text-center w-[100%] left-0 relative" id="driver-one">
            <h1 className="text-6xl relative top-[10%] pl-20 pt-12 opacity-0 driver-title z-[11]">
                Driver #1
            </h1>
        </div>
    )
}

export default DriverOne;