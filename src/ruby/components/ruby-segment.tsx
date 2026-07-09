import { View } from 'react-native';
import type { RubyItem } from '../types/types';
import { RubyAnnotation } from './ruby-annotation';
import { RubyBase } from './ruby-base';

export function RubySegment({ item }: { item: RubyItem }) {
  const { base, annotation } = item;

  return (
    <View style={{ alignItems: 'center' }}>
      <RubyAnnotation annotation={annotation} />
      <RubyBase base={base} />
    </View>
  );
}
