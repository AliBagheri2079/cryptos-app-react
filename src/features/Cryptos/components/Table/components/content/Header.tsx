import { Text } from '@mantine/core';
import type { CSSProperties, FC } from 'react';
import { Trans } from 'react-i18next';

import { cryptosTableColumnData as columns } from '@/data';
import { randomId } from '@/utils/helpers';

const Header: FC = () => {
  const resetStyles: CSSProperties = { border: 'unset', fontWeight: 'normal' };

  return (
    <tr>
      {columns.map(({ column }) => {
        const id: string = randomId();
        return (
          <th key={id} style={resetStyles}>
            <Text size='xs' color='dimmed' tt='capitalize' truncate>
              <Trans
                i18nKey={column}
                defaults='cryptos <italic>{{string}}</italic>'
                values={{ string: 'header' }}
                components={{ italic: <i /> }}
              />
            </Text>
          </th>
        );
      })}
    </tr>
  );
};

export default Header;
