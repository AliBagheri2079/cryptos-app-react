import {
  Group,
  Navbar,
  ScrollArea,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconLogout } from '@tabler/icons-react';
import { type FC } from 'react';

import { BrandLogo, BrandTitle } from '@/components/Brand';
import { LinkGroup, LinkMinimal } from '@/components/Nav/Link';
import { navLinkData } from '@/data/navLinkData';
import { randomId } from '@/utils/helpers/randomId';

const Sidebar: FC = () => {
  const theme = useMantineTheme();
  const laptopSizeMatches = useMediaQuery(
    `(min-width: ${theme.breakpoints.lg})`,
  );

  return (
    <Navbar
      fixed={true}
      width={{
        sm: 'max(16vw, 5rem)',
      }}
      sx={theme => ({
        height: 'unset',
        border: 'unset',
        background: 'transparent',

        insetBlock: theme.spacing.xl,
        insetInline: `${theme.spacing.md} auto`,
      })}
    >
      <Navbar.Section
        sx={theme => ({
          paddingBottom: theme.spacing.sm,
          marginBottom: `calc(${theme.spacing.sm} * 1.5)`,
        })}
      >
        <Group position='left'>
          <BrandLogo />

          {laptopSizeMatches && <BrandTitle />}
        </Group>
      </Navbar.Section>

      <Navbar.Section
        component={ScrollArea}
        style={{
          position: 'static',
        }}
        py='xs'
        grow
      >
        <Stack>
          {navLinkData.map(items =>
            laptopSizeMatches ? (
              <LinkGroup key={randomId()} {...items} />
            ) : (
              <LinkMinimal key={randomId()} {...items} />
            ),
          )}
        </Stack>
      </Navbar.Section>

      <Navbar.Section>
        <Stack>
          {laptopSizeMatches ? (
            <LinkGroup label='Logout' icon={IconLogout} link='/' />
          ) : (
            <LinkMinimal label='Logout' icon={IconLogout} link='/' />
          )}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
