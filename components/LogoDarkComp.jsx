import Image from "next/image";


const LogoDarkComp = () => {
    return(
        <div className='w-48 bg-transparent'>
            <Image
            src={'/logo_dark.svg'}
            width={300}
            height={300}
            alt = 'logo'
            />
        </div>
    )
}

export default LogoDarkComp;