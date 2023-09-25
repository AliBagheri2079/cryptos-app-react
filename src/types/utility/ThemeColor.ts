import type { DefaultMantineColor } from '@mantine/core';

type ThemeColor = DefaultMantineColor;

type ChangeThemeColor = (value?: ThemeColor) => void;

export type { ThemeColor, ChangeThemeColor };
