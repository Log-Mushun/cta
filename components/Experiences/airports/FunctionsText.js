import React, { useState } from "react";

const FunctionsText = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = (index) => {
        console.log('clicked');
        setSelectedIndex(index);
    }

    const buttons = ['Function 1', 'Function 2', 'Function 3'];
    const descriptions = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ];

    return (
        <div className='pt-[27%] z-[32] absolute functions-text'>
            <div className='w-full flex flex-row pl-28'>
                {buttons.map((button, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer mr-8 ${index === 0 ? '0' : '10'} w-[15vh] h-[1vh] hover:bg-white transition-colors duration-200 ${selectedIndex === index ? 'bg-white' : 'bg-[#b2cde0]'}`}
                        onClick={() => handleClick(index)}
                    ></div>
                ))}
            </div>
            <div className='flex-1 flex flex-col md:flex-col max-w-max gap-x-2 items-start text-white w-[30%]'>
                <div className='mb-2 md:mb-0 flex flex-row w-screen justify-around px-20'>
                    {buttons.map((button, index) => (
                        <div key={index} className={`flex flex-col items-start text-left ${index === selectedIndex ? 'opacity-100' : 'opacity-25'} w-72 transition-opacity duration-300`}>
                            <h1 className='text-[200%] pt-10'>{button}</h1>
                            <p className='text-[70%] text-white'>{descriptions[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FunctionsText;
