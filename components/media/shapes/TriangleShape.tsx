import { motion, SVGMotionProps } from 'framer-motion';
import * as React from 'react';

function TriangleShape(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg viewBox="0 0 82 64" {...props}>
      <path
        d="M47.332 63.287c-12.447-.393-24.907-.576-37.337-1.328-3.046-.184-7.134-1.448-8.63-3.656-1.15-1.693.23-6.217 1.843-8.506C14.28 34.074 25.735 18.63 37.008 3.052c3.478-4.808 6.796-1.867 8.832.893 6.337 8.592 12.188 17.551 18.09 26.458a842.532 842.532 0 0114.71 22.96c1.225 1.984 1.732 4.408 2.568 6.63-2.217.676-4.41 1.852-6.656 1.943-9.062.367-18.14.4-27.213.558l-.007.793m-10.459-9.214c.282-13.241.542-25.37.831-38.847C26.443 27.17 16.61 38.29 11.846 53.284l25.027.79m33.404-.625C60.36 41.183 57.414 26.073 45.689 13.676l-.876 41.006 25.464-1.233"
        fill="#FFA300"
        fillRule="evenodd"
      />
    </motion.svg>
  );
}

const MemoTriangleShape = React.memo(TriangleShape);
export default MemoTriangleShape;
