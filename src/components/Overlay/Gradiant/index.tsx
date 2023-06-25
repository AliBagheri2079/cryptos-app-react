import { Overlay } from '@mantine/core';
import { type FC } from 'react';

import { useGradiantOverlayStyles } from './index.style';

const GradiantOverlay: FC = () => {
  const { classes, cx } = useGradiantOverlayStyles();

  return (
    <>
      <Overlay
        right='-20%'
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
