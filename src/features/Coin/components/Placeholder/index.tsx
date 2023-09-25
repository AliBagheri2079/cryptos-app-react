import { Center } from '@mantine/core';
import type { FC } from 'react';
import ContentLoader from 'react-content-loader';

import { useLanguage } from '@/hooks';

const Header: FC = () => {
  const [language] = useLanguage();

  return (
    <ContentLoader
      rtl={language === 'fa' ?? false}
      speed={2}
      width={300}
      height={200}
      viewBox='0 0 476 124'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='20' y='110' rx='3' ry='3' width='65' height='11' />
      <rect x='95' y='110' rx='3' ry='3' width='140' height='11' />
      <rect x='120' y='35' rx='3' ry='3' width='150' height='15' />
      <circle cx='45' cy='45' r='45' />
    </ContentLoader>
  );
};

const ListItem: FC = () => {
  const [language] = useLanguage();

  return (
    <ContentLoader
      rtl={language === 'fa' ?? false}
      speed={2}
      width={400}
      height={150}
      viewBox='0 0 400 150'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <circle cx='10' cy='20' r='8' />
      <rect x='25' y='15' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='50' r='8' />
      <rect x='25' y='45' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='80' r='8' />
      <rect x='25' y='75' rx='5' ry='5' width='220' height='10' />
      <circle cx='10' cy='110' r='8' />
      <rect x='25' y='105' rx='5' ry='5' width='220' height='10' />
    </ContentLoader>
  );
};

const Detail: FC = () => {
  const [language] = useLanguage();

  return (
    <Center>
      <ContentLoader
        rtl={language === 'fa' ?? false}
        speed={2}
        width={476}
        height={124}
        viewBox='0 0 476 124'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
      >
        <rect x='0' y='40' rx='3' ry='3' width='410' height='6' />
        <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
        <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
      </ContentLoader>
    </Center>
  );
};

const Placeholder = {
  Header,
  ListItem,
  Detail,
};

export default Placeholder;
