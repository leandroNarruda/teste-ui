import type { SVGProps } from 'react'
const SvgCircleQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#B3B3C3"
      d="M14.5 8a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.306-2.834A1.75 1.75 0 0 1 6.956 4h1.822a1.972 1.972 0 0 1 .981 3.684l-1.009.578A.75.75 0 0 1 8 9a.75.75 0 0 1-.75-.75v-.422c0-.269.144-.516.378-.65l1.384-.794a.473.473 0 0 0-.234-.88H6.956c-.106 0-.2.065-.234.165l-.013.037a.75.75 0 0 1-1.412-.5l.012-.037zM7 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
    />
  </svg>
)
export default SvgCircleQuestion
