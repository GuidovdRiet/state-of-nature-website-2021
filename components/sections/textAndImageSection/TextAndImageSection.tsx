import { FC } from 'react';

// Type
import TextAndImageSectionDataType from './textAndImage.type';

export interface TextAndImageSectionProps {
  data: TextAndImageSectionDataType;
}

const TextAndImageSection: FC<TextAndImageSectionProps> = ({ data }) => (
  <h1>TextAndImageSection</h1>
);

export default TextAndImageSection;
