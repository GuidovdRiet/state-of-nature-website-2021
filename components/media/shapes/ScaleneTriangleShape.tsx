import { motion, SVGMotionProps } from 'framer-motion';
import * as React from 'react';

function ScaleneTriangleShape(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg viewBox="0 0 93 71" {...props}>
      <path
        d="M43.761.672c16.114 20.373 31.472 39.175 46.063 58.55 5.539 7.349 3.99 10.215-5.54 10.463-18.45.48-36.923-.188-55.386-.126-7.113.024-14.224.903-21.34 1.088-7.235.19-9.061-2.347-5.08-8.5C13.06 45.795 24.25 29.831 35.173 13.696c2.593-3.83 5.097-7.72 8.588-13.024M10.555 62.558c6.624-.237 11.11-1.064 15.348-.394 6.362 1.007 9.652-1.716 12.501-6.897 4.553-8.279 9.835-16.165 14.414-24.43 1.025-1.852 1.43-5.273.384-6.78-2.75-3.97-6.455-7.282-9.708-10.781-10.754 16.089-21.276 31.83-32.939 49.282m31.852.749l42.33-1.518L61.101 31.89 42.407 63.307"
        fill="#FFA300"
        fillRule="evenodd"
      />
    </motion.svg>
  );
}

const MemoScaleneTriangleShape = React.memo(ScaleneTriangleShape);
export default MemoScaleneTriangleShape;
