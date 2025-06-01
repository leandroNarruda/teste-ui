import type { SVGProps } from 'react'
const SvgCopySolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#copy-solido_svg__a)">
      <path d="M17.5 0c-2.758 0-5 2.242-5 5v17.5c0 2.758 2.242 5 5 5H35c2.758 0 5-2.242 5-5V5c0-2.758-2.242-5-5-5zM5 12.5c-2.758 0-5 2.242-5 5V35c0 2.758 2.242 5 5 5h17.5c2.758 0 5-2.242 5-5v-5h-5v5H5V17.5h5v-5z" />
    </g>
    <defs>
      <clipPath id="copy-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCopySolido
