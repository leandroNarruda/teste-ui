import type { SVGProps } from 'react'
const SvgBanSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#ban-solido_svg__a)">
      <path d="M28.688 32.227 7.773 11.313A14.87 14.87 0 0 0 5 20c0 8.281 6.719 15 15 15 3.242 0 6.242-1.023 8.688-2.773m3.539-3.54A14.87 14.87 0 0 0 35 20c0-8.281-6.719-15-15-15a14.87 14.87 0 0 0-8.687 2.773zM40 20c0 11.047-8.953 20-20 20S0 31.047 0 20 8.953 0 20 0s20 8.953 20 20" />
    </g>
    <defs>
      <clipPath id="ban-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgBanSolido
