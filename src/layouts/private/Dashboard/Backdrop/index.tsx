import { Overlay } from '@mantine/core';
import { type FC } from 'react';

import { BackgroundOverlay, GradiantOverlay } from '@/components/Overlay';

const Backdrop: FC = () => {
  return (
    <Overlay fixed={true} zIndex={-500} bg='transparent'>
      <BackgroundOverlay />
      <GradiantOverlay />
    </Overlay>
  );
};

export default Backdrop;
