import type { TextStyle } from 'react-native';
import { DEFAULT_LINE_HEIGHT_RATIO } from '../constants/constants';

export function resolveFontStyle({
  style,
  defaultFontSize,
}: {
  style: TextStyle | undefined;
  defaultFontSize: number;
}) {
  const fontSize = style?.fontSize ?? defaultFontSize;
  const lineHeight = style?.lineHeight ?? fontSize * DEFAULT_LINE_HEIGHT_RATIO;

  return { fontSize, lineHeight };
}
