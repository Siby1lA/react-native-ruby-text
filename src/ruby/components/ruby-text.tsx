import { Text, type TextProps } from 'react-native';

export function RubyText({ style, ...props }: TextProps) {
  return (
    <Text
      allowFontScaling={false}
      style={[{ textAlignVertical: 'center' }, style]}
      {...props}
    />
  );
}
