import { Text, Title } from '@mantine/core';
import { type FC } from 'react';

const BrandTitle: FC = () => {
  return (
    <Title order={3} tt='capitalize'>
      <Text span fw={700}>
        Crypt
      </Text>
      fest
    </Title>
  );
};

export default BrandTitle;
