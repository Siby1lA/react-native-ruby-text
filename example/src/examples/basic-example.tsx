import { Section } from './ui/section';
import { Ruby } from 'react-native-ruby-text';

export function BasicExample() {
  return (
    <Section.Container>
      <Section.Title>Basic</Section.Title>
      <Ruby
        data={[
          { base: 'こんにちは' },
          { base: '、' },
          { base: '世界', annotation: 'せかい' },
          { base: '！' },
        ]}
      />
    </Section.Container>
  );
}
