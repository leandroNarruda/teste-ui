import type { SVGProps } from 'react'
const SvgTagsOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 41 40"
    {...props}
  >
    <g clipPath="url(#tags-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M26.977 3.059a1.874 1.874 0 0 0-2.649-.016 1.874 1.874 0 0 0-.015 2.648l9.976 10.102a6.87 6.87 0 0 1 0 9.664l-8.742 8.852a1.874 1.874 0 0 0 .015 2.648 1.874 1.874 0 0 0 2.649-.016l8.75-8.843a10.62 10.62 0 0 0 0-14.938zm-7.993.906a5 5 0 0 0-3.539-1.461H3.773c-2.07 0-3.75 1.68-3.75 3.75v11.68c0 1.328.524 2.601 1.461 3.539L14.61 34.598a5 5 0 0 0 7.07 0l10.43-10.43a5 5 0 0 0 0-7.07L18.984 3.973zM3.774 6.254h11.68c.327 0 .648.133.882.367L29.46 19.746a1.254 1.254 0 0 1 0 1.766l-10.43 10.43a1.254 1.254 0 0 1-1.765 0L4.14 18.815a1.25 1.25 0 0 1-.368-.882zm7.5 5a2.5 2.5 0 1 0-5.001 0 2.5 2.5 0 0 0 5 0"
      />
    </g>
    <defs>
      <clipPath id="tags-outline_svg__a">
        <path fill="#fff" d="M.027 0h40v40h-40z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgTagsOutline
