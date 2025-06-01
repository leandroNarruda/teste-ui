import type { SVGProps } from 'react'
const SvgSquareCodeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#square-code-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="m25.723 12.768 5.715 5.714c.91.84.91 2.197 0 2.956l-5.715 5.714c-.759.91-2.116.91-2.955 0-.83-.76-.83-2.116 0-2.956L26.973 20l-4.205-4.277c-.83-.759-.83-2.116 0-2.955.84-.83 2.196-.83 2.955 0M13.027 20l4.125 4.196c.91.84.91 2.197 0 2.956-.76.91-2.116.91-2.956 0l-5.711-5.715c-.837-.758-.837-2.116 0-2.955l5.711-5.714c.84-.83 2.197-.83 2.956 0 .91.84.91 2.196 0 2.955zM34.286 0A5.717 5.717 0 0 1 40 5.714v28.572A5.72 5.72 0 0 1 34.286 40H5.714A5.717 5.717 0 0 1 0 34.286V5.714A5.714 5.714 0 0 1 5.714 0zm0 4.286H5.714c-.789 0-1.428.639-1.428 1.428v28.572c0 .785.639 1.428 1.428 1.428h28.572c.785 0 1.428-.643 1.428-1.428V5.714a1.43 1.43 0 0 0-1.428-1.428"
      />
    </g>
    <defs>
      <clipPath id="square-code-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSquareCodeOutline
