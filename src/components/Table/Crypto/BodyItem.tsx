/* eslint-disable @typescript-eslint/naming-convention */
import { Avatar, Group, Text } from '@mantine/core';
import type { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';

import { LineChart } from '@/components/Chart';
import useLanguage from '@/hooks/useLanguage';
import type { RowProp } from '@/types/Prop/CryptoTable';
import {
  currencyNumberFormat,
  narrowTimeFormat,
  shortCompactFormat,
} from '@/utils/helpers/intlFormat';

const BodyItem: FC<RowProp> = ({
  id,
  symbol,
  name,
  image,
  current_price,
  market_cap,
  market_cap_rank,
  price_change_percentage_24h,
  last_updated,
  sparkline_in_7d,
}) => {
  const resetStyles: CSSProperties = { border: 'unset' };

  const isPriceIncrease: boolean = Number(price_change_percentage_24h) >= 0;

  const [language] = useLanguage();
  const lastTime = new Date(last_updated).getSeconds();
  const newTime = new Date(Date.now()).getSeconds();

  return (
    <tr>
      <td style={resetStyles}>
        <Group noWrap>
          <Text size='xs' color='dimmed'>
            {market_cap_rank}
          </Text>

          <Avatar src={image} alt={symbol} variant='filled' radius='xl'>
            {symbol}
          </Avatar>

          <Text<typeof Link>
            component={Link}
            to={id}
            size='sm'
            tt='capitalize'
            truncate
            weight={600}
            color='blue.5'
          >
            {name}
          </Text>
        </Group>
      </td>

      <td style={resetStyles}>
        <Text size='sm' tt='capitalize' truncate weight={600}>
          {shortCompactFormat(language).format(market_cap)}
        </Text>
      </td>

      <td style={resetStyles}>
        <Text
          size='sm'
          tt='capitalize'
          truncate
          weight={600}
          color={isPriceIncrease ? 'green' : 'red'}
        >
          {currencyNumberFormat(language).format(current_price)}
        </Text>
      </td>

      <td style={resetStyles} className='flex items-center justify-center'>
        <LineChart
          data={sparkline_in_7d?.price as number[]}
          width={180}
          height={80}
          marginTop={1}
          marginRight={1}
          marginBottom={1}
          marginLeft={1}
          statusColor={isPriceIncrease ? 'green' : 'red'}
        />
      </td>

      <td style={resetStyles}>
        <Text size='sm' tt='lowercase' truncate color='dimmed'>
          {narrowTimeFormat(language).format(lastTime - newTime, 'seconds')}
        </Text>
      </td>
    </tr>
  );
};

export default BodyItem;
