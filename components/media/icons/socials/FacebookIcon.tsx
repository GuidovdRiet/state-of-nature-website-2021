import * as React from 'react';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 31" {...props}>
      <path
        d="M15.379 5.087V.216C14.896.149 13.237 0 11.304 0 7.271 0 4.509 2.536 4.509 7.198v4.29H.06v5.446h4.45v13.702h5.456v-13.7h4.27l.678-5.446h-4.95V7.738c.002-1.574.426-2.651 2.619-2.651h2.797z"
        fill="#6B6B6B"
        fillRule="nonzero"
      />
    </svg>
  );
}

const MemoFacebookIcon = React.memo(FacebookIcon);
export default MemoFacebookIcon;
