import { Text } from '@mantine/core';
import type { CSSProperties, FC } from 'react';
import { Trans } from 'react-i18next';

import type { ColumnProp } from '@/types/Prop/CryptoTable';

const HeaderColumn: FC<ColumnProp> = ({ column }) => {
  const resetStyles: CSSProperties = { border: 'unset', fontWeight: 'normal' };

  return (
    <th style={resetStyles}>
      <Text size='xs' color='dimmed' tt='capitalize' truncate>
        <Trans
          i18nKey={column}
          defaults='crypto <italic>{{string}}</italic>'
          values={{ string: 'head' }}
          components={{ italic: <i /> }}
        />
      </Text>
    </th>
  );
};

export default HeaderColumn;
