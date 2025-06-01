import type { SVGProps } from 'react'
const SvgMessagePenSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#message-pen-solido_svg__a)">
      <path d="M0 5c0-2.758 2.242-5 5-5h30c2.758 0 5 2.242 5 5v22.5c0 2.758-2.242 5-5 5H24.164L14.5 39.75a1.26 1.26 0 0 1-1.312.117 1.23 1.23 0 0 1-.688-1.117V32.5H5c-2.758 0-5-2.242-5-5zm26.625 4.61a2.947 2.947 0 0 0-4.164 0l-1.164 1.171 4.164 4.164 1.164-1.164a2.947 2.947 0 0 0 0-4.164zm-12.71 8.554c-.321.32-.548.719-.657 1.164l-.719 2.86c-.11.43.016.875.328 1.187.313.313.758.438 1.188.328l2.86-.719c.437-.109.843-.336 1.163-.656l5.617-5.617-4.164-4.164z" />
    </g>
    <defs>
      <clipPath id="message-pen-solido_svg__a">
        <path d="M0 0h40v39.998H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMessagePenSolido
