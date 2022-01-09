import { useEffect, useState } from 'react';
/**
 * The returned width can be used to make components responsive
 */
const useViewport = (): { width: number } => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return { width };
};

export default useViewport;
