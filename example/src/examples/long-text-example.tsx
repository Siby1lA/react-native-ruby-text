import { Section } from './ui/section';
import { Ruby } from 'react-native-ruby-text';

export function LongTextExample() {
  return (
    <Section.Container>
      <Section.Title>Long text</Section.Title>
      <Ruby
        data={[
          { base: '渋谷', annotation: 'しぶや' },
          { base: '駅前', annotation: 'えきまえ' },
          { base: 'の' },
          { base: 'スクランブル' },
          { base: '交差点', annotation: 'こうさてん' },
          { base: 'は' },
          { base: '、' },
          { base: '世界', annotation: 'せかい' },
          { base: 'で' },
          { base: '最', annotation: 'もっと' },
          { base: 'も' },
          { base: '有名', annotation: 'ゆうめい' },
          { base: 'な' },
          { base: '交差点', annotation: 'こうさてん' },
          { base: 'の' },
          { base: '一', annotation: 'ひと' },
          { base: 'つ' },
          { base: 'です' },
          { base: '。' },
          { base: '信号', annotation: 'しんごう' },
          { base: 'が' },
          { base: '変', annotation: 'か' },
          { base: 'わる' },
          { base: 'と' },
          { base: '、' },
          { base: '一度', annotation: 'いちど' },
          { base: 'に' },
          { base: '約', annotation: 'やく' },
          { base: '三千人', annotation: 'さんぜんにん' },
          { base: 'が' },
          { base: '渡', annotation: 'わた' },
          { base: 'る' },
          { base: 'と' },
          { base: '言', annotation: 'い' },
          { base: 'われて' },
          { base: 'います' },
          { base: '。' },
          { base: '観光客', annotation: 'かんこうきゃく' },
          { base: 'に' },
          { base: 'も' },
          { base: '大変', annotation: 'たいへん' },
          { base: '人気', annotation: 'にんき' },
          { base: 'の' },
          { base: 'ある' },
          { base: '場所', annotation: 'ばしょ' },
          { base: 'です' },
          { base: '。' },
        ]}
      />
    </Section.Container>
  );
}
