import { Section } from './ui/section';
import { Ruby } from 'react-native-ruby-text';

export function HiddenAnnotationExample() {
  return (
    <Section.Container>
      <Section.Title>Hidden annotation</Section.Title>
      <Ruby
        annotationHidden
        data={[
          { base: 'こんにちは、' },
          { base: '世界', annotation: 'せかい' },
          { base: '！' },
        ]}
      />
    </Section.Container>
  );
}
