import { Text, Title } from '@mantine/core';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  boldTitle: string;
  regularTitle: string;
};

const BrandTitle: FC<Props> = ({ boldTitle, regularTitle }) => {
  const { t } = useTranslation();

  return (
    <Title order={3} tt='capitalize'>
      <Text span fw={700}>
        {t(boldTitle)}
      </Text>
      <Text span>{t(regularTitle)}</Text>
    </Title>
  );
};

export default BrandTitle;
