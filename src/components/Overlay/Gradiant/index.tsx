import { Overlay } from '@mantine/core';
import { type FC } from 'react';

import { useStyles } from './index.style';

const GradiantOverlay: FC = () => {
  const { classes, cx } = useStyles();

  return (
    <>
      <Overlay
        right='-10%'
        className={cx(classes.gradiantOverlayBase, classes.gradiantOverlay)}
        sx={{
          transform: 'rotate(120deg)',
        }}
      />
      <Overlay
        left='20%'
        className={cx(classes.gradiantOverlayBase, classes.gradiantOverlay)}
        sx={{
          transform: 'rotate(75deg)',
        }}
      />
    </>
  );
};

export default GradiantOverlay;
