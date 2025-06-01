import type { SVGProps } from 'react'
const SvgPersonOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#person-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M16.25 4.474a3.75 3.75 0 1 1 7.498 0 3.75 3.75 0 0 1-7.499 0m2.5 10.008v9.992h2.5v-9.992c-.056 0-.118-.008-.18-.008h-2.141c-.063 0-.117 0-.18.008m0 13.742V38.85a1.87 1.87 0 0 1-1.876 1.875A1.87 1.87 0 0 1 15 38.85V18.193l-3.367 5.953a1.88 1.88 0 0 1-2.555.711 1.88 1.88 0 0 1-.71-2.555l4.577-8.086a6.88 6.88 0 0 1 5.985-3.492h2.148a6.88 6.88 0 0 1 5.985 3.492l4.57 8.086a1.873 1.873 0 0 1-.711 2.555 1.87 1.87 0 0 1-2.555-.71L25 18.192v20.656a1.87 1.87 0 0 1-1.875 1.875 1.87 1.87 0 0 1-1.875-1.875V28.224z"
      />
    </g>
    <defs>
      <clipPath id="person-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPersonOutline
