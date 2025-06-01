import type { SVGProps } from 'react'
const SvgCircle2Outline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#circle-2-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M20 3.75a16.25 16.25 0 1 1 0 32.5 16.25 16.25 0 0 1 0-32.5M20 40a20 20 0 1 0 0-40 20 20 0 0 0 0 40m-2.602-26.82a3.2 3.2 0 0 1 1.977-.649l.266.008a2.9 2.9 0 0 1 2.859 2.899 2.9 2.9 0 0 1-.914 2.117l-8.492 7.953a1.87 1.87 0 0 0-.461 2.055c.281.71.976 1.187 1.742 1.187h11.25a1.87 1.87 0 0 0 1.875-1.875A1.87 1.87 0 0 0 25.625 25h-6.508l5.031-4.719a6.648 6.648 0 0 0-4.445-11.5l-.265-.008a6.95 6.95 0 0 0-4.305 1.415l-1.89 1.437a1.87 1.87 0 0 0-.352 2.625 1.87 1.87 0 0 0 2.625.352l1.89-1.438z"
      />
    </g>
    <defs>
      <clipPath id="circle-2-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgCircle2Outline
