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
                description: 'Webby Awards - Honoree',
            }
        ],
    },
    {
        title: 'Also a thing',
        info: [
            {
                description: 'UX/UI Designer - XYZ Company',
            },
        ],
    }
];



const DriverInsights = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="bg-gradient-radial-a h-[100vh] text-right pr-40" id="driver-insights">
            {/* info */}
            <div className='flex flex-col w-full xl:max-w-[48%] h-[480px] items-center justify-center'>
                <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                    {driverData.map((item, itemIndex) => {
                        return (
                            <div key={itemIndex} className='relative'>
                                <div
                                    key={itemIndex}   
                                    className={`cursor-pointer absolute top-0 left-0 w-[8vh] h-[1vh] ${itemIndex == index ? 'bg-white' : 'bg-[#b2cde0]'}`}
                                    onClick={() => setIndex(itemIndex)}
                                ></div>
                                <div
                                    className='pt-5'
                                    key={itemIndex}                               
                                >
                                    {item.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start z-30'>
                    {driverData[index].info.map((item, itemIndex) => {
                        return (
                            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white w-[50%]'>
                                <div className='hidden md:flex'>-</div>
                                <div className='font-light mb-2 md:mb-0'>{item.description}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DriverInsights;