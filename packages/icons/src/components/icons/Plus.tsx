import type { SVGProps } from 'react'
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path fill="#fff" d="M14 8H8v6H6V8H0V6h6V0h2v6h6z" />
  </svg>
)
export default SvgPlus
