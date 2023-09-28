import Image from "next/image";

const PlusButton = () => {
    return (
        <div>
            <Image
                src={'/circle_outside_plus.svg'}
                width={200}
                height={200}
                alt='a rotating circle'
                className="absolute"
            />
            <Image
                src={'/plus.svg'}
                width={200}
                height={200}
                alt='a plus sign, it looks like a vertical cross'
                className="absolute"
            />
        </div>
    )
}

export default PlusButton;