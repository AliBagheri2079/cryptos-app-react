import { Container, Grid, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { type FC, type ReactNode } from 'react';

import Header from '../Header';
import Sidebar from '../Sidebar';
import TabBar from '../TabBar';
import { BackgroundOverlay, GradiantOverlay } from '@/components/Overlay';
import { BASE_COL_HEIGHT } from '@/utils/constants/colHeight';

type Props = {
  children: ReactNode;
};

const Dashboard: FC<Props> = ({ children }) => {
  const theme = useMantineTheme();

  // TODO: Create many utils size matches
  const mobileSizeMatches = useMediaQuery(
    `(max-width: ${theme.breakpoints.sm})`,
  );

  const Layout = (
    <Container
      fluid
      p={{
        base: 'xs',
      }}
      px={{
        sm: 'md',
      }}
      py={{
        sm: 'xl',
      }}
    >
      <Grid grow justify='space-between'>
        <Grid.Col sm='auto' mih={BASE_COL_HEIGHT.FOURTH} order={2} orderSm={1}>
          {mobileSizeMatches ? <TabBar /> : <Sidebar />}
        </Grid.Col>

        <Grid.Col sm={8} order={1} orderSm={2}>
          <Grid grow gutter='md' gutterLg='xl'>
            <Grid.Col span={12} mih={BASE_COL_HEIGHT.FIRST}>
              <Header />
            </Grid.Col>

            <Grid.Col span='auto' mih={BASE_COL_HEIGHT.SECOND}>
              <main>{children}</main>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );

  return (
    <>
      <BackgroundOverlay />
      <GradiantOverlay />
      {Layout}
    </>
  );
};

export default Dashboard;
