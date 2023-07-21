import {
  Anchor,
  AspectRatio,
  Badge,
  Divider,
  Drawer,
  Group,
  Image,
  Spoiler,
  Text,
  Title,
  TypographyStylesProvider,
  useMantineTheme,
} from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconListDetails } from '@tabler/icons-react';
import type { FC } from 'react';

import { CoinInfoTable } from '@/components/Table';
import {
  coinInfoTableColumnData1,
  coinInfoTableColumnData2,
  coinInfoTableColumnData3,
} from '@/data/coinInfoTable';
import useLanguage from '@/hooks/useLanguage';
import useMatchesSize from '@/hooks/useMatchesSize';
import type CoinMarketData from '@/types/Api/Crypto/Data/CoinMarket';
import type { RowProp } from '@/types/Prop/CoinInfoTable';
import {
  currencyNumberFormat,
  narrowTimeFormat,
  percentUnitFormat,
  shortCompactFormat,
} from '@/utils/helpers/intlFormat';

type Props = {
  data: CoinMarketData | undefined;
};

const CoinInfo: FC<Props> = ({ data }) => {
  const theme = useMantineTheme();
  const size = useMatchesSize();
  const [language] = useLanguage();
  const newTime = new Date(Date.now()).getSeconds();
  const lastTime = new Date(
    data?.market_data.last_updated ? data?.market_data.last_updated : newTime,
  ).getSeconds();

  const coinInfoTableBodyData1: RowProp[] = [
    {
      item: currencyNumberFormat(language).format(
        data?.market_data.current_price.usd as number,
      ),
    },
    {
      item: percentUnitFormat(language).format(
        data?.market_data.price_change_percentage_24h_in_currency.usd as number,
      ),
    },
    {
      item: currencyNumberFormat(language).format(
        data?.market_data.high_24h.usd as number,
      ),
    },
    {
      item: currencyNumberFormat(language).format(
        data?.market_data.low_24h.usd as number,
      ),
    },
  ];
  const coinInfoTableBodyData2: RowProp[] = [
    {
      item: data?.market_data.market_cap_rank,
    },
    {
      item: shortCompactFormat(language).format(
        data?.market_data.market_cap.usd as number,
      ),
    },
    {
      item: shortCompactFormat(language).format(
        data?.market_data.total_volume.usd as number,
      ),
    },
    {
      item: narrowTimeFormat(language).format(lastTime - newTime, 'seconds'),
      // item: '12s',
    },
  ];
  const coinInfoTableBodyData3: RowProp[] = [
    {
      item: data?.coingecko_score,
    },
    {
      item: data?.developer_score,
    },
    {
      item: data?.community_score,
    },
  ];

  return (
    <Drawer
      opened
      onClose={() => history.back()}
      id={data?.id}
      title='Coin Info'
      zIndex={1010}
      position={theme.dir === 'ltr' ? 'left' : 'right'}
      size={size.largerThan.sm ? '50%' : '100%'}
      withCloseButton={!size.largerThan.sm}
      transitionProps={{
        transition: theme.dir === 'ltr' ? 'pop-top-left' : 'pop-top-right',
        duration: 150,
        timingFunction: 'ease-in-out',
      }}
      overlayProps={{ opacity: 0.5, blur: 2 }}
      closeButtonProps={{ 'aria-label': 'Close modal' }}
    >
      <AspectRatio ratio={8 / 9} maw={300} mx='auto'>
        <Image src={data?.image.large} alt={data?.symbol} withPlaceholder />
      </AspectRatio>

      <Title order={1} size='2rem' align='center'>
        <Anchor href={data?.links.homepage[0]} target='_blank' color='blue.5'>
          {language === 'en'
            ? data?.localization.en
            : data?.localization.ar === ''
            ? data?.localization.en
            : data?.localization.ar}
        </Anchor>
      </Title>

      <CoinInfoTable
        columns={coinInfoTableColumnData1}
        items={coinInfoTableBodyData1}
      />
      <CoinInfoTable
        columns={coinInfoTableColumnData2}
        items={coinInfoTableBodyData2}
      />
      <CoinInfoTable
        columns={coinInfoTableColumnData3}
        items={coinInfoTableBodyData3}
      />

      <Divider
        my='xs'
        variant='dashed'
        labelPosition='center'
        label={
          <>
            <IconListDetails size={15} />
            <Text ml={5}>coin details</Text>
          </>
        }
      />

      <Spoiler
        maxHeight={130}
        showLabel='Show more'
        hideLabel='Hide'
        styles={theme => ({
          control: {
            color: theme.colors.blue[5],
          },
        })}
      >
        <TypographyStylesProvider ta='justify'>
          <div
            dangerouslySetInnerHTML={{
              __html: (language === 'en'
                ? data?.description.en
                : data?.description.ar === ''
                ? data?.description.en
                : data?.description.ar) as string,
            }}
          />
        </TypographyStylesProvider>
      </Spoiler>

      <Group position='center'>
        {data?.categories.map(category => (
          <Badge key={randomId()} variant='filled'>
            {category}
          </Badge>
        ))}
      </Group>
    </Drawer>
  );
};

export default CoinInfo;
