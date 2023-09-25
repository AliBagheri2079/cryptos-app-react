import {
  Divider,
  Spoiler,
  Stack,
  Text,
  TypographyStylesProvider,
} from '@mantine/core';
import { IconListDetails } from '@tabler/icons-react';
import type { FC } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { useLanguage, useMatcheSize } from '@/hooks';
import { useCoinStore } from '@/stores';

const Detail: FC = () => {
  const [language] = useLanguage();
  const size = useMatcheSize();
  const { data } = useCoinStore();
  const { t } = useTranslation();

  return (
    <Stack>
      <Divider
        my='xs'
        variant='dashed'
        labelPosition='center'
        label={
          <>
            <IconListDetails size={15} />
            <Text tt='capitalize' ml={5}>
              <Trans
                i18nKey='coinDetail'
                defaults='coin <italic>{{string}}</italic>'
                values={{ string: 'detail' }}
                components={{ italic: <i /> }}
              />
            </Text>
          </>
        }
      />

      <Spoiler
        maxHeight={size.smallerThan.sm ? 50 : 55}
        showLabel={t('coinDetailLabel_1')}
        hideLabel={t('coinDetailLabel_2')}
        styles={theme => ({
          control: {
            color: theme.colors.blue[9],
          },
        })}
      >
        <TypographyStylesProvider ta='justify'>
          <div
            dangerouslySetInnerHTML={{
              __html: (language === 'en'
                ? data?.description.en
                : data?.description.ar !== ''
                ? data?.description.ar
                : data?.description.en) as string,
            }}
          />
        </TypographyStylesProvider>
      </Spoiler>
    </Stack>
  );
};

export default Detail;
