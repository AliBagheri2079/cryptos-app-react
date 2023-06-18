import {
  Flex,
  Group,
  Navbar,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { type FC } from 'react';

import { LinkTab } from '@/components/Nav/Link';
import { navLinkData } from '@/data/navLinkData';
import { BASE_COL_HEIGHT } from '@/utils/constants/col-height';
import { randomId } from '@/utils/helpers/random-id';

const BASE_HEIGHT = `calc(${BASE_COL_HEIGHT.SECOND} * 1.8)`;

const TabBar: FC = () => {
  const theme = useMantineTheme();

  return (
    <Navbar
      fixed={true}
      h={BASE_HEIGHT}
      w='auto'
      sx={{
        border: 'unset',
        insetInline: theme.spacing.xs,
      }}
    >
      <Navbar.Section component={ScrollArea} grow>
        <Group h={BASE_HEIGHT} align='flex-end'>
          <Flex
            gap='xs'
            justify='flex-start'
            align='flex-end'
            direction='row'
            wrap='nowrap'
            sx={{
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[5]
                  : theme.colors.gray[2],
              borderRadius: theme.spacing.xs,
            }}
          >
            {navLinkData.map(items => (
              <LinkTab key={randomId()} {...items} />
            ))}
          </Flex>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};

export default TabBar;
