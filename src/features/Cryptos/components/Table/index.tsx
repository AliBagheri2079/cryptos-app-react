import { Box, ScrollArea, Table } from '@mantine/core';
import { type FC } from 'react';

import { ErrorPart, Header, Item, Placeholder } from './components';
import { useCryptosStore } from '@/stores';
import { randomId } from '@/utils/helpers';

const CryptosTable: FC = () => {
  const { data, error, isLoading, status } = useCryptosStore(
    ({ data, error, isLoading, status }) => ({
      data,
      error,
      isLoading,
      status,
    }),
  );

  return (
    <ScrollArea
      type='hover'
      scrollbarSize={5}
      offsetScrollbars
      sx={{
        '& [data-radix-scroll-area-viewport]': {
          padding: 0,
        },
      }}
    >
      {data?.length === 0 && error ? (
        <ErrorPart {...error} />
      ) : (
        <Box
          sx={theme => ({
            [theme.fn.smallerThan('md')]: {
              width: `min(calc(100vw - 6rem), ${theme.breakpoints.md})`,
            },
          })}
        >
          <Table
            horizontalSpacing='xl'
            verticalSpacing='sm'
            fontSize='xs'
            sx={theme => ({
              backgroundColor: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
              }).hover,
              borderRadius: theme.radius.lg,
            })}
          >
            <thead>
              <Header />
            </thead>
            <tbody>
              {isLoading ? (
                <Placeholder />
              ) : status === 200 ? (
                data?.map(item => {
                  const id: string = randomId();
                  return <Item key={id} {...item} />;
                })
              ) : null}
            </tbody>
          </Table>
        </Box>
      )}
    </ScrollArea>
  );
};

export default CryptosTable;
