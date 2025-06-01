import type { SVGProps } from 'react'
const SvgAsteriskOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#asterisk-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M20 .724c1.187 0 2.143.956 2.143 2.143v14.009l11.732-7.259a2.133 2.133 0 0 1 2.946.696c.616 1.01.313 2.33-.696 2.947L24.07 20.724l12.054 7.465a2.137 2.137 0 0 1 .696 2.946 2.153 2.153 0 0 1-2.946.696l-11.732-7.258V38.58A2.14 2.14 0 0 1 20 40.724a2.14 2.14 0 0 1-2.143-2.143V24.572l-11.732 7.26a2.133 2.133 0 0 1-2.946-.697c-.617-1.009-.313-2.33.696-2.947l12.054-7.464L3.874 13.26a2.137 2.137 0 0 1-.696-2.947c.625-1 1.946-1.32 2.946-.696l11.732 7.259V2.867c0-1.187.955-2.143 2.143-2.143"
      />
    </g>
    <defs>
      <clipPath id="asterisk-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgAsteriskOutline
