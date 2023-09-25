import { Group } from '@mantine/core';
import { type FC } from 'react';

import BrandLogo from './Logo';
import BrandTitle from './Title';

const Brand: FC = () => {
  return (
    <Group position='left' sx={{ maxBlockSize: '2rem', overflow: 'hidden' }}>
      <BrandLogo />
      <BrandTitle boldTitle='brandTitle_1' regularTitle='brandTitle_2' />
    </Group>
  );
};

export default Brand;
