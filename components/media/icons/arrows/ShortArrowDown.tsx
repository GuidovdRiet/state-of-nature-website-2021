import * as React from 'react';

function ShortArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27 27" {...props}>
      <g stroke="#FFF" strokeWidth={3.475} fill="none" fillRule="evenodd">
        <path d="M1.958 14.222l11.563 10.22 11.562-10.22" />
        <path strokeLinecap="square" d="M13.711 22.908V2.47" />
      </g>
    </svg>
  );
}

const MemoShortArrowDown = React.memo(ShortArrowDown);
export default MemoShortArrowDown;
