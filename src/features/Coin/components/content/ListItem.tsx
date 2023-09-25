/* eslint-disable @typescript-eslint/naming-convention */
import { Box, List, Text, ThemeIcon } from '@mantine/core';
import { IconCheckupList, IconListDetails } from '@tabler/icons-react';
import { type FC } from 'react';
import { Trans } from 'react-i18next';

import { coinItems } from '@/data';
import { useLanguage } from '@/hooks';
import { useCoinStore } from '@/stores';
import type { CoinItemProp } from '@/types/Prop';
import { intlFormat, randomId } from '@/utils/helpers';

const ListItem: FC = () => {
  const [language] = useLanguage();
  const { data } = useCoinStore();

  const options = [
    intlFormat
      .currencyNumber(language)
      .format(data?.market_data.current_price.usd as number),

    intlFormat
      .percentUnit(language)
      .format(
        data?.market_data.price_change_percentage_24h_in_currency.usd as number,
      ),

    intlFormat
      .currencyNumber(language)
      .format(data?.market_data.high_24h.usd as number),

    intlFormat
      .currencyNumber(language)
      .format(data?.market_data.low_24h.usd as number),

    intlFormat
      .shortCompact(language)
      .format(data?.market_data.market_cap_rank as number),

    intlFormat
      .shortCompact(language)
      .format(data?.market_data.market_cap.usd as number),

    intlFormat
      .shortCompact(language)
      .format(data?.market_data.total_volume.usd as number),

    intlFormat.percentUnit(language).format(data?.coingecko_score as number),

    intlFormat.percentUnit(language).format(data?.developer_score as number),

    intlFormat.percentUnit(language).format(data?.community_score as number),
  ];
  const items: CoinItemProp[] = coinItems.map(({ title }, index) => ({
    title,
    item: options[index],
  }));

  const defaultIcon = (
    <ThemeIcon size={24} radius='xl'>
      <IconListDetails size={14} />
    </ThemeIcon>
  );
  const statusIcon = (
    <ThemeIcon
      color={
        Number(data?.market_data.price_change_percentage_24h_in_currency.usd) >
        0
          ? 'green'
          : Number(
              data?.market_data.price_change_percentage_24h_in_currency.usd,
            ) < 0
          ? 'red'
          : 'dimmed'
      }
      size={24}
      radius='xl'
    >
      <IconCheckupList size={17} />
    </ThemeIcon>
  );

  return (
    <Box>
      <List spacing='xs' size='sm' center icon={defaultIcon}>
        {items.map(({ title, item }, index) => {
          const id: string = randomId();
          return (
            <List.Item key={id} icon={index < 4 ? statusIcon : null}>
              <Text span size='xs' tt='capitalize' color='dimmed' truncate>
                <Trans
                  i18nKey={title as string}
                  defaults='coin <italic>{{string}}</italic>'
                  values={{ string: 'title' }}
                  components={{ italic: <i /> }}
                />
                :
              </Text>
              <Text span mx='xs'>
                {item}
              </Text>
            </List.Item>
          );
        })}
      </List>
    </Box>
  );
};

export default ListItem;
