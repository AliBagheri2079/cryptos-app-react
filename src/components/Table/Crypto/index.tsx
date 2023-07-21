import { Box, ScrollArea, Table } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { type FC } from 'react';

import BodyItem from './BodyItem';
import BodyPlaceholder from './BodyPlaceholder';
import HeaderColumn from './Header';
import type { ColumnProp, RowProp } from '@/types/Prop/CryptoTable';

type Props = {
  columns: ColumnProp[];
  data?: RowProp[];
  isLoading: boolean;
};

const CryptoTable: FC<Props> = ({ columns, data, isLoading }) => {
  return (
    <ScrollArea type='hover' scrollbarSize={5} offsetScrollbars>
      <Box
        sx={theme => ({
          [theme.fn.smallerThan('md')]: {
            width: `min(calc(100vw - 6rem), ${theme.breakpoints.md})`,
          },
        })}
      >
        <Table
          horizontalSpacing='xl'
          verticalSpacing='sm'
          fontSize='xs'
          sx={theme => ({
            backgroundColor: theme.fn.variant({
              variant: 'light',
              color: theme.primaryColor,
            }).hover,
            borderRadius: theme.radius.lg,
          })}
        >
          <thead>
            <tr>
              {columns.map(column => (
                <HeaderColumn key={randomId()} {...column} />
              ))}
            </tr>
          </thead>

          <tbody>
            {isLoading
              ? Array.from({ length: 5 }, (_v, i) => i).map(item => (
                  <BodyPlaceholder key={item} />
                ))
              : data?.map(items => <BodyItem key={randomId()} {...items} />)}
          </tbody>
        </Table>
      </Box>
    </ScrollArea>
  );
};
export default CryptoTable;
