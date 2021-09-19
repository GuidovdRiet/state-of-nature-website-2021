import React, { FC, useEffect } from 'react';
import { useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';

// Style
import * as S from './hero.style';

// Components
import ScaleneTriangleShape from '../media/shapes/ScaleneTriangleShape';
import SquareShape from '../media/shapes/SquareShape';
import TriangleShape from '../media/shapes/TriangleShape';
import IconButton from '../buttons/iconButton/IconButton';
import SectionWrapper from '../wrappers/sectionWrapper/SectionWrapper';
import ShortArrowDown from '../media/icons/arrows/ShortArrowDownIcon';

interface HeroProps {
  text: { value: string; marks: { type: 'bold' }[] }[];
}

const Hero: FC<HeroProps> = ({ text }) => {
  const router = useRouter();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      x.set(e.pageX / 400);
      y.set(e.pageY / 400);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [x, y]);

  return (
    <SectionWrapper>
      <S.Hero>
        <ScaleneTriangleShape
          className="hero__shape hero__shape--scalene-triangle-right"
          style={{ x, y, rotate: 45 }}
        />
        <SquareShape
          className="hero__shape hero__shape--square"
          style={{ x, y, rotate: 25 }}
        />
        <TriangleShape
          className="hero__shape hero__shape--triangle"
          style={{ x, y, rotate: -35 }}
        />
        <ScaleneTriangleShape
          className="hero__shape hero__shape--scalene-triangle-left"
          style={{ x, y, rotate: 25 }}
        />
        <h1 className="hero__text">
          {text.map(({ value, marks }, id) => {
            const [isBold] = marks.map((mark) => mark?.type === 'bold');
            return isBold ? <span key={id}>{value}</span> : value;
          })}
        </h1>
        <IconButton
          variant="primaryGreen"
          size="large"
          onClick={() => router.push('#event-highlight-section')}
          icon={<ShortArrowDown />}
        />
      </S.Hero>
    </SectionWrapper>
  );
};

export default Hero;
