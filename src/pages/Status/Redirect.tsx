import { Container, Image, Stack, Title } from '@mantine/core';
import { useTimeout } from '@mantine/hooks';
import { type FC, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import RedirectImage from '@/assets/icons/redirect.svg';

const Content: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { start, clear } = useTimeout(() => navigate('/cryptos'), 1000);

  useEffect(() => {
    start();
    return () => clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Stack align='center'>
        <Image
          maw={800}
          mah={850}
          fit='cover'
          src={RedirectImage}
          alt='redirect image'
          withPlaceholder
        />

        <Title order={6} fz='xs' c='dimmed' mt={50} tt='capitalize'>
          {t('redirectTitle')}
        </Title>
      </Stack>
    </Container>
  );
};

const RedirectPage: FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>301 Error</title>
        <meta
          name='description'
          content='Supper App Project a Simple Project that shows many tools and other tricks...'
        />
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <Content />
    </HelmetProvider>
  );
};

export default RedirectPage;
