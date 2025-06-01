import type { SVGProps } from 'react'
const SvgSendSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#send-solido_svg__a)">
      <path d="M5.4 3.356C2.166 1.931-1.06 5.381.572 8.522l5.906 11.362a2.71 2.71 0 0 0 2.063 1.435l16.396 2.053c.32.037.563.31.563.628 0 .319-.244.59-.563.628L8.541 26.681a2.71 2.71 0 0 0-2.063 1.435L.572 39.478c-1.631 3.14 1.594 6.581 4.837 5.166l40.8-17.897c2.39-1.05 2.39-4.444 0-5.494z" />
    </g>
    <defs>
      <clipPath id="send-solido_svg__a">
        <path d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSendSolido
