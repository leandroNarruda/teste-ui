import type { SVGProps } from 'react'
const SvgMessageDotsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#message-dots-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M19.5 39c0-2.484-2.016-4.5-4.5-4.5H6c-.825 0-1.5-.675-1.5-1.5V6c0-.825.675-1.5 1.5-1.5h36c.825 0 1.5.675 1.5 1.5v27c0 .825-.675 1.5-1.5 1.5H28.997c-.975 0-1.922.319-2.7.9L19.5 40.5zm-.019 7.144.019-.019L28.997 39H42c3.31 0 6-2.69 6-6V6c0-3.31-2.69-6-6-6H6C2.69 0 0 2.69 0 6v27c0 3.31 2.69 6 6 6h9v7.5c0 .572.319 1.087.825 1.34a1.52 1.52 0 0 0 1.575-.14l1.603-1.2zM13.5 22.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m13.5-3a3 3 0 1 0-6 0 3 3 0 0 0 6 0m7.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      />
    </g>
    <defs>
      <clipPath id="message-dots-outline_svg__a">
        <path fill="#fff" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMessageDotsOutline
