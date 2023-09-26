"use client";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../i18n";

import AirportsFooter from "./AirportsFooter";

const AirportsComp = () => {

    const { t, i18n } = useTranslation();

  /*   const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    };
 */

    return (
        <I18nextProvider i18n={i18nfile}>
        <div className="bg-gradient-radial-a h-[100vh] flex flex-col justify-between">
            <div className="text-center pt-[4rem]">
                <h1 className="text-7xl">{t('header-airport')}</h1>
            </div>
            <AirportsFooter/>
        </div>
        </I18nextProvider>
    );
};

export default AirportsComp;