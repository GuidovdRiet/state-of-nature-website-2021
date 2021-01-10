import * as React from 'react';

function LongArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 21" {...props}>
      <path
        d="M24 10.5H2m22 0L15.444 19m0-17L24 10.5"
        stroke="#FFF"
        strokeWidth={2.4}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoLongArrowRightIcon = React.memo(LongArrowRightIcon);
export default MemoLongArrowRightIcon;
