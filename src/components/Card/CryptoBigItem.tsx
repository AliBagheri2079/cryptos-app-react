import { Badge, Card, Group, Image, Text } from '@mantine/core';
import { type FC } from 'react';

const CryptoBigItem: FC = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Card.Section>
        <Group position='apart' mt='md' mb='xs'>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color='pink' variant='light'>
            On Sale
          </Badge>
        </Group>
      </Card.Section>

      <Card.Section>
        <Image
          src='https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1102&q=80'
          height={500}
          alt='Norway'
        />
      </Card.Section>
    </Card>
  );
};

export default CryptoBigItem;
