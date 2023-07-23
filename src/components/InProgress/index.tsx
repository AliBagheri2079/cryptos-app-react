import { Container, Image, SimpleGrid, Text, Title } from '@mantine/core';
import type { FC } from 'react';

import { useInProgressStyles } from './index.style';
import RedirectImage from '@/assets/images/301-redirect.png';

const InProgressTemplate: FC = () => {
  const { classes } = useInProgressStyles();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
      >
        <Image src={RedirectImage} className={classes.mobileImage} />
        <div>
          <Title className={classes.title}>301 Moved Permanently</Title>
          <Text color='dimmed' size='lg'>
            The HyperText Transfer Protocol (HTTP) 301 Moved Permanently
            redirect status response code indicates that the requested resource
            has been definitively moved to the URL given by the Location
            headers. A browser redirects to the new URL and search engines
            update their links to the resource.
          </Text>
        </div>
        <Image src={RedirectImage} className={classes.desktopImage} />
      </SimpleGrid>
    </Container>
  );
};

export default InProgressTemplate;
