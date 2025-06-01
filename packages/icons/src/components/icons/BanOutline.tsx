import type { SVGProps } from 'react'
const SvgBanOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#ban-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M30.086 32.742 7.258 9.914A16.17 16.17 0 0 0 3.75 20c0 8.977 7.273 16.25 16.25 16.25 3.813 0 7.32-1.312 10.086-3.508m2.648-2.648A16.17 16.17 0 0 0 36.25 20c0-8.977-7.273-16.25-16.25-16.25-3.812 0-7.32 1.313-10.086 3.508l22.828 22.828zM0 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0"
      />
    </g>
    <defs>
      <clipPath id="ban-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgBanOutline
