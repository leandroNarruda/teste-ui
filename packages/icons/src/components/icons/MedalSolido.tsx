import type { SVGProps } from 'react'
const SvgMedalSolido = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#medal-solido_svg__a)">
      <path d="M.32 2.984A1.92 1.92 0 0 1 1.922 0h8.539c.875 0 1.695.46 2.14 1.21l5.352 8.915a16.2 16.2 0 0 0-9.64 4.836zm39.352 0-7.984 11.977a16.2 16.2 0 0 0-9.641-4.836l5.351-8.914A2.5 2.5 0 0 1 29.54 0h8.54a1.92 1.92 0 0 1 1.6 2.984zM6.25 26.25a13.75 13.75 0 1 1 27.5 0 13.75 13.75 0 0 1-27.5 0m14.406-7.414a.73.73 0 0 0-1.312 0l-1.75 3.547a.72.72 0 0 1-.547.398l-3.922.57c-.602.087-.836.82-.406 1.25l2.836 2.766c.172.172.25.406.21.649l-.671 3.898a.734.734 0 0 0 1.062.773l3.5-1.843a.75.75 0 0 1 .68 0l3.5 1.843a.732.732 0 0 0 1.062-.773l-.671-3.898a.75.75 0 0 1 .21-.649l2.836-2.765c.438-.422.196-1.157-.406-1.25l-3.914-.57a.73.73 0 0 1-.547-.4z" />
    </g>
    <defs>
      <clipPath id="medal-solido_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgMedalSolido
