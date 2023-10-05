import React, { useState } from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { ES } from 'country-flag-icons/react/3x2'
import { CN } from 'country-flag-icons/react/3x2'
import { PT } from 'country-flag-icons/react/3x2'
import { FR } from 'country-flag-icons/react/3x2'
import { DE } from 'country-flag-icons/react/3x2'

import { I18nextProvider, useTranslation } from 'react-i18next';
import {i18n as i18nfile} from "../../i18n";

import { Divider, List,  Modal } from '@mui/material'
import { emitCustomEvent } from './eventService'


function Languages() {

    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false)


    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
      console.log("cambiando idioma a", lng)
      if(open){
        setOpen(false)
      }
      emitCustomEvent();
    };

    
  return (
    <I18nextProvider i18n={i18nfile}>

    <button style={{ width: 'auto',
    display: 'flex',
    borderRadius: '5px',
    padding:"5px",
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Fondo transparente
    backdropFilter: 'blur(10px)', // Efecto de desenfoque
    zIndex:10
}}
onClick={()=>{
    if(!open){
        setOpen(true)
    }
}} >
                   {i18n.language=='PT'?
                    (<>
                    <PT title="Portuguese" style={{width:'2rem', marginRight:'0.5rem'}} onClick={()=>{
    if(!open){
        setOpen(true)
    }
}} />
                    PT
                    </> )
                    :i18n.language=='SP'?
                    (<>
                      <ES title="Spanish" style={{width:'2rem', marginRight:'0.5rem'}} onClick={()=>{
    if(!open){
        setOpen(true)
    }
}} />
                      ES
                      </>)
                      :i18n.language=='CN'?
                      (<>
                        <CN title="Mandarin" style={{width:'2rem', marginRight:'0.5rem'}} onClick={()=>{
    if(!open){
        setOpen(true)
    }
}} />
                        CN
                        </>)
                        :i18n.language=='FR'?
                        (<>
                          <FR title="French" style={{width:'2rem', marginRight:'0.5rem'}} onClick={()=>{
    if(!open){
        setOpen(true)
    }
}} />
                          FR
                          </>)
                          :i18n.language=='DE'?
                          (<>
                            <DE title="Deutch" style={{width:'2rem', marginRight:'0.5rem'}} onClick={()=>{
      if(!open){
          setOpen(true)
      }
  }} />
                            DE
                            </>)
                          :
                          (<>
                            <US title="English" style={{width:'2rem', marginRight:'0.5rem'}} onClick={()=>{
            if(!open){
                setOpen(true)
            }
        }} />
                            EN
                            </> )
                    }
                    
                    </button>
                    <Modal
  open={open}
  style={{
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
  }}
  onClose={() => setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#70A6CB' }}>
    {[
      { code: 'EN', flag: 'US', texto:'English' },
      { code: 'SP', flag: 'ES', texto:'Spanish' },
      { code: 'FR', flag: 'FR', texto:'French' },
      { code: 'DE', flag: 'DE', texto:'Deutsch' },
      { code: 'PT', flag: 'PT', texto:'Portuguese' },
      { code: 'CN', flag: 'CN', texto:'Mandarin' }
     
    ].map((item, index) => (
      <React.Fragment key={index} >
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row'}} onClick={()=>{changeLanguage(item.code)}}>
          <div>
            {item.flag.includes('/') ? (
              <img alt={item.code} src={`/static/images/${item.flag}`} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
            ) : (
              <img alt={item.code} src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.flag}.svg`} style={{ width: '64px', height: '64px', borderRadius: '50%', marginRight:'2rem' }} />
            )}
          </div>
          <span>{item.texto}</span>
        </div>
        {index < 4 && <Divider variant="inset" component="li" />}
      </React.Fragment>
    ))}
  </List>
</Modal>
                    </I18nextProvider>
  )
}

export default Languages