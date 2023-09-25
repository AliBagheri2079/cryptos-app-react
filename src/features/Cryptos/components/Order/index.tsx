import { Select } from '@mantine/core';
import { IconArrowsSort } from '@tabler/icons-react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import { cryptosOrderData as orders } from '@/data';
import { useDirection } from '@/hooks';
import type { Order } from '@/types/Api/Coingecko';

type Props = {
  value: string;
  handler: (query: Order) => void;
};

const CryptosOrder: FC<Props> = ({ value, handler }) => {
  const [dir] = useDirection();
  const { t } = useTranslation();

  return (
    <Select
      data={orders}
      defaultValue={value}
      searchValue={value}
      onSearchChange={query => handler(query as Order)}
      placeholder={t('cryptosOrderPlaceholder')}
      nothingFound={t('cryptosOrderNotFound')}
      variant='filled'
      radius='lg'
      clearable
      searchable
      withinPortal
      aria-label='Order Cryptos Data'
      clearButtonProps={{ 'aria-label': 'Clear select field' }}
      icon={<IconArrowsSort size={16} />}
      transitionProps={{
        transition: dir === 'ltr' ? 'pop-top-left' : 'pop-top-right',
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
    />
  );
};

export default CryptosOrder;
