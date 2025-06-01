import type { SVGProps } from 'react'
const SvgNoteSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#note-solido_svg__a)">
      <path d="M0 5.714A5.72 5.72 0 0 1 5.714 0h28.572A5.72 5.72 0 0 1 40 5.714v20H30A4.287 4.287 0 0 0 25.714 30v10h-20A5.72 5.72 0 0 1 0 34.286zm35.955 22.857H40l-2.857 2.858-5.714 5.714L28.57 40V30c0-.786.643-1.429 1.429-1.429zM10 30.714a2.143 2.143 0 1 0-4.287 0 2.143 2.143 0 0 0 4.287 0M7.857 7.143a2.143 2.143 0 1 0 0 4.286 2.143 2.143 0 0 0 0-4.286M10 20a2.143 2.143 0 1 0-4.285 0A2.143 2.143 0 0 0 10 20" />
    </g>
    <defs>
      <clipPath id="note-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgNoteSolido
