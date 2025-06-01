import type { SVGProps } from 'react'
const SvgHourglassHalf = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 32"
    {...props}
  >
    <path
      fill="#fff"
      d="M2.497 0c-1.106 0-2 .894-2 2s.894 2 2 2v.688c0 2.65 1.056 5.193 2.931 7.068L9.666 16l-4.238 4.244a10 10 0 0 0-2.931 7.069V28c-1.106 0-2 .894-2 2s.894 2 2 2h20c1.106 0 2-.894 2-2s-.894-2-2-2v-.687c0-2.65-1.056-5.194-2.931-7.07L15.328 16l4.244-4.244a10 10 0 0 0 2.931-7.068V4c1.106 0 2-.894 2-2s-.894-2-2-2H2.497m4 4.688V4h12v.688c0 1.187-.35 2.337-1 3.312h-10a6 6 0 0 1-1-3.312m1 19.312a6.3 6.3 0 0 1 .756-.931l4.244-4.238 4.244 4.244q.429.433.756.931h-10z"
    />
  </svg>
)
export default SvgHourglassHalf
