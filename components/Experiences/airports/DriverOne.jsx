import Image from "next/image";
import PlusButton from "../../PlusButton";

const DriverOne = () => {
    return(
        <div className="bg-gradient-radial-b h-[100vh] text-right pr-40 pb-30 w-[100%] left-0" id="driver-one">
            <h1 className="text-6xl relative right-[25%] top-[10%] z-1">
                Driver #1
            </h1>
            <Image
            src={'/icon_button_driver.svg'}
            width={60}
            height={60}
            alt='a blue interactive button'
            className='w-[28%] h-[28%] relative top-[-5%] left-[25%] z-0'
            />
        </div>
    )
}

export default DriverOne;