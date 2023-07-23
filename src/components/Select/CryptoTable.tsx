import { Select, useMantineTheme } from '@mantine/core';
import { IconArrowsSort } from '@tabler/icons-react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import useMatchesSize from '@/hooks/useMatchesSize';
import { type Order } from '@/types/Api/Crypto/global';
import type { OrderProp } from '@/types/Prop/CryptoTable';

type Props = {
  data: OrderProp[];
  defaultValue?: string;
  orderValue?: string;
  handler?: (query: Order) => void;
};

const CryptoTableOrder: FC<Props> = ({
  data,
  defaultValue,
  orderValue,
  handler,
}) => {
  const theme = useMantineTheme();
  const { t } = useTranslation();
  const size = useMatchesSize();

  return (
    <Select
      defaultValue={defaultValue}
      searchValue={orderValue}
      onSearchChange={(query: Order) => handler && handler(query)}
      data={data}
      placeholder={t('cryptoTableOrderPlaceholder')}
      nothingFound={t('cryptoTableOrderNotFound')}
      variant='filled'
      radius='lg'
      maw={size.largerThan.sm ? 300 : 'auto'}
      icon={<IconArrowsSort size={16} />}
      transitionProps={{
        transition: theme.dir === 'ltr' ? 'pop-top-left' : 'pop-top-right',
        duration: 150,
        timingFunction: 'ease-in-out',
      }}
      styles={theme => ({
        dropdown: {
          borderRadius: theme.radius.md,
        },

        item: {
          borderRadius: theme.radius.md,

          '&[data-selected]': {
            '&, &:hover': {
              color: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
              }).color,
              backgroundColor: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
              }).hover,
              backdropFilter: 'blur(10px)',
            },
          },
        },
      })}
      clearable
      searchable
      withinPortal
      aria-label='Order Crypto Data'
      clearButtonProps={{ 'aria-label': 'Clear select field' }}
    />
  );
};

export default CryptoTableOrder;
