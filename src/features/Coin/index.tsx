import { Center, Container, Drawer, Group, Stack } from '@mantine/core';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Detail, ErrorPart, Header, ListItem, Placeholder } from './components';
import { useMatcheSize } from '@/hooks';
import { useCoinStore } from '@/stores';

const Coin: FC = () => {
  const navigate = useNavigate();
  const size = useMatcheSize();
  const { data, error, isLoading, isValidating } = useCoinStore();

  return (
    <Drawer
      opened
      onClose={() => navigate('/cryptos')}
      id={data?.id}
      zIndex={1000}
      position='bottom'
      size={size.smallerThan.sm ? '85%' : '75%'}
      sx={theme => ({
        '& [role="dialog"]': {
          borderRadius: `${theme.spacing.md} ${theme.spacing.md} 0 0`,
        },
      })}
      overlayProps={{ opacity: 0.5, blur: 4 }}
      withCloseButton={false}
      // closeButtonProps={{ 'aria-label': 'Close modal' }}
    >
      <Container fluid my='xl'>
        {error ? (
          <ErrorPart title={error.message} />
        ) : data?.error ? (
          <ErrorPart title={data.error} />
        ) : (
          <Stack justify='space-around'>
            <Group position='apart' grow>
              <Center sx={{ maxInlineSize: 'unset', flexBasis: '300px' }}>
                {isValidating || isLoading ? (
                  <Placeholder.Header />
                ) : (
                  <Header />
                )}
              </Center>

              <Center sx={{ maxInlineSize: 'unset', flexBasis: '300px' }}>
                {isValidating || isLoading ? (
                  <Placeholder.ListItem />
                ) : (
                  <ListItem />
                )}
              </Center>
            </Group>

            {isValidating || isLoading ? <Placeholder.Detail /> : <Detail />}
          </Stack>
        )}
      </Container>
    </Drawer>
  );
};

export default Coin;
