import type { SVGProps } from 'react'
const SvgUserOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#user-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M23.75 24.474h-7.5c-7.594 0-13.75 6.157-13.75 13.75a2.5 2.5 0 0 0 2.5 2.5h30a2.5 2.5 0 0 0 2.5-2.5c0-7.593-6.156-13.75-13.75-13.75m-17.423 12.5c.618-4.93 4.83-8.75 9.923-8.75h7.5c5.09 0 9.305 3.824 9.922 8.75zM20 20.724c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.478-10 10c0 5.524 4.477 10 10 10m0-16.25a6.257 6.257 0 0 1 6.25 6.25 6.257 6.257 0 0 1-6.25 6.25 6.26 6.26 0 0 1-6.25-6.25A6.26 6.26 0 0 1 20 4.474"
      />
    </g>
    <defs>
      <clipPath id="user-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgUserOutline
