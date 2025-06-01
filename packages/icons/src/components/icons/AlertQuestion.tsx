import type { SVGProps } from 'react'
const SvgAlertQuestion = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FFD33A"
      d="M12 24c6.628 0 12-5.372 12-12S18.628 0 12 0 0 5.372 0 12s5.372 12 12 12m0-18c.623 0 1.125.502 1.125 1.125v5.25c0 .623-.502 1.125-1.125 1.125a1.12 1.12 0 0 1-1.125-1.125v-5.25C10.875 6.502 11.377 6 12 6m1.5 10.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5"
    />
  </svg>
)
export default SvgAlertQuestion
