import { type FC } from 'react';

import { Button, Container, Group, Image, ImageRoot } from './index.styled';
import ErrorImage from '@/assets/icons/404-error.svg';

const NothingFoundTemplate: FC = () => {
  return (
    <Container>
      <Group>
        <ImageRoot>
          <Image src={ErrorImage} alt='404 Status Code' />
        </ImageRoot>

        <Button $primary as='a' href='/dashboard'>
          Go to Home Page
        </Button>
      </Group>
    </Container>
  );
};

export default NothingFoundTemplate;
