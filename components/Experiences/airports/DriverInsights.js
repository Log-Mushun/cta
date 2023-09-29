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
        title: 'info',
        info: [
            {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        ],
    },
    {
        title: 'data',
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
        <div className="bg-gradient-radial-a h-[100vh] text-right pr-40 relative" id="driver-insights">
            <div className='pt-40 pl-10'>
                <div className='flex h-[1vh] mb-4'>
                    {driverData.map((item, itemIndex) => {
                        return (
                            <div key={itemIndex} className='relative w-[20vh]'>
                                <div
                                    key={itemIndex}
                                    className={`cursor-pointer absolute top-0 left-0 w-[15vh] h-[1vh] z-10 ${itemIndex === index ? 'bg-white' : 'bg-[#b2cde0]'}`}
                                    onClick={() => setIndex(itemIndex)}
                                ></div>
                            </div>
                        );
                    })}
                </div>
                <div className=''>
                    <div>
                        {driverData[index].info.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex} className='flex-1 flex flex-col md:flex-col max-w-max gap-x-2 items-start text-white w-[30%]'>
                                    <div className='font-light mb-2 md:mb-0 text-start'>
                                        <h1 className='text-[200%]'>
                                            {driverData[index].title}
                                        </h1>
                                    </div>
                                    <div className='mb-2 md:mb-0 text-start'>
                                        <p className='text-[70%] text-white'>{item.description}</p></div>
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
