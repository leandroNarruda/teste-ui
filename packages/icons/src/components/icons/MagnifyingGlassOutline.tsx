import type { SVGProps } from 'react'
const SvgMagnifyingGlassOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 41 41"
    {...props}
  >
    <g clipPath="url(#magnifying-glass-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M28.75 16.974a12.5 12.5 0 1 0-25 0 12.5 12.5 0 0 0 25 0m-2.414 12.742a16.17 16.17 0 0 1-10.086 3.508C7.273 33.224 0 25.951 0 16.974S7.273.724 16.25.724 32.5 7.998 32.5 16.974c0 3.813-1.312 7.32-3.508 10.086l10.461 10.461a1.867 1.867 0 0 1 0 2.648 1.874 1.874 0 0 1-2.648 0z"
      />
    </g>
    <defs>
      <clipPath id="magnifying-glass-outline_svg__a">
        <path fill="#fff" d="M0 .724h40.004v39.993H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMagnifyingGlassOutline
