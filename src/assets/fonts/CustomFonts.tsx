import { Global } from '@mantine/core';
import { type FC } from 'react';

import SahelBlack_eot from './sahel/Sahel-Black.eot';
import SahelBlack_ttf from './sahel/Sahel-Black.ttf';
import SahelBlack_woff from './sahel/Sahel-Black.woff';
import SahelBlack_woff2 from './sahel/Sahel-Black.woff2';
import SahelBold_eot from './sahel/Sahel-Bold.eot';
import SahelBold_ttf from './sahel/Sahel-Bold.ttf';
import SahelBold_woff from './sahel/Sahel-Bold.woff';
import SahelBold_woff2 from './sahel/Sahel-Bold.woff2';
import SahelLight_eot from './sahel/Sahel-Light.eot';
import SahelLight_ttf from './sahel/Sahel-Light.ttf';
import SahelLight_woff from './sahel/Sahel-Light.woff';
import SahelLight_woff2 from './sahel/Sahel-Light.woff2';
import SahelSemiBold_eot from './sahel/Sahel-SemiBold.eot';
import SahelSemiBold_ttf from './sahel/Sahel-SemiBold.ttf';
import SahelSemiBold_woff from './sahel/Sahel-SemiBold.woff';
import SahelSemiBold_woff2 from './sahel/Sahel-SemiBold.woff2';
import SahelVF_ttf from './sahel/Sahel-VF.ttf';
import SahelVF_woff2 from './sahel/Sahel-VF.woff2';
import Sahel_eot from './sahel/Sahel.eot';
import Sahel_ttf from './sahel/Sahel.ttf';
import Sahel_woff from './sahel/Sahel.woff';
import Sahel_woff2 from './sahel/Sahel.woff2';

export const CustomFonts: FC = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Sahel',
            src: `
              url('${Sahel_eot}'),
              url('${Sahel_eot}?#iefix') format('embedded-opentype'),
              url('${Sahel_woff2}') format('woff2'), 
              url('${Sahel_woff}') format('woff'),
              url('${Sahel_ttf}') format('truetype')
            `,
            fontWeight: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sahel',
            src: `
              url('${SahelBold_eot}'),
              url('${SahelBold_eot}?#iefix') format('embedded-opentype'),
              url('${SahelBold_woff2}') format('woff2'), 
              url('${SahelBold_woff}') format('woff'),
              url('${SahelBold_ttf}') format('truetype')
            `,
            fontWeight: 'bold',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sahel',
            src: `
              url('${SahelLight_eot}'),
              url('${SahelLight_eot}?#iefix') format('embedded-opentype'),
              url('${SahelLight_woff2}') format('woff2'), 
              url('${SahelLight_woff}') format('woff'),
              url('${SahelLight_ttf}') format('truetype')
            `,
            fontWeight: 300,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sahel',
            src: `
              url('${SahelSemiBold_eot}'),
              url('${SahelSemiBold_eot}?#iefix') format('embedded-opentype'),
              url('${SahelSemiBold_woff2}') format('woff2'), 
              url('${SahelSemiBold_woff}') format('woff'),
              url('${SahelSemiBold_ttf}') format('truetype')
            `,
            fontWeight: 600,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sahel',
            src: `
              url('${SahelBlack_eot}'),
              url('${SahelBlack_eot}?#iefix') format('embedded-opentype'),
              url('${SahelBlack_woff2}') format('woff2'), 
              url('${SahelBlack_woff}') format('woff'),
              url('${SahelBlack_ttf}') format('truetype')
            `,
            fontWeight: 900,
          },
        },
        {
          '@font-face': {
            fontFamily: 'Sahel VF',
            src: `              
              url('${SahelVF_woff2}') format('woff2'),
              url('${SahelVF_ttf}') format('truetype')
            `,
          },
        },
      ]}
    />
  );
};
