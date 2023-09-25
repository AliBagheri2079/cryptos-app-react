import { Button, Container, Image, Stack } from '@mantine/core';
import { type FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import NotfoundImage from '@/assets/icons/notfound.svg';

const Content: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Stack align='center'>
        <Image
          maw={750}
          mah={700}
          fit='cover'
          src={NotfoundImage}
          alt='notfound image'
          withPlaceholder
        />

        <Button<typeof NavLink>
          component={NavLink}
          to='/home'
          variant='subtle'
          radius='xl'
          tt='capitalize'
        >
          {t('notfoundTitle')}
        </Button>
      </Stack>
    </Container>
  );
};

const NotfoundPage: FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Error</title>
        <meta
          name='description'
          content='Crypto App Project a Simple Project that shows many tools and other tricks...'
        />
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <Content />
    </HelmetProvider>
  );
};

export default NotfoundPage;
