import { Text, Title } from '@mantine/core';
import type { FC } from 'react';
import { Trans } from 'react-i18next';

type BrandTitleProps = {
  boldTitle: string;
  regularTitle?: string;
};

const BrandTitle: FC<BrandTitleProps> = ({ boldTitle, regularTitle }) => {
  return (
    <Title order={3} tt='capitalize'>
      <Text span fw={700}>
        <Trans i18nKey={boldTitle} defaults='Supper' />
      </Text>
      <Text span>
        <Trans
          i18nKey={regularTitle}
          defaults='<italic>{{string}}</italic>'
          values={{ string: 'app' }}
          components={{ italic: <i /> }}
        />
      </Text>
    </Title>
  );
};

export default BrandTitle;
