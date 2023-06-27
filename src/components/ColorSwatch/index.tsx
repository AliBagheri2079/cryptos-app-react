import {
  CheckIcon,
  ColorSwatch,
  type DefaultMantineColor,
  px,
  useMantineTheme,
} from '@mantine/core';
import { type FC } from 'react';

type ColorSwatchComponentProps = {
  defaultColor: DefaultMantineColor;
  mainColor: DefaultMantineColor;
};

const ColorSwatchComponent: FC<ColorSwatchComponentProps> = ({
  defaultColor,
  mainColor,
}) => {
  const theme = useMantineTheme();

  return (
    <ColorSwatch color={theme.colors[mainColor][6]} sx={{ color: '#fff' }}>
      {defaultColor === mainColor && <CheckIcon width={px(10)} />}
    </ColorSwatch>
  );
};

export default ColorSwatchComponent;
