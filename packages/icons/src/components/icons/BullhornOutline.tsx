import type { SVGProps } from 'react'
const SvgBullhornOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g clipPath="url(#bullhorn-outline_svg__a)">
      <path
        fill="#B3B3C3"
        d="m33.75 5.647-.836.836a24.38 24.38 0 0 1-16.664 7.133V23.63a24.38 24.38 0 0 1 16.664 7.133l.836.836zM12.5 9.873h3.18a20.63 20.63 0 0 0 14.586-6.039L33.234.866C34.804-.713 37.5.405 37.5 2.63v11.274c1.453.687 2.5 2.539 2.5 4.718 0 2.18-1.047 4.032-2.5 4.72v11.272c0 2.227-2.695 3.344-4.266 1.766l-2.968-2.969a20.6 20.6 0 0 0-14.016-6.03v8.116a4.38 4.38 0 0 1-4.375 4.375h-2.5A4.38 4.38 0 0 1 5 35.498v-8.125c-2.758 0-5-2.242-5-5v-7.5c0-2.757 2.242-5 5-5zm-3.75 17.5v8.125c0 .344.281.625.625.625h2.5a.627.627 0 0 0 .625-.625v-8.125zM5 13.623c-.687 0-1.25.563-1.25 1.25v7.5c0 .688.563 1.25 1.25 1.25h7.5v-10z"
      />
    </g>
    <defs>
      <clipPath id="bullhorn-outline_svg__a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgBullhornOutline
