import { Overlay, useMantineTheme } from '@mantine/core';
import { type FC } from 'react';

import { useBackgroundOverlayStyles } from './index.style';

const BackgroundOverlay: FC = () => {
  const theme = useMantineTheme();
  const { classes, cx } = useBackgroundOverlayStyles();

  return (
    <Overlay
      fixed={true}
      zIndex={-100}
      opacity={0.5}
      className={cx(classes.bgOverlay, {
        [classes.lightBgOverlay]: theme.colorScheme === 'light',
        [classes.darkBgOverlay]: theme.colorScheme === 'dark',
      })}
    />
  );
};

export default BackgroundOverlay;
