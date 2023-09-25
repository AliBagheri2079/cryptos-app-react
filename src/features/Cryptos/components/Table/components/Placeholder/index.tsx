import type { CSSProperties, FC } from 'react';
import ContentLoader from 'react-content-loader';

import { useLanguage } from '@/hooks';
import { randomId } from '@/utils/helpers';

const CircleItem: FC = () => {
  const [language] = useLanguage();
  return (
    <ContentLoader
      rtl={language === 'fa' ?? false}
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
};

const LineItem: FC = () => (
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

const Placeholder: FC = () => {
  const resetStyles: CSSProperties = { border: 'unset' };

  return (
    <>
      {Array.from({ length: 10 }, (_v, i) => i).map(() => {
        const rowId: string = randomId();
        return (
          <tr key={rowId}>
            {Array.from({ length: 5 }, (_v, i) => i).map(item => {
              const colId: string = randomId();
              return (
                <td key={colId} style={resetStyles}>
                  {item === 0 ? <CircleItem /> : <LineItem />}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default Placeholder;
