import Image from "next/image";
import PlusButton from "./PlusButton";

const DriverOne = () => {
    return(
        <div className="bg-gradient-radial-b h-[100vh] text-right pr-40 pb-30" id="driver-one">
            <h1 className="text-6xl relative right-[25%] top-[10%] z-0">
                Driver #1
            </h1>
            <Image
            src={'/icon_button_driver.svg'}
            width={60}
            height={60}
            alt='a blue interactive button'
            className='w-48 h-48 relative top-[-5%] left-[25%]'
            />
            <PlusButton/>
        </div>
    )
}

export default DriverOne;