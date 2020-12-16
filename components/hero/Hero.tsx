import { FC, ReactNode } from "react";
import SectionWrapper from "../wrappers/sectionWrapper/SectionWrapper";

interface HeroProps {
  children: ReactNode;
}

const Hero: FC<HeroProps> = ({ children }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default Hero;
