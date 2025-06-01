import type { SVGProps } from 'react'
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill="#fff"
      d="M12 12.5c3.787 0 6.857-2.686 6.857-6S15.787.5 12 .5s-6.857 2.686-6.857 6 3.07 6 6.857 6m-2.448 2.25C4.275 14.75 0 18.49 0 23.108c0 .769.713 1.392 1.591 1.392H22.41c.879 0 1.591-.623 1.591-1.392 0-4.617-4.275-8.358-9.552-8.358z"
    />
  </svg>
)
export default SvgUser
