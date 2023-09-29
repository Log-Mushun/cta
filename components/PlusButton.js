import Image from "next/image";

const PlusButton = () => {
    return (
        <div className="absolute w-80 h-80">
            <Image
                src={'/circle_outside_plus.svg'}
                width={200}
                height={200}
                alt='a rotating circle'
                className="relative"
            ></Image>
            <Image
                src={'/plus.svg'}
                width={60}
                height={60}
                alt='a plus sign, it looks like a vertical cross'
                className="absolute top-[25%] left-[25%]"
            />
        </div>
    )
}

export default PlusButton;