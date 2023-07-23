import { ScrollArea, Table } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { type FC } from 'react';

import BodyItem from './Body';
import HeaderColumn from './Header';
import type { ColumnProp, RowProp } from '@/types/Prop/CoinInfoTable';

type Props = {
  columns: ColumnProp[];
  items?: RowProp[];
};

const CoinInfoTable: FC<Props> = ({ columns, items }) => {
  return (
    <ScrollArea type='hover' scrollbarSize={5} offsetScrollbars>
      <Table
        striped
        withColumnBorders
        fontSize='xs'
        horizontalSpacing='md'
        verticalSpacing='sm'
      >
        <thead>
          <tr>
            {columns.map(column => (
              <HeaderColumn key={randomId()} {...column} />
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {items?.map(item => (
              <BodyItem key={randomId()} {...item} />
            ))}
          </tr>
        </tbody>
      </Table>
    </ScrollArea>
  );
};
export default CoinInfoTable;
