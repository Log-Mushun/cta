const SlidableDriverInfo = (props) => {
    return(
        <div className="bg-black w-[0%] h-screen right-0 fixed top-0 z-[31]" id={`slidable-driver-info${props.number}`}>Slidable driver info {props.number}</div>
    )
}

export default SlidableDriverInfo;