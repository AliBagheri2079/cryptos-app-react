import { CheckIcon, ColorSwatch, px, useMantineTheme } from '@mantine/core';
import { type FC } from 'react';

import type { ThemeColor } from '@/types/utility';

type Props = {
  defaultColor: ThemeColor;
  mainColor: ThemeColor;
};

const ThemeButton: FC<Props> = ({ defaultColor, mainColor }) => {
  const theme = useMantineTheme();
  return (
    <ColorSwatch color={theme.colors[mainColor][6]} sx={{ color: '#fff' }}>
      {defaultColor === mainColor && <CheckIcon width={px(10)} />}
    </ColorSwatch>
  );
};

export default ThemeButton;
