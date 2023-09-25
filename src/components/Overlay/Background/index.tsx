import { Overlay, useMantineTheme } from '@mantine/core';
import { type FC } from 'react';

import { useStyles } from './index.style';

const BackgroundOverlay: FC = () => {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();

  return (
    <Overlay
      opacity={0.5}
      className={cx(classes.bgOverlay, {
        [classes.darkOverlay]: theme.colorScheme === 'dark',
      })}
    />
  );
};

export default BackgroundOverlay;
