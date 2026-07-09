import type { TextStyle, ViewStyle } from 'react-native';
import { View } from 'react-native';
import type { RubyItem } from '../types/types';
import { RubyContextProvider } from './ruby-context';
import { RubySegment } from './ruby-segment';

export function Ruby({
  data,
  baseStyle,
  annotationStyle,
  annotationHidden = false,
  style,
}: {
  data: RubyItem[];
  baseStyle?: TextStyle;
  annotationStyle?: TextStyle;
  annotationHidden?: boolean;
  style?: ViewStyle;
}) {
  return (
    <RubyContextProvider
      baseStyle={baseStyle}
      annotationStyle={annotationStyle}
      annotationHidden={annotationHidden}
    >
      <View
        style={[
          { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-end' },
          style,
        ]}
      >
        {data.map((item, index) => (
          <RubySegment key={`${item.base}-${index}`} item={item} />
        ))}
      </View>
    </RubyContextProvider>
  );
}
