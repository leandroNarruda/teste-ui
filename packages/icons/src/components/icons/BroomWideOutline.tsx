import type { SVGProps } from 'react'
const SvgBroomWideOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#broom-wide-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M39.453 3.203a1.867 1.867 0 0 0 0-2.648 1.874 1.874 0 0 0-2.648 0L26.172 11.172l-1.008-1.008a4.995 4.995 0 0 0-5.96-.836L1.28 19.29A2.5 2.5 0 0 0 0 21.47c0 .664.266 1.297.727 1.765l16.046 16.04A2.5 2.5 0 0 0 18.54 40c.906 0 1.742-.492 2.18-1.281l9.953-17.922a4.994 4.994 0 0 0-.836-5.961l-1.008-1.008zM25.281 22.781 18.25 35.445l-7.547-7.547 1.406-4.21a.623.623 0 0 0-.789-.79l-4.218 1.399-2.54-2.54 12.665-7.03z"
      />
    </g>
    <defs>
      <clipPath id="broom-wide-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgBroomWideOutline
