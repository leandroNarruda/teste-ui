import type { SVGProps } from 'react'
const SvgCircle1Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-1-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M36.25 20a16.25 16.25 0 1 0-32.5 0 16.25 16.25 0 0 0 32.5 0M0 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0m20.938-9.75c.578.336.937.953.937 1.625V26.25H25a1.87 1.87 0 0 1 1.875 1.875A1.87 1.87 0 0 1 25 30H15a1.87 1.87 0 0 1-1.875-1.875A1.87 1.87 0 0 1 15 26.25h3.125V15.11l-1.57.898A1.87 1.87 0 0 1 14 15.313a1.875 1.875 0 0 1 .695-2.555l4.375-2.5a1.89 1.89 0 0 1 1.875.008z"
      />
    </g>
    <defs>
      <clipPath id="circle-1-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircle1Outline
