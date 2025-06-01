import type { SVGProps } from 'react'
const SvgBellOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <g clipPath="url(#bell-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="M20 .724a2.497 2.497 0 0 0-2.5 2.5v1.399c-5.664.898-10 5.804-10 11.726v2.61c0 3.547-1.21 6.992-3.422 9.757l-1.164 1.461a1.876 1.876 0 0 0 1.46 3.047h31.251a1.876 1.876 0 0 0 1.461-3.047l-1.164-1.453A15.68 15.68 0 0 1 32.5 18.96v-2.61c0-5.922-4.336-10.828-10-11.726V3.224c0-1.383-1.117-2.5-2.5-2.5m0 7.5h.625a8.13 8.13 0 0 1 8.125 8.125v2.61c0 3.742 1.086 7.39 3.102 10.515H8.149A19.4 19.4 0 0 0 11.25 18.96v-2.61a8.13 8.13 0 0 1 8.125-8.125zm5 27.5H15c0 1.328.524 2.602 1.461 3.54a5 5 0 0 0 3.54 1.46 5 5 0 0 0 3.538-1.46A5 5 0 0 0 25 35.723"
      />
    </g>
    <defs>
      <clipPath id="bell-outline_svg__a">
        <path fill="#fff" d="M0 .724h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgBellOutline
