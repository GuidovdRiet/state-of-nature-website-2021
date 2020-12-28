import { FC, ReactNode } from 'react';
import { IconButton } from '../buttons/iconButton/iconButton.style';
import SectionWrapper from '../wrappers/sectionWrapper/SectionWrapper';

// Components
import ShortArrowDown from '../media/icons/arrows/ShortArrowDown';

// Style
import * as S from './hero.style';

interface HeroProps {
  text: { value: string; marks: { type: 'bold' }[] }[];
}

const Hero: FC<HeroProps> = ({ text }) => (
  <SectionWrapper>
    <S.Hero>
      <h1 className="hero__text">{text.map(({ value, marks }) => value)}</h1>
      <IconButton icon={<ShortArrowDown />} />
    </S.Hero>
  </SectionWrapper>
);

export default Hero;
