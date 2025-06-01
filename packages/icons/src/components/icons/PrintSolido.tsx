import type { SVGProps } from 'react'
const SvgPrintSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#print-solido_svg__a)">
      <path d="M10 0C7.242 0 5 2.242 5 5v7.5h5V5h17.71L30 7.29v5.21h5V7.29a5 5 0 0 0-1.46-3.54l-2.29-2.29A5 5 0 0 0 27.71 0zm20 27.5V35H10v-7.5zm5 2.5h2.5c1.383 0 2.5-1.117 2.5-2.5V20c0-2.758-2.242-5-5-5H5c-2.758 0-5 2.242-5 5v7.5C0 28.883 1.117 30 2.5 30H5v5c0 2.758 2.242 5 5 5h20c2.758 0 5-2.242 5-5zm-1.25-6.875a1.87 1.87 0 0 1-1.875-1.875 1.87 1.87 0 0 1 1.875-1.875 1.87 1.87 0 0 1 1.875 1.875 1.87 1.87 0 0 1-1.875 1.875" />
    </g>
    <defs>
      <clipPath id="print-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPrintSolido
