/* eslint-disable @typescript-eslint/naming-convention */
import type { CSSProperties, FC } from 'react';
import ContentLoader from 'react-content-loader';

import useLanguage from '@/hooks/useLanguage';

const CoinFirstItemLoader: FC<{ language?: string }> = ({ language }) => (
  <ContentLoader
    rtl={language ? language !== 'en' : false}
    speed={2}
    width={150}
    height={50}
    viewBox='0 0 150 50'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='50' y='9' rx='3' ry='3' width='90' height='6' />
    <rect x='50' y='27' rx='3' ry='3' width='50' height='6' />
    <circle cx='20' cy='20' r='20' />
  </ContentLoader>
);

const CoinOtherItemLoader: FC = () => (
  <ContentLoader
    speed={2}
    width={100}
    height={50}
    viewBox='0 0 100 50'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <rect x='0' y='20' rx='3' ry='3' width='100' height='6' />
  </ContentLoader>
);

const BodyPlaceholder: FC = () => {
  const resetStyles: CSSProperties = { border: 'unset' };
  const [language] = useLanguage();

  return (
    <tr>
      <td style={resetStyles}>
        <CoinFirstItemLoader language={language} />
      </td>

      <td style={resetStyles}>
        <CoinOtherItemLoader />
      </td>
      <td style={resetStyles}>
        <CoinOtherItemLoader />
      </td>
      <td style={resetStyles}>
        <CoinOtherItemLoader />
      </td>
      <td style={resetStyles}>
        <CoinOtherItemLoader />
      </td>
    </tr>
  );
};

export default BodyPlaceholder;
