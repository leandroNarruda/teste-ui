import type { SVGProps } from 'react'
const SvgSquarePlusOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#square-plus-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M17.857 27.857v-5.714h-5.714A2.14 2.14 0 0 1 10 20c0-1.187.955-2.143 2.143-2.143h5.714v-5.714c0-1.188.956-2.143 2.143-2.143 1.188 0 2.143.955 2.143 2.143v5.714h5.714c1.188 0 2.143.956 2.143 2.143a2.14 2.14 0 0 1-2.143 2.143h-5.714v5.714A2.14 2.14 0 0 1 20 30a2.14 2.14 0 0 1-2.143-2.143M0 5.714A5.714 5.714 0 0 1 5.714 0h28.572A5.717 5.717 0 0 1 40 5.714v28.572A5.72 5.72 0 0 1 34.286 40H5.714A5.717 5.717 0 0 1 0 34.286zm4.286 0v28.572c0 .785.639 1.428 1.428 1.428h28.572c.785 0 1.428-.643 1.428-1.428V5.714a1.43 1.43 0 0 0-1.428-1.428H5.714c-.789 0-1.428.639-1.428 1.428"
      />
    </g>
    <defs>
      <clipPath id="square-plus-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSquarePlusOutline
