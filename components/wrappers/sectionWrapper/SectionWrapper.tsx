import React, { FC, ReactNode } from "react";

// Style
import * as S from "./sectionWrapper.style";

interface SectionWrapperProps {
  children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children }) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default SectionWrapper;
