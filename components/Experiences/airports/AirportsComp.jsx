"use client";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../../../i18n";

import AirportsFooter from "../../AirportsFooter";
import { BsDot } from "react-icons/bs";
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

const AirportsComp = () => {

    const { t, i18n } = useTranslation();

  /*   const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    };
 */

    return (
        <I18nextProvider i18n={i18nfile}>
        <div className="bg-gradient-radial-a h-[100vh] flex flex-col justify-between" id="airports-comp">
        <div className="flex flex-col justify-between items-center h-screen">
            <div className="text-center pt-[4rem] z-[11]">
                <h1 className="text-7xl experience_title">{t('header-airport')}</h1>
            </div>
            <div className="flex flex-row self-center scrolldown z-[11] pb-10">
                    <motion.div
                        animate={{
                            opacity: [0, 1, 0],
                            y: [-40, 0, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    >
                        <BsDot className="h-8 w-8" />
                    </motion.div>
                    <h2 className="text-xl">Scroll down</h2>
                </div>
        </div>
            <AirportsFooter/>
        </div>
        </I18nextProvider>
    );
};

export default AirportsComp;