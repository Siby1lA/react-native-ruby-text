import { createContext, useContext } from 'react';
import type { TextStyle } from 'react-native';

const RubyContext = createContext<{
  baseStyle?: TextStyle;
  annotationStyle?: TextStyle;
  annotationHidden: boolean;
}>({
  annotationHidden: false,
});

export function RubyContextProvider({
  children,
  baseStyle,
  annotationStyle,
  annotationHidden = false,
}: {
  children: React.ReactNode;
  baseStyle?: TextStyle;
  annotationStyle?: TextStyle;
  annotationHidden?: boolean;
}) {
  return (
    <RubyContext.Provider
      value={{ baseStyle, annotationStyle, annotationHidden }}
    >
      {children}
    </RubyContext.Provider>
  );
}

export function useRubyContext() {
  return useContext(RubyContext);
}
