import type { SVGProps } from 'react'
const SvgNotAnswer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g clipPath="url(#not-answer_svg__a)">
      <path
        fill="#8C8895"
        d="M8 16A8 8 0 1 0 8-.001 8 8 0 0 0 8 16M5.75 7.25h4.5c.416 0 .75.334.75.75s-.334.75-.75.75h-4.5A.75.75 0 0 1 5 8c0-.416.334-.75.75-.75"
      />
    </g>
    <defs>
      <clipPath id="not-answer_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgNotAnswer
