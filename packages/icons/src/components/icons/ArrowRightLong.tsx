import type { SVGProps } from 'react'
const SvgArrowRightLong = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#2E2640"
      d="M0 20c0 1.383 1.117 2.5 2.5 2.5h28.96l2.5-2.5-2.5-2.5H2.5A2.497 2.497 0 0 0 0 20"
    />
    <path
      fill="#FF4545"
      d="M39.266 18.234a2.504 2.504 0 0 1 0 3.54l-10 10a2.504 2.504 0 0 1-3.54-3.54L33.962 20l-8.227-8.234a2.504 2.504 0 0 1 3.54-3.54l10 10z"
    />
  </svg>
)
export default SvgArrowRightLong
