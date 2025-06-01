import type { SVGProps } from 'react'
const SvgNoteOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#note-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M34.286 4.286c.785 0 1.428.643 1.428 1.428v20h-7.143a2.854 2.854 0 0 0-2.857 2.857v7.143h-20a1.433 1.433 0 0 1-1.428-1.428V5.714c0-.785.643-1.428 1.428-1.428zM5.714 40h20.491a5.72 5.72 0 0 0 4.045-1.67l8.08-8.08A5.72 5.72 0 0 0 40 26.205V5.715A5.72 5.72 0 0 0 34.286 0H5.714A5.72 5.72 0 0 0 0 5.714v28.572A5.72 5.72 0 0 0 5.714 40m5.715-10.714a2.143 2.143 0 1 0-4.286 0 2.143 2.143 0 0 0 4.286 0M9.286 8.57a2.143 2.143 0 1 0 0 4.286 2.143 2.143 0 0 0 0-4.286M11.429 20a2.143 2.143 0 1 0-4.286 0 2.143 2.143 0 0 0 4.286 0"
      />
    </g>
    <defs>
      <clipPath id="note-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgNoteOutline
