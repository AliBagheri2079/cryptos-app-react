import { Flex, Group, Navbar, ScrollArea } from '@mantine/core';
import { type FC } from 'react';

import { LinkTab } from '@/components/Nav/Link';
import { navLinkData } from '@/data/navLink';
import { BASE_COL_HEIGHT } from '@/utils/constants/colHeight';
import { randomId } from '@/utils/helpers/randomId';

const BASE_HEIGHT = `calc(${BASE_COL_HEIGHT.SECOND} * 1.8)`;

const TabBar: FC = () => {
  return (
    <Navbar
      fixed={true}
      h={BASE_HEIGHT}
      sx={theme => ({
        border: 'unset',
        insetBlock: 'auto 0',
        maskImage: `linear-gradient(to bottom, transparent 0%, ${
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
        } 25%)`,
      })}
    >
      <Navbar.Section component={ScrollArea} grow>
        <Group h={BASE_HEIGHT} align='flex-end'>
          <Flex
            gap='xs'
            justify='flex-start'
            align='flex-end'
            direction='row'
            wrap='nowrap'
            sx={theme => ({
              backgroundColor: theme.fn.variant({
                variant: 'light',
                color: theme.primaryColor,
              }).background,
              borderRadius: theme.spacing.xs,
            })}
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
