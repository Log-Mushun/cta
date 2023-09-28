'use client'

import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

//  about data
export const driverData = [
    {
        title: 'Driver Insights',
        info: [
            {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
    },
    {
        title: 'something',
        info: [
            {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        ],
    },
    {
        title: 'Also a thing',
        info: [
            {
                description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            },
        ],
    }
];



const DriverInsights = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="bg-gradient-radial-a h-[100vh] text-right pr-40" id="driver-insights">
            <div className='flex flex-col xl:max-w-[48%] h-[480px] items-start justify-center'>
                <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                    {driverData.map((item, itemIndex) => {
                        return (
                            <div key={itemIndex} className='relative w-[20vh]'>
                                <div
                                    key={itemIndex}
                                    className={`cursor-pointer absolute top-0 left-0 w-[15vh] h-[1vh] z-10 ${itemIndex === index ? 'bg-white' : 'bg-[#b2cde0] ml-10'}`}
                                    onClick={() => setIndex(itemIndex)}
                                ></div>
                            </div>
                        );
                    })}
                </div>
                <div className='text-start flex flex-col justify-center'>
                    <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start z-30'>
                        {driverData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className='flex-1 flex flex-col md:flex-col max-w-max gap-x-2 items-start text-white w-[50%]'>
                                    <div className='font-light mb-2 md:mb-0 text-start'>
                                        <h1>
                                            {driverData[index].title}
                                        </h1>
                                    </div>
                                    <div className='font-light mb-2 md:mb-0 text-start'>{item.description}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriverInsights;
