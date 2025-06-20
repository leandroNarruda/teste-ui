import type { SVGProps } from 'react'
const SvgEyeOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 22"
    {...props}
  >
    <g clipPath="url(#eye-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M12 3.333c2.717 0 4.95 1.234 6.662 2.821 1.605 1.492 2.713 3.263 3.28 4.513-.567 1.25-1.675 3.02-3.275 4.512C16.95 16.767 14.717 18 12 18s-4.95-1.233-6.663-2.82c-1.604-1.492-2.712-3.263-3.279-4.513.567-1.25 1.675-3.021 3.275-4.513C7.05 4.567 9.283 3.334 12 3.334m8.025 1.359C18.062 2.867 15.367 1.333 12 1.333S5.937 2.867 3.975 4.692C2.025 6.504.72 8.667.1 10.154c-.138.33-.138.696 0 1.025.62 1.488 1.925 3.654 3.875 5.463C5.937 18.467 8.633 20 12 20s6.062-1.533 8.025-3.358c1.95-1.809 3.254-3.975 3.87-5.463.138-.329.138-.696 0-1.025-.616-1.487-1.92-3.654-3.87-5.462M12 14a3.332 3.332 0 1 1 0-6.667h.083a2.67 2.67 0 0 0 3.25 3.25v.084A3.33 3.33 0 0 1 12 14m0-8.667A5.333 5.333 0 1 0 12 16a5.333 5.333 0 0 0 0-10.667"
      />
    </g>
    <defs>
      <clipPath id="eye-outline_svg__a">
        <path fill="#fff" d="M24 0H0v21.333h24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgEyeOutline
