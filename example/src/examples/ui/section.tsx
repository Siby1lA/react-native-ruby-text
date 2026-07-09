import type { ReactNode } from 'react';
import { Text, View } from 'react-native';

function SectionContainer({ children }: { children: ReactNode }) {
  return <View style={{ gap: 10 }}>{children}</View>;
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Text style={{ fontSize: 18, fontWeight: '700', color: '#333' }}>
      {children}
    </Text>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Text
      style={{ fontSize: 12, fontWeight: '500', color: '#666', marginTop: 4 }}
    >
      {children}
    </Text>
  );
}

const Section = {
  Container: SectionContainer,
  Title: SectionTitle,
  Label: SectionLabel,
};

export { Section };
