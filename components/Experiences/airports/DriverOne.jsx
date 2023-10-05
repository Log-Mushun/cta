import Image from "next/image";
import PlusButton from "../../PlusButton";
import { I18nextProvider, useTranslation } from "react-i18next";
import {i18n as i18nfile} from "../../../i18n";
import { useEffect } from "react";

const DriverOne = () => {
    const { t, i18n } = useTranslation();


  useEffect(() => {
    // Suscribirse al evento personalizado
    const handleCustomEvent = () => {
      // Realizar la acción necesaria para forzar el rerender en ComponenteB
      console.log('ComponenteB ha sido forzado a rerender');
    };

    window.addEventListener('customEvent', handleCustomEvent);

    return () => {
      // Desuscribirse al desmontar el componente (limpiar)
      window.removeEventListener('customEvent', handleCustomEvent);
    };
  }, []);

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