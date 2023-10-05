import Image from "next/image";
import PlusButton from "../../PlusButton";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../../../i18n";

const DriverOne = () => {
    const { t, i18n } = useTranslation();

    return(
        <I18nextProvider i18n={i18nfile}>
        <div className="bg-transparent z-[11] h-[100vh] text-center w-[100%] left-0 relative" id="driver-one">
            <h2 className="text-3xl relative top-[10%] pl-20 pt-12 opacity-0 driver-title z-[11]">
                {t('airport-driver1-title')}
            </h2>
        </div>
        </I18nextProvider>

    )
}

export default DriverOne;