import { Pagination } from '@mantine/core';
import {
  IconArrowBarToLeft,
  IconArrowBarToRight,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';
import { type FC } from 'react';

import { useMatcheSize } from '@/hooks';

type Props = {
  total: number;
  active: number;
  handler: (value: number) => void;
};

const CryptosPagination: FC<Props> = ({ total, active, handler }) => {
  const size = useMatcheSize();

  return (
    <Pagination
      total={total}
      value={active}
      onChange={value => handler(value)}
      siblings={size.largerThan.sm ? 2 : 1}
      withEdges={size.largerThan.sm}
      nextIcon={IconArrowRight}
      previousIcon={IconArrowLeft}
      firstIcon={IconArrowBarToLeft}
      lastIcon={IconArrowBarToRight}
      dotsIcon={IconGripHorizontal}
      size='md'
      radius='md'
      position='center'
      styles={theme => ({
        control: {
          border: 0,
          backgroundColor: 'unset',
          backdropFilter: 'blur(10px)',
          '&[data-active]': {
            backgroundColor: theme.fn.variant({
              variant: 'filled',
              color: theme.primaryColor,
            }).hover,
          },
        },
      })}
    />
  );
};

export default CryptosPagination;
