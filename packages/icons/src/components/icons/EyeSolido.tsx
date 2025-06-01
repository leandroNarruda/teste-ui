import type { SVGProps } from 'react'
const SvgEyeSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 24 22"
    {...props}
  >
    <g clipPath="url(#eye-solido_svg__a)">
      <path d="M12 1.333c3.367 0 6.062 1.534 8.025 3.359 1.95 1.808 3.254 3.975 3.87 5.462.138.33.138.696 0 1.025-.616 1.488-1.92 3.654-3.87 5.463C18.062 18.467 15.367 20 12 20s-6.063-1.533-8.025-3.358C2.025 14.829.72 12.667.1 11.179a1.33 1.33 0 0 1 0-1.025C.72 8.667 2.025 6.5 3.975 4.692 5.937 2.867 8.633 1.333 12 1.333m6 9.334a6 6 0 1 0-12 0 6 6 0 0 0 12 0M12 8a2.67 2.67 0 0 0 3.512 2.53c.23-.076.496.066.488.308a4.002 4.002 0 0 1-5.033 3.692 4.002 4.002 0 0 1 .862-7.863c.242-.009.383.254.308.487-.087.267-.137.55-.137.846" />
    </g>
    <defs>
      <clipPath id="eye-solido_svg__a">
        <path d="M24 0H0v21.333h24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgEyeSolido
