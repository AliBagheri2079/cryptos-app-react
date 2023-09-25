import { Container, Grid } from '@mantine/core';
import { type FC, type ReactNode } from 'react';

import Accessbar from './Accessbar';
import Backdrop from './Backdrop';
import Sidebar from './Sidebar';
import Tabbar from './Tabbar';
import { HEIGHT_SIZE } from '@/utils/constants';

type Props = {
  children: ReactNode;
};

const Dashboard: FC<Props> = ({ children }) => {
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
        <Grid.Col
          sm='auto'
          lg={2}
          mih={HEIGHT_SIZE.FOURTH}
          maw='100%'
          display={{
            base: 'none',
            sm: 'flex',
          }}
        >
          <Sidebar />
        </Grid.Col>

        <Grid.Col sm={10} maw='100%'>
          <Grid grow gutter='md' gutterLg='xl'>
            <Grid.Col span={12} mih={HEIGHT_SIZE.FIRST} maw='100%'>
              <Accessbar />
            </Grid.Col>

            <Grid.Col span={12} mih={HEIGHT_SIZE.SECOND} maw='100%'>
              <main>{children}</main>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col
          mih={HEIGHT_SIZE.FOURTH}
          maw='100%'
          display={{
            sm: 'none',
          }}
        >
          <Tabbar />
        </Grid.Col>
      </Grid>
    </Container>
  );

  return (
    <>
      <Backdrop />
      {Layout}
    </>
  );
};

export default Dashboard;
