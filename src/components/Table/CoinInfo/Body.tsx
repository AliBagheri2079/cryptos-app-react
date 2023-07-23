import { Text } from '@mantine/core';
import type { FC } from 'react';

import type { RowProp } from '@/types/Prop/CoinInfoTable';

const BodyItem: FC<RowProp> = ({ item }) => {
  return (
    <td>
      <Text size='sm' color='dimmed'>
        {item}
      </Text>
    </td>
  );
};

export default BodyItem;
