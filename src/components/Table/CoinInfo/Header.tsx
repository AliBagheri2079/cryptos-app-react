import { Text } from '@mantine/core';
import type { CSSProperties, FC } from 'react';
import { Trans } from 'react-i18next';

import type { ColumnProp } from '@/types/Prop/CoinInfoTable';

const HeaderColumn: FC<ColumnProp> = ({ column }) => {
  const defaultStyles: CSSProperties = { maxWidth: '150px' };

  return (
    <th style={defaultStyles}>
      <Text size='xs' tt='capitalize' truncate>
        <Trans
          i18nKey={column?.toString()}
          defaults='coin <italic>{{string}}</italic>'
          values={{ string: 'head' }}
          components={{ italic: <i /> }}
        />
      </Text>
    </th>
  );
};

export default HeaderColumn;
