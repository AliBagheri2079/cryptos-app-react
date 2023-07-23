import { Pagination } from '@mantine/core';
import {
  IconArrowBarToLeft,
  IconArrowBarToRight,
  IconArrowLeft,
  IconArrowRight,
  IconGripHorizontal,
} from '@tabler/icons-react';
import type { FC } from 'react';

import useMatchesSize from '@/hooks/useMatchesSize';

type Props = {
  total?: number;
  active?: number;
  handler?: (value: number) => void;
};

const CryptoTablePagination: FC<Props> = ({ total, active, handler }) => {
  const size = useMatchesSize();

  return (
    <Pagination
      size='md'
      radius='md'
      position='center'
      total={total ?? 10}
      siblings={size.largerThan.sm ? 2 : 1}
      withEdges={size.largerThan.sm}
      nextIcon={IconArrowRight}
      previousIcon={IconArrowLeft}
      firstIcon={IconArrowBarToLeft}
      lastIcon={IconArrowBarToRight}
      dotsIcon={IconGripHorizontal}
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
      value={active}
      onChange={value => (handler ? handler(value) : null)}
    />
  );
};

export default CryptoTablePagination;
