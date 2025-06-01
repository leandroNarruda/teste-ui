import type { SVGProps } from 'react'
const SvgBookmarkSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 30 40"
    {...props}
  >
    <g clipPath="url(#bookmark-solido_svg__a)">
      <path d="M0 3.75v34.352a1.9 1.9 0 0 0 2.992 1.554L15 31.25l12.008 8.406A1.9 1.9 0 0 0 30 38.101V3.75C30 1.68 28.32 0 26.25 0H3.75C1.68 0 0 1.68 0 3.75" />
    </g>
    <defs>
      <clipPath id="bookmark-solido_svg__a">
        <path d="M0 0h30v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgBookmarkSolido
