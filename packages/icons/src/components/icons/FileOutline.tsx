import type { SVGProps } from 'react'
const SvgFileOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 36 48"
    {...props}
  >
    <g clipPath="url(#file-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M30 43.5c.825 0 1.5-.675 1.5-1.5V15H24c-1.66 0-3-1.34-3-3V4.5H6c-.825 0-1.5.675-1.5 1.5v36c0 .825.675 1.5 1.5 1.5zM0 6c0-3.31 2.69-6 6-6h15.516c1.593 0 3.122.628 4.247 1.753l8.484 8.485A6 6 0 0 1 36 14.484V42c0 3.31-2.69 6-6 6H6c-3.31 0-6-2.69-6-6z"
      />
    </g>
    <defs>
      <clipPath id="file-outline_svg__a">
        <path fill="#fff" d="M0 0h36v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgFileOutline
