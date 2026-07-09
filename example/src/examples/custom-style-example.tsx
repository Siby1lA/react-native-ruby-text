import { Section } from './ui/section';
import { Ruby } from 'react-native-ruby-text';

export function CustomStyleExample() {
  return (
    <Section.Container>
      <Section.Title>Custom style</Section.Title>
      <Ruby
        data={[
          { base: 'こんにちは、' },
          { base: '世界', annotation: 'せかい' },
          { base: '！' },
        ]}
        baseStyle={{ fontSize: 32, color: 'green' }}
        annotationStyle={{ fontSize: 14, color: 'red' }}
      />
    </Section.Container>
  );
}
