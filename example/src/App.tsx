import { BasicExample } from './examples/basic-example';
import { CustomStyleExample } from './examples/custom-style-example';
import { HiddenAnnotationExample } from './examples/hidden-annotation-example';
import { LongTextExample } from './examples/long-text-example';
import { Divider } from './examples/ui/divider';
import { Separated } from './examples/ui/separated';
import { ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={{ padding: 16, gap: 20 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Separated separator={<Divider />}>
        <BasicExample />
        <LongTextExample />
        <HiddenAnnotationExample />
        <CustomStyleExample />
      </Separated>
    </ScrollView>
  );
}
