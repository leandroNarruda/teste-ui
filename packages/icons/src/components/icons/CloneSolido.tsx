import type { SVGProps } from 'react'
const SvgCloneSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#clone-solido_svg__a)">
      <path d="M0 35c0 2.758 2.242 5 5 5h17.5c2.758 0 5-2.242 5-5v-5h-10c-4.14 0-7.5-3.36-7.5-7.5v-10H5c-2.758 0-5 2.242-5 5zm17.5-7.5H35c2.758 0 5-2.242 5-5V5c0-2.758-2.242-5-5-5H17.5c-2.758 0-5 2.242-5 5v17.5c0 2.758 2.242 5 5 5" />
    </g>
    <defs>
      <clipPath id="clone-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCloneSolido
