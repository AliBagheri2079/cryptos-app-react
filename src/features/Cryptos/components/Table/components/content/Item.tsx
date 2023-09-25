/* eslint-disable @typescript-eslint/naming-convention */
import { Avatar, Group, Text } from '@mantine/core';
import type { CSSProperties, FC } from 'react';
import { Link } from 'react-router-dom';

import { LineChart } from '@/components/Chart';
import { useLanguage, usePassedTime } from '@/hooks';
import type { CryptosItemProp } from '@/types/Prop';
import { intlFormat } from '@/utils/helpers';

const InfoCol: FC<Partial<CryptosItemProp>> = ({
  id,
  symbol,
  name,
  image,
  market_cap_rank,
}) => {
  return (
    <Group noWrap>
      <Text size='xs' color='dimmed'>
        {market_cap_rank}
      </Text>

      <Avatar src={image} alt={symbol} variant='filled' radius='xl'>
        {symbol}
      </Avatar>

      <Text<typeof Link>
        component={Link}
        to={id as string}
        size='sm'
        tt='capitalize'
        truncate
        weight={600}
        color='blue.5'
      >
        {name}
      </Text>
    </Group>
  );
};

const MarketCol: FC<Partial<CryptosItemProp>> = ({ market_cap }) => {
  const [language] = useLanguage();

  return (
    <Text size='sm' tt='capitalize' truncate weight={600}>
      {intlFormat.shortCompact(language).format(market_cap as number)}
    </Text>
  );
};

const PriceCol: FC<Partial<CryptosItemProp>> = ({
  current_price,
  price_change_percentage_24h,
}) => {
  const [language] = useLanguage();

  return (
    <Text
      size='sm'
      tt='capitalize'
      truncate
      weight={600}
      color={
        Number(price_change_percentage_24h) > 0
          ? 'green'
          : Number(price_change_percentage_24h) < 0
          ? 'red'
          : 'dimmed'
      }
    >
      {intlFormat.currencyNumber(language).format(current_price as number)}
    </Text>
  );
};

const ChartCol: FC<Partial<CryptosItemProp>> = ({
  sparkline_in_7d,
  price_change_percentage_24h,
}) => {
  return (
    <LineChart
      data={sparkline_in_7d?.price as number[]}
      width={180}
      height={80}
      marginTop={1}
      marginRight={1}
      marginBottom={1}
      marginLeft={1}
      statusColor={
        Number(price_change_percentage_24h) > 0
          ? 'green'
          : Number(price_change_percentage_24h) < 0
          ? 'red'
          : 'dimmed'
      }
    />
  );
};

const TimeCol: FC<Partial<CryptosItemProp>> = ({ last_updated }) => {
  const [language] = useLanguage();
  const passedTime = usePassedTime(last_updated as string);

  return (
    <Text size='sm' tt='lowercase' truncate color='dimmed'>
      {intlFormat.narrowTime(language).format(passedTime, 'seconds')}
    </Text>
  );
};

const Item: FC<CryptosItemProp> = props => {
  const resetStyles: CSSProperties = { border: 'unset' };

  return (
    <tr>
      <td style={resetStyles}>
        <InfoCol {...props} />
      </td>
      <td style={resetStyles}>
        <MarketCol {...props} />
      </td>
      <td style={resetStyles}>
        <PriceCol {...props} />
      </td>
      <td style={resetStyles}>
        <ChartCol {...props} />
      </td>
      <td style={resetStyles}>
        <TimeCol {...props} />
      </td>
    </tr>
  );
};

export default Item;
