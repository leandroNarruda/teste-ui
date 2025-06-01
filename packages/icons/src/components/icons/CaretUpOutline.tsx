import type { SVGProps } from 'react'
const SvgCaretUpOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 16"
    {...props}
  >
    <g clipPath="url(#caret-up-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M5 5.706 2.206 8.5h5.585zm-.706-1.415c.39-.391 1.025-.391 1.415 0l4 4a1 1 0 0 1 .216 1.09A1 1 0 0 1 9 10H1a1.004 1.004 0 0 1-.71-1.71l4-4z"
      />
    </g>
    <defs>
      <clipPath id="caret-up-outline_svg__a">
        <path fill="#fff" d="M0 0h10v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCaretUpOutline
