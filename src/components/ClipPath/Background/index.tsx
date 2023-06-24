import { Overlay, useMantineTheme } from '@mantine/core';
import { type FC } from 'react';

import { useClipPathBgStyles } from './index.style';

const ClipPathBackground: FC = () => {
  const theme = useMantineTheme();
  const { classes, cx } = useClipPathBgStyles();

  return (
    <Overlay
      fixed={true}
      zIndex={-100}
      color='#000'
      opacity={0.5}
      className={cx(classes.overlay, {
        [classes.overlayLightActive]: theme.colorScheme === 'light',
        [classes.overlayDarkActive]: theme.colorScheme === 'dark',
      })}
    />
  );
};

export default ClipPathBackground;
