import type { SVGProps } from 'react'
const SvgBookmarkOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 40"
    {...props}
  >
    <g clipPath="url(#bookmark-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M26.25 0H3.75A3.75 3.75 0 0 0 0 3.75v33.742c0 1.93 2.093 3.131 3.76 2.16L15 33.094l11.242 6.557c1.664.904 3.758-.23 3.758-2.159V3.75A3.75 3.75 0 0 0 26.25 0m0 35.313L15 28.75 3.75 35.313V4.218c0-.264.205-.469.398-.469h21.563c.336 0 .539.205.539.469z"
      />
    </g>
    <defs>
      <clipPath id="bookmark-outline_svg__a">
        <path fill="#fff" d="M0 0h30v39.996H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgBookmarkOutline
