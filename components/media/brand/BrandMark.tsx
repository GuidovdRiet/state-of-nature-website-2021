import * as React from 'react';

function BrandMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 400" width="1em" height="1em" {...props}>
      <path d="M244.6 183.4c-5.2-18.3-20.9-31-42.6-31-28.4 0-46.3 21.3-46.3 47.8s17.9 47.4 46.3 47.4c22 0 37.7-13.1 43-31.4h56c-6.7 47.4-44.8 83.7-99 83.7-62.4 0-103.1-44.8-103.1-100.1 0-54.9 40.7-99.7 103.1-99.7 54.2 0 92.3 36.2 99 83.3h-56.4z" />
      <path d="M174.1 348.3H51.7V51.7h122.4V0H0v400h174.1zM225.9 0v51.7h122.4v296.6H225.9V400H400V0z" />
    </svg>
  );
}

const MemoBrandMark = React.memo(BrandMark);
export default MemoBrandMark;
