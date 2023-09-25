import { Anchor, AspectRatio, Badge, Group, Stack, Title } from '@mantine/core';
import { type FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useLanguage } from '@/hooks';
import { useCoinStore } from '@/stores';
import { randomId } from '@/utils/helpers';

const Header: FC = () => {
  const [language] = useLanguage();
  const { data } = useCoinStore();

  return (
    <Stack>
      <Group>
        <AspectRatio ratio={1} w={60}>
          {/* <Image
            src={data?.image.small}
            alt={data?.symbol}
            radius='xl'
            withPlaceholder
          /> */}
          <LazyLoadImage
            src={data?.image.small}
            alt={data?.symbol}
            className='rounded-full'
          />
        </AspectRatio>

        <Title order={1} size='1.8rem' align='center'>
          <Anchor
            color='blue.9'
            href={data?.links.homepage[0]}
            target='_blank'
            rel='noopener'
          >
            {language === 'en'
              ? data?.localization.en.toLocaleLowerCase('en')
              : data?.localization.ar !== ''
              ? data?.localization.ar.toLocaleLowerCase('ar')
              : data?.localization.en.toLocaleLowerCase('en')}
          </Anchor>
        </Title>
      </Group>

      <Group>
        {data?.categories.map(category => {
          const id: string = randomId();
          return (
            <Badge key={id} variant='filled'>
              {category}
            </Badge>
          );
        })}
      </Group>
    </Stack>
  );
};

export default Header;
