import { DEFAULT_BASE_FONT_SIZE } from '../constants/constants';
import { resolveFontStyle } from '../utils/resolve-font-style';
import { useRubyContext } from './ruby-context';
import { RubyText } from './ruby-text';

export function RubyBase({ base }: { base: string }) {
  const { baseStyle } = useRubyContext();
  const { fontSize, lineHeight } = resolveFontStyle({
    style: baseStyle,
    defaultFontSize: DEFAULT_BASE_FONT_SIZE,
  });

  return (
    <RubyText style={[{ fontSize, lineHeight }, baseStyle]}>{base}</RubyText>
  );
}
