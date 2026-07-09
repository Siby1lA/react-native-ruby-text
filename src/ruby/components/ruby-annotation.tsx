import { DEFAULT_ANNOTATION_FONT_SIZE } from '../constants/constants';
import { resolveFontStyle } from '../utils/resolve-font-style';
import { useRubyContext } from './ruby-context';
import { RubyText } from './ruby-text';

export function RubyAnnotation({ annotation = ' ' }: { annotation?: string }) {
  const { annotationStyle, annotationHidden } = useRubyContext();
  const { fontSize, lineHeight } = resolveFontStyle({
    style: annotationStyle,
    defaultFontSize: DEFAULT_ANNOTATION_FONT_SIZE,
  });

  return (
    <RubyText
      style={[
        { color: '#666', textAlign: 'center' },
        { fontSize, lineHeight },
        annotationStyle,
        annotationHidden && { opacity: 0 },
      ]}
    >
      {annotation}
    </RubyText>
  );
}
