'use client'
import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`


:root{
    // Fonts As per the type scale generator => https://material-io.cn/inline-tools/typography/
 --fontBig: 7em; //88 px
 --fontxxxl: 5.5em; //88 px
 --fontxxl: 3.0375em; //55 px
 --fontxl: 2.05em; //44 px
 --fontlg: 1.9375em; //31 px
 --fontmd: 1.375em; //22 px
 --fontsm: 1.125em; //18 px
 --fontxs: 1em; //16 px
 --fontxxs: 0.75em; //12 px


  // Colors
  --dark: #152c47;
  --grey: #666666;
  --greyLight: #979797;
  --offWhite: #eeeeee;
  --white: #ffffff;
  --blue: #162b47;
  --blueRgba:"0, 113, 227";

  //fonts
  --fontL: "Source Sans Pro light";
  --fontR: "Source Sans Pro";

  // gradientbanda
  --gradientbanda: #262626 0%, #373737 20%, #212122 39%, #333333 76%, #71abd1 100%;
  
  // gradient
  --gradient: #35c3f3 0%, #8b9fe8 20%, #71abd1 39%, #71abd1 76%, #fed2ce 100%;
}


`