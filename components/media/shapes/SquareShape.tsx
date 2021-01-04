import { motion, SVGMotionProps } from 'framer-motion';
import * as React from 'react';

function SquareShape(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg viewBox="0 0 69 65" {...props}>
      <path
        d="M66.642 15.119c-.94 14.043-2.066 28.076-2.738 42.134-.288 6.042-2.5 7.768-8.618 7.564-15.985-.527-32.001-.339-47.991.056-4.01.099-5.7-1.357-6.275-4.757-.429-2.529-.605-5.171-.408-7.724 1.169-15.203 2.636-30.385 3.654-45.6C4.633 1.332 7.381.293 12.043.51c14.829.687 29.665 1.31 44.503 1.657 12.911.305 12.953.168 10.096 12.952m-6.454-4.608c-6.492.16-12.911.509-19.327.402-3.718-.06-4.795 1.547-4.936 5.002-.396 9.617-.74 19.254-1.65 28.827-1.285 13.474-1.496 13.463 11.537 13.062 3.45-.107 6.896-.3 11.24-.496l3.136-46.797M26.16 55.687c1-14.907 2.006-29.915 3.03-45.211L10.056 9.082c-.71 10.577-1.12 20.825-2.14 31.01C6.06 58.698 7.034 59.67 26.16 55.687"
        fill="#FFA300"
        fillRule="evenodd"
      />
    </motion.svg>
  );
}

const MemoSquareShape = React.memo(SquareShape);
export default MemoSquareShape;